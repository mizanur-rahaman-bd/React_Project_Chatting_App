import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, Zoom } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../../Slices/UserSlice";
import { getDatabase, ref, set } from "firebase/database";

const Login = () => {
  // variable part
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passWordError, setPassWordError] = useState("");

  // FireBase Variable
  const auth = getAuth();
  const db = getDatabase();

  // Redux variable
  const dispatch = useDispatch();

  // function part
  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Enter Your Email");
    }
    if (!password) {
      setPassWordError("Enter Your Password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          // console.log(user);
          if (user.emailVerified === false) {
            toast.error("Your Email is not Varified", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Zoom,
            });
          } else {
            Navigate("/");
            // set data to the redux
            dispatch(userData(userCredential.user));

            // set data to the local storage
            localStorage.setItem("user", JSON.stringify(userCredential.user));

            // set user
            set(ref(db, "allusers/" + userCredential.user.uid), {
              userName: userCredential.user.displayName ,
              userPhoto: userCredential.user.photoURL
            });

            toast.success("Wlcome to Gracias", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Zoom,
            });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/invalid-credential") {
            toast.warn("Something Went Wrong", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Zoom,
            });
          }
          console.log(errorCode);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="bg-Brand_Color p-2 flex justify-center pb-[200px]">
          <form>
            <div className="login w-[540px] mt-[50px] ml-[148px] py-[30px] rounded-[20px] px-[72px] bg-[#FFFFFF] rounded[20px]">
              <div className="">
                <h1 className="text-center font-semibold text-[28px] text-[#101828]">
                  Login to your account
                </h1>
                <h2 className="mt-[32px] mb-[12px] text-[16px] font-normal text-[#101828]">
                  Email
                </h2>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value), setEmailError("");
                  }}
                  type="email"
                  className="w-[396px] h-[48px] border-solid border-2 border-blue-400 outline-none p-1 rounded-lg"
                  placeholder="example@gmail.com"
                />
                <p className="text-[15px] text-red-600 font-bold">
                  {emailError}
                </p>
              </div>
              <div className="password_row flex justify-between mt-[24px] mb-[12px] text-[16px] font-normal relative">
                <h2>Password</h2>
                <Link to={"/forgetpassword"} className="text-blue-400">
                  Forgot？
                </Link>
              </div>
              <input
                onChange={(e) => {
                  setPassword(e.target.value), setPassWordError("");
                }}
                type={show ? "text" : "password"}
                className="w-[396px] h-[48px] border-solid border-2 border-blue-400 outline-none p-1 rounded-lg"
                placeholder="Enter your password"
              />
              {show ? (
                <IoEyeOutline
                  onClick={handleShow}
                  className="absolute right-[450px] top-[325px]"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={handleShow}
                  className="absolute right-[450px] top-[325px]"
                />
              )}

              <p className="text-[15px] text-red-600 font-bold mb-[32px]">
                {passWordError}
              </p>

              <button
                onClick={handleSubmit}
                type="submit"
                className=" w-[396px] mb-[14px] p-[16px] bg-blue-500 text-white text-[16px]  font-medium rounded-[8px] hover:bg-[#F5004F] active:scale-110"
              >
                Login now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
