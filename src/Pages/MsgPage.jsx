import React from "react";
import MsgSideBarCompo from "../Components/MsgSideBarCompo/MsgSideBarCompo";
import MsgBoxCompo from "../Components/MsgBoxCompo/MsgBoxCompo";

const MsgPage = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex mt-8">
            <MsgSideBarCompo />
            <MsgBoxCompo />
          </div>
        </div>
      </div>
    </>
  );
};

export default MsgPage;
