const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const conn = require('../dbConnection').promise();
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "byte@gmail.com",
        pass: "Byte@12345"
    }
})

exports.register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ status: 0, errors: errors.array() });
    }

    try {

        const [row] = await conn.execute(
            "SELECT `user_email` FROM `bytebrackts_user` WHERE `user_email`=?",
            [req.body.user_email],
        );

        const mailOption = {
            from: 'bytebractss@gmail.com',
            to: req.body.user_email,
            subject: 'Welcome to byteBrackts',
            text: `Hello ${req.body.user_name}, Thanks for choosing my web pages`
        }
    

        transport.sendMail(mailOption, function (err, data) {
            if (err) {
                console.log('error', err)
            } else {
                console.log("sent email")
            }
        })

        if (row.length > 0) {
            return res.status(208).json({
                status: 1,
                message: "Exists!!",
            });
        }

        const hashPass = await bcrypt.hash(req.body.user_password, 12);
        const IsVerified = "true";
        const resetToken = "";


        const [rows] = await conn.execute('INSERT INTO `bytebrackts_user`(`user_name`,`user_email`,`user_password`,`user_contact`,`user_address`,`IsVerified`,`resetToken`) VALUES(?,?,?,?,?,?,?,?)', [
            req.body.user_name,
            req.body.user_email,
            hashPass,
            req.body.user_contact,
            req.body.user_address,
            IsVerified,
            resetToken

        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                status: 1,
                message: "Inserted!!",
            });
        }
    } catch (err) {
        next(err);
    }
}