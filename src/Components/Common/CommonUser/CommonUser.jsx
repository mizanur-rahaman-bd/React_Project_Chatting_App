import React from "react";
import "./CommonUser.css";

const CommonUser = ({ commonUserPhoto, commonUserName }) => {
  return (
    <>
      <div className="common_User">
        <div className="common_user_img">
          <img src={commonUserPhoto} alt="" />
        </div>
        <h2 className="text-[20px] font-poppin font-medium text-black">
          {commonUserName}
        </h2>
      </div>
    </>
  );
};

export default CommonUser;
