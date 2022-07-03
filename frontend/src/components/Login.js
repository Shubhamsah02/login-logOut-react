import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  localStorage.clear();
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3008/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_email: user_email,
        user_password: user_password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.message === "Invalid!!") {
      alert("You are not registered!!");
      navigate("/register");
      
    } else {

    if (json.status) {
      window.localStorage.setItem("token", json.token);
      window.localStorage.setItem("EcomEmail", json.user_email);
      window.localStorage.setItem("EcomUserId", json.user_id);
      window.localStorage.setItem("EcomUser", json.user);
      window.localStorage.setItem("Ecomrole", json.role);
      if (json.role === "User") {
        navigate("/home");
        window.location.reload();
      } 
    }
  }
};

  return (
    <>
      <div className="breadcrumb-section-ratings breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Login pages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-from-section mt-150"
        style={{ paddingBottom: "25px" }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h3>
                  Welcome Back ! <br />
                  Please Login in now
                </h3>
                <p>
                  To keep connected with us please login with your personal info
                </p>
              </div>
              <div id="form_status">
                <div className="contact-form">
                  <form type="POST" id="fruitkha-contact" onSubmit={login}>
                    <p>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        value={user_email}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </p>
                    <p>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={user_password}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                    </p>
                    <input type="submit" value="Login" />
                    <Link to="/forgotpassword" className="btn_3" style={{paddingLeft:"500px"}}>
                      Forgot Password?
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h2>New User Create to  Account !</h2>
                  <p>
                  A user is a person who utilizes a computer or network service. A user often has a user account and is identified to the system by a username (or user name). Other terms for username include login name…
                  </p>
                  <Link to="/register" className="btn_3">
                    Create Account
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

export default Login;
