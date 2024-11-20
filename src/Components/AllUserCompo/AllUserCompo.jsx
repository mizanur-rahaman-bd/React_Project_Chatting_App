import React, { useEffect, useState } from "react";
import "./AllUserCompo.css";
import CommonUser from "../Common/CommonUser/CommonUser";
import CommonButtonV1 from "../Common/CommonButton/CommonButtonV1";
import { getDatabase, ref, onValue } from "firebase/database";

const AllUserCompo = () => {
  // redux data

  // state variable
  const [allUsersData, setAllUsersData] = useState([]);

  // FireBase Variable
  const db = getDatabase();

  // Function Part

  // RealTime Data
  useEffect(() => {
    onValue(ref(db, "allusers/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setAllUsersData(arr);
    });
  }, []);

  return (
    <>
      <section className="AllUserCompo">
        <div className="container">
          <h2 className="text-3xl text-black font-bold mb-5 text-center">
            All Users
          </h2>
          {allUsersData.map((item) => (
            <div className="single_user mb-6 flex justify-evenly">
              <div>
                <CommonUser
                  commonUserPhoto={item.userPhoto}
                  commonUserName={item.userName}
                />
              </div>
              <div className="flex gap-6">
                <CommonButtonV1 Common_Button_V1_content={"ADD FRIEND"} />
                <CommonButtonV1 Common_Button_V1_content={"REMOVED"} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllUserCompo;
