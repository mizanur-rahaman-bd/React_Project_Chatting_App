import React from "react";
import "./AllUserCompo.css";
import CommonUser from "../Common/CommonUser/CommonUser";
import CommonButtonV1 from "../Common/CommonButton/CommonButtonV1";

const AllUserCompo = () => {
  return (
    <>
      <section className="AllUserCompo">
        <div className="container">
          <h2 className="text-3xl text-black font-bold mb-5 text-center">All Users</h2>
          <div className="flex justify-evenly">
          <div>
            <CommonUser />
          </div>
          <div className="flex gap-6">
            <CommonButtonV1 Common_Button_V1_content={'ADD FRIEND'} />
            <CommonButtonV1 Common_Button_V1_content={'REMOVED'} />
          </div>

          </div>
          
        </div>
      </section>
    </>
  );
};

export default AllUserCompo;
