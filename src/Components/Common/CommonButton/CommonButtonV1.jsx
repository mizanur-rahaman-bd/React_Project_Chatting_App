import React from "react";
import "./CommonButtonV1.css";

const CommonButtonV1 = ({ Common_Button_V1_content }) => {
  return (
    <>
      <div className="commonButtonV1">
        <button>{Common_Button_V1_content}</button>
      </div>
    </>
  );
};

export default CommonButtonV1;
