import React, { useEffect, useState } from "react";
import BlockUserCompo from "../Components/BlockUserCompo/BlockUserCompo";
import { useSelector } from "react-redux";
import { getDatabase, onValue, ref } from "firebase/database";

const BlockUserPage = () => {
  

  return (
    <>
      <BlockUserCompo />
    </>
  );
};

export default BlockUserPage;
