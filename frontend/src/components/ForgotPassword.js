import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

function ForgotPassword() {
  const [user_email,setUserEmail]=useState("");
  const navigate = useNavigate();
  const forgotPassword=()=>{
    axios.post('http://localhost:3008/resetPassword',
    {
        user_email:user_email
    })

    navigate('/resetpassword')
}

  return (
    <>
  
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Forgot Password</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-from-section mt-150"
        style={{ paddingBottom: "25px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Forgot Password!!</h2>
                <p>
                  Enter Your Registered E-mail Address and Please Check Your
                  Mail for Further Process...
                </p>
              </div>
              <div id="form_status">
                <div className="contact-form">
                  <form type="POST" id="fruitkha-contact" onSubmit={forgotPassword}>
                    <p>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={(e) => {setUserEmail(e.target.value) }}  required/>
                    </p>
                    <p>
                      <input type="submit" value="Send" />
                      {/* <button type="submit" class="btn btn-success" value="Send">Send</button> */}
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h2>Remember Password?</h2>
                  <p>
                    A user should never allow  It
                    should settle at you and create fantacy.
                  </p>
                  <Link to="/" className="btn_3">
                    Goto Login page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
