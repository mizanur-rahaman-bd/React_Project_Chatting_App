import React, { useEffect, useState } from "react";
import "./AllUserCompo.css";
import CommonUser from "../Common/CommonUser/CommonUser";
import CommonButtonV1 from "../Common/CommonButton/CommonButtonV1";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";

const AllUserCompo = () => {
  // redux data
  const reduxUser = useSelector((state) => state.currentUser.value);

  // state variable
  const [allUsersData, setAllUsersData] = useState([]);

  // FireBase Variable
  const db = getDatabase();

  // Function Part
  const handleAdd = (data) => {
    set(push(ref(db, "friendRequest/")), {
      senderID: reduxUser.uid,
      senderName: reduxUser.displayName,
      senderPhoto: reduxUser.photoURL,
      receiverID: data.key,
      receiverName: data.userName,
      receiverPhoto: data.userPhoto,
    });
  };

  // RealTime Data
  useEffect(() => {
    onValue(ref(db, "allusers/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.key != reduxUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
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
            <div
              key={item.key}
              className="single_user mb-6 flex justify-evenly"
            >
              <div>
                <CommonUser
                  commonUserPhoto={item.userPhoto}
                  commonUserName={item.userName}
                />
              </div>
              <div className="flex gap-6">
                <CommonButtonV1
                  Common_Button_V1_Click={() => handleAdd(item)}
                  Common_Button_V1_content={"ADD FRIEND"}
                />
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
