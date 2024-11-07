import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast } from "react-toastify";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

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
  const [loading, setLoding] = useState(false);

  // FireBase Variable
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const fbprovider = new FacebookAuthProvider();

  // Function Part
  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = (e) => {
    setLoding(true);
    e.preventDefault();
    if (!name) {
      setNameError("Enter Your Name");
    }
    if (!email) {
      setEmailError("Enter Your Email");
    }
    if (!password) {
      setPassWordError("Enter Your Password");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser).then(() => {
            setLoding(false);
            toast.info("Verify Your Email", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
            // set user name and profile pic
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&s",
            })
              .then(() => {
                navigate("/login");
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
          });
        })
        .catch((error) => {
          setLoding(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/email-already-in-use") {
            toast.error("Email Already Taken", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
        });
    }
  };
  // google sign in button
  const handleGoogle = () => {
    signInWithPopup(auth, provider);
    then((result) => {
      navigate("/");
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };

  // fb sign in button
  const handleFb = () => {
    signInWithPopup(auth, fbprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
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
              <button onClick={handleGoogle}>
                <img src="images/googleLogo.png" alt="google" />{" "}
                <p className="font-poppin font-medium text-[8px] lg:text-[18px]">
                  Sign up with google
                </p>
              </button>
            </div>
            <div className="fb">
              <button onClick={handleFb}>
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
                {loading ? (
                  <button onClick={handleSubmit} type="submit">
                    <ClipLoader color="red" />
                  </button>
                ) : (
                  <button onClick={handleSubmit} type="submit">
                    Create Account
                  </button>
                )}
              </div>
              <div className="user_account_login text-center">
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate("/login")}
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
