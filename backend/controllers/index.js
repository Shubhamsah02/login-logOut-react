const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();
const conn = require('./dbConnection');
const body = require('body-parser');

app.use(cors())
app.use(body.urlencoded({extended: true}))

app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
  
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});


app.listen(3008,() => console.log('Server is running on port 3008 '));