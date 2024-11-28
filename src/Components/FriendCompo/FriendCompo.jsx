import React, { useEffect, useState } from "react";
import CommonUser from "../Common/CommonUser/CommonUser";
import CommonButtonV1 from "../Common/CommonButton/CommonButtonV1";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const FriendCompo = () => {
  // REDUX DATA
  const sliceUser = useSelector((state) => state.currentUser.value);

  // Variable Part
  const [allFriends, setAllFriends] = useState([]);

  // FireBase Variable
  const db = getDatabase();

  // All Function

  // Real Time Data Base
  useEffect(() => {
    onValue(ref(db, "friends/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().currentUserID == sliceUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllFriends(arr);
    });
  }, []);

  return (
    <>
      <section className="friendCompo">
        <div className="container">
          <h2 className="text-3xl text-black font-bold mt-10 mb-5 text-center">
            All FRIENDS
          </h2>
          {allFriends.map((item) => (
            <div
              key={item.key}
              className="single_user mb-6 flex justify-evenly"
            >
              <div>
                <CommonUser
                  commonUserName={item.friendName}
                  commonUserPhoto={item.friendPhoto}
                />
              </div>
              <div className="flex gap-6">
                <CommonButtonV1 Common_Button_V1_content={"UNFRIEND"} />
                <CommonButtonV1 Common_Button_V1_content={"BLOCK"} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FriendCompo;
