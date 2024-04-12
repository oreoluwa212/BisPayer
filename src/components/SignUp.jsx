import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'

const SignUp = ({ setOpenSignUpModal, onClickOpenLogIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, pwd).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
          toast.success("Account creation successful!");
          setOpenSignUpModal(false);
        }
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-section">
          <div onClick={() => setOpenSignUpModal(false)} className="logo-text">
            <FaTimes />
          </div>

          <div className="login-style">
            <div className="log-in">
              <h1>Sign Up</h1>
              <p>Enter your credentials to access your account</p>

              <form className="form-place" onSubmit={handleSubmit}>
                <div className="email">
                  <label htmlFor="">Email address</label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <div className="forgot-password">
                    <label htmlFor="">Password</label>
                  </div>
                  <input
                    type="password"
                    placeholder="smaTiger321@"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <h5>Keep me signed in</h5>
                </div>

                <div className="login-btn">
                  <button type="submit">Sign Up</button>

                  <p>
                    Already have an account?{" "}
                    <span
                      style={{ cursor: "pointer" }}
                    >
                      Log In
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
