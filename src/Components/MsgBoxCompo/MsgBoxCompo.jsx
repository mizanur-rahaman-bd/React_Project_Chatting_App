import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import "./MsgBoxCompo.css";

const MsgBoxCompo = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <>
      <section className="msgBox">
        <div className="msgBoxBar">
          <div className="userPhoto">
            <img src="" alt="userPhoto" />
          </div>
          <h2>Lorem, ipsum dolor.</h2>
        </div>
        <div className="userMsg">
          <div className="receive_msg">Lorem ipsum dolor sit amet.</div>
          <div className="send_msg">Lorem ipsum dolor sit amet.</div>
        </div>
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </section>
    </>
  );
};

export default MsgBoxCompo;
