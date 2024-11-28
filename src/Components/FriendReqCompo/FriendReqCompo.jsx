import React, { useEffect, useState } from "react";
import CommonUser from "../Common/CommonUser/CommonUser";
import CommonButtonV1 from "../Common/CommonButton/CommonButtonV1";
import { useSelector } from "react-redux";
import {
  getDatabase,
  ref,
  onValue,
  remove,
  set,
  push,
} from "firebase/database";

const FriendReqCompo = () => {
  // REDUX DATA
  const reduxUser = useSelector((state) => state.currentUser.value);

  // ALL VARIABLES
  const [allreq, setAllReq] = useState([]);

  // FIREBASE VARIABLES
  const db = getDatabase();

  // ALL FUNCTIONS
  const handleRemove = (reqData) => {
    remove(ref(db, "friendRequest/" + reqData.key));
  };
  const handleConfirm = (friendData) => {
    set(push(ref(db, "friends/")), {
      friendID: friendData.senderID,
      friendPhoto: friendData.senderPhoto,
      friendName: friendData.senderName,
      currentUserID: reduxUser.uid,
      currentUserPhoto: reduxUser.photoURL,
      currentUserName: reduxUser.displayName,
    });
    remove(ref(db, "friendRequest/" + friendData.key));
  };

  // REAL TIME DATA BASE

  useEffect(() => {
    onValue(ref(db, "friendRequest/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().receiverID == reduxUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllReq(arr);
    });
  }, []);

  return (
    <>
      <section className="friendReqCompo">
        <div className="container">
          <h2 className="text-3xl text-black font-bold mt-10 mb-5 text-center">
            FRIEND REQUEST
          </h2>

          {allreq.map((item) => (
            <div
              key={item.key}
              className="single_user mb-6 flex justify-evenly"
            >
              <div>
                <CommonUser
                  commonUserName={item.senderName}
                  commonUserPhoto={item.senderPhoto}
                />
              </div>
              <div className="flex gap-6">
                <CommonButtonV1
                  Common_Button_V1_Click={() => handleConfirm(item)}
                  Common_Button_V1_content={"CONFIRM"}
                />
                <CommonButtonV1
                  Common_Button_V1_Click={() => handleRemove(item)}
                  Common_Button_V1_content={"CANCEL"}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FriendReqCompo;
