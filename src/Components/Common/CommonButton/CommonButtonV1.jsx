import React from "react";
import "./CommonButtonV1.css";

const CommonButtonV1 = ({ Common_Button_V1_content, Common_Button_V1_Click }) => {
  return (
    <>
      <div className="commonButtonV1">
        <button onClick={Common_Button_V1_Click}>{Common_Button_V1_content}</button>
      </div>
    </>
  );
};

export default CommonButtonV1;
