import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query } from "firebase/database";
function GetUsersData(userID = "") {
  const db = getDatabase();
  const [proData, setProData] = useState([]);

  useEffect(() => {
    
  }, []);

  return proData;
}
export default GetUsersData;
