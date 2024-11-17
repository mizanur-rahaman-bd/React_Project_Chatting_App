import React, { useEffect } from "react";
import User from "../Components/User/User";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const sliceUser = useSelector((state) => state.currentUser.value);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (sliceUser == null) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <>
      <div className="w-full h-screen bg-slate-500 m-auto flex justify-center items-center">
        <User />
      </div>
    </>
  );
};

export default Home;
