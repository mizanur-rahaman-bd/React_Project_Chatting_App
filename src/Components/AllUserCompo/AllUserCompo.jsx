import React from "react";
import "./AllUserCompo.css";
import CommonUser from "../Common/CommonUser/CommonUser";

const AllUserCompo = () => {
  return (
    <>
      <section className="AllUserCompo">
        <div className="container">
          <h2 className="text-2xl text-black font-medium mb-5">All Users</h2>
          <div>
            <CommonUser />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUserCompo;
