import React, { useEffect, useState } from "react";
import CommonUser from "../Common/CommonUser/CommonUser";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const MsgSideBarCompo = () => {
  // REDUX DATA
  const sliceUser = useSelector((state) => state.currentUser.value);

  // Variable Part
  const [allFriends, setAllFriends] = useState([]);
  // FireBase Variable
  const db = getDatabase();

  // Real time Data Base
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
      <div>
        <div className="container">
          <div className="Msg_side_bar p-8 rounded-lg w-[300px] h-screen overflow-y-scroll bg-Brand_Color">
            <h2>FRIEND</h2>
            {allFriends.map((item) => (
              <div key={item.key} className="user_list border-b-2 py-4">
                <CommonUser commonUserName={item.friendName} commonUserPhoto={item.friendPhoto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MsgSideBarCompo;
