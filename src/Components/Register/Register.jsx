import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  // variable part
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passWordError, setPassWordError] = useState("");
  const [show, setShow] = useState(false);

  // Function Part
  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Enter Your Name");
    }
    if (!email) {
      setEmailError("Enter Your Email");
    }
    if (!password) {
      setPassWordError("Enter Your Password");
    }
  };

  return (
    <>
      <div className="account">
        <div className="account_text_img_col">
          <h2>Find 3D Objects, Mockups and Illustrations here.</h2>

          <div className="home_page_img">
            <img src="images/registerbg.png" alt="register" />
          </div>
        </div>
        <div className="account_form_col">
          <div className="language_selector">
            <select name="Language" id="language_selec">
              <option>English(UK)</option>
              <option>English(USA)</option>
              <option>Bengali</option>
              <option>Spanish</option>
              <option>Arabic</option>
              <option>French</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>German</option>
              <option>Japanese</option>
            </select>
          </div>
          <div className="heading">
            <h1>Create Account</h1>
          </div>
          <div className="other_account_login_access">
            <div className="google">
              <button>
                <img src="images/googleLogo.png" alt="google" />{" "}
                <p className="font-poppin font-medium text-[8px] lg:text-[18px]">
                  Sign up with google
                </p>
              </button>
            </div>
            <div className="fb">
              <button>
                <img src="images/fblogo.png" alt="fb" />
                <p className="font-poppin font-medium text-[8px] lg:text-[18px]">
                  Sign up with Facebook
                </p>
              </button>
            </div>
          </div>
          <div className="or font-poppin font-medium text-[15px] lg:text-[36px] text-[#A6A6A6] text-center mt-[20px] lg:mt-[44px]">
            <h3>- OR -</h3>
          </div>
          <div className="register_form">
            <form className="register_form_info">
              <div className="user_name text-center">
                <input
                  onChange={(e) => {
                    setName(e.target.value), setNameError("");
                  }}
                  type="text"
                  placeholder="Full name"
                />
                <p className="font-poppin font-medium text-[15px] text-red-700">
                  {nameError}
                </p>
              </div>
              <div className="user_email text-center">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value), setEmailError("");
                  }}
                  type="email"
                  placeholder="Email Address"
                />
                <p className="font-poppin font-medium text-[15px] text-red-700">
                  {emailError}
                </p>
              </div>
              <div className="password text-center relative ">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value), setPassWordError("");
                  }}
                  type={show ? "text" : "password"}
                  placeholder="Password"
                />
                {show ? (
                  <IoEyeOutline
                    onClick={handleShow}
                    className="absolute right-[20px] lg:right-[100px] top-4"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={handleShow}
                    className=" absolute right-[20px] lg:right-[100px] top-4"
                  />
                )}

                <p className="font-poppin font-medium text-[15px] text-red-700">
                  {passWordError}
                </p>
              </div>

              <div className="user_info_submit_button text-center">
                <button onClick={handleSubmit} type="submit">
                  Create Account
                </button>
              </div>
              <div className="user_account_login text-center">
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate("./login")}
                    className="text-Brand_Color"
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
