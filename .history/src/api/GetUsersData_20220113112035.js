import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query, onValue } from "firebase/database";

export default function GetUserData() {
  const db = getDatabase();
  const [data, setData] = useState([]);
  try {
    onValue(ref(db, "/users"), (snapshot) => {
      if (snapshot.exists()) {
        let temp = [];
        console.log(snapshot)
        // snapshot.forEach((item) => {
        //   temp.push({
        //     id: item.key,
        //     ...item.val(),
        //   });
        // });
        // setData(temp);
      } else {
        console.log("No data available");
      }
    });
  } catch (error) {
    console.error(error);
  }
}
