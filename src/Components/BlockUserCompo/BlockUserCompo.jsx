import React, { useEffect, useState } from "react";
import CommonUser from "../Common/CommonUser/CommonUser";
import CommonButtonV1 from "../Common/CommonButton/CommonButtonV1";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";

const BlockUserCompo = () => {
  // REDUX DATA
  const sliceUser = useSelector((state) => state.currentUser.value);

  // Variable Part
  const [allblockUser, setAllBlockUser] = useState([]);

  // FireBase Variable
  const db = getDatabase();

  // All Function
  const handleUnBlock = (friendData) => {
    set(push(ref(db, "friends/")), {
      friendID: friendData.blockUserID,
      friendPhoto: friendData.blockUserPhoto,
      friendName: friendData.blockUserName,
      currentUserID: sliceUser.uid,
      currentUserPhoto: sliceUser.photoURL,
      currentUserName: sliceUser.displayName,
    });
    remove(ref(db, "blockUsers/" + friendData.key));
  }; 

  //   REAl Time DATA BASE
  useEffect(() => {
    onValue(ref(db, "blockUsers/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().currentUserID == sliceUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllBlockUser(arr);
    });
  }, []);
  return (
    <>
      <section className="blockuserCompo">
        <div className="container">
          <h2 className="text-3xl text-black font-bold mt-10 mb-5 text-center">
            Block User
          </h2>
          {allblockUser.map((item) => (
            <div
              key={item.key}
              className="single_user mb-6 flex justify-evenly"
            >
              <div>
                <CommonUser
                  commonUserName={item.blockUserName}
                  commonUserPhoto={item.blockUserPhoto}
                />
              </div>
              <div className="flex gap-6">
                {/* <CommonButtonV1 Common_Button_V1_content={"UNFRIEND"} /> */}
                <CommonButtonV1 Common_Button_V1_Click={()=>handleUnBlock(item)} Common_Button_V1_content={"UNBLOCK"} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlockUserCompo;
