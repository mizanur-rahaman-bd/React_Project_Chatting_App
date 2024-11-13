import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, Zoom } from "react-toastify";
import { useSelector } from "react-redux";

const ForgetPassWord = () => {
  const [inputdata, setinputdata] = useState("");

  // FireBase Variable
  const auth = getAuth();

  const handleReset = () => {
    if (!inputdata) {
      alert("Enter Your Email");
    } else {
      sendPasswordResetEmail(auth, inputdata)
        .then(() => {
          console.log("email sent");
          toast.info("Check Your Email", {
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
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  return (
    <>
      <div className="relative w-[600px] m-auto mt-20">
        <h2 className="font-poppin font-medium text-slate-800 text-[25px]">
          Reset PassWord
        </h2>
        <input
          onChange={(e) => setinputdata(e.target.value)}
          type="email"
          placeholder="Enter Your Email Address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-[500px] rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={handleReset}
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-[54px] items-center justify-center absolute bottom-0 rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="rememder_password text-center mt-[20px]">
        <Link
          className="font-poppin font-semibold text-slate-800 text-[16px] ml-[-50px]"
          to={"/login"}
        >
          Remember PassWord? Login
        </Link>
      </div>
    </>
  );
};

export default ForgetPassWord;
