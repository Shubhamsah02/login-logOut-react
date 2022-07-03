import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Register() {
  let navigate = useNavigate();

  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const [user_contact, setUserContact] = useState("");
  const [user_address, setUserAddress] = useState("");
  const [user_role, setUserRole] = useState("");

  const submitDetails = () => {
    Axios.post("http://localhost:3009/register", {
      user_name: user_name,
      user_email: user_email,
      user_password: user_password,
      user_contact: user_contact,
      user_address: user_address,
      user_role: user_role,
    })
    navigate("/");
  };

  return (
    <>
     
      <div className="breadcrumb-section-ratings breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Register</p>
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
                <h2>Register Here</h2>
                <p>Enter your personal details and start journey with us</p>
              </div>
              <div id="form_status" mb-7>
                <div className="contact-form">
                  <form  onSubmit={submitDetails}>
                    <p>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        name="name"
                        id="name"
                        value={user_name}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        required
                      />
                    </p>
                    <p>
                      <input
                        type="email"
                        placeholder='Email: example@gmail.com'
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name="email"
                        id="email"
                        value={user_email}
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                        }}
                        required
                      />
                    </p>
                    <p>
                      <input
                        type="password"
                        placeholder='Password: Example@123 (min-length 6)'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        name="password"
                        id="password"
                        value={user_password}
                        onChange={(e) => {
                          setUserPassword(e.target.value);
                        }}
                        required
                      />
                    </p>
                    <p>
                      <input
                        type="text"
                        placeholder="Contact Number"
                        name="number"
                        id="number"
                        value={user_contact}
                        onChange={(e) => {
                          setUserContact(e.target.value);
                        }}
                        required
                      />
                    </p>
                    <p>
                      <input
                        type="text"
                        placeholder="Full Address"
                        name="adress"
                        id="address"
                        value={user_address}
                        onChange={(e) => {
                          setUserAddress(e.target.value);
                        }}
                        required
                      />
                    </p>
                    <p>
                      <input type="submit" value="Register" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap" style={{ marginTop: "100px" }}>
                <div className="contact-form-box">
                  <h2>Already Have an Account?</h2>
                  <p>
                    A user should never allow t. It
                    should settle at you and create fantacy.
                  </p>
                  <Link to="/" className="btn_3">
                    Login Here
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

export default Register;
