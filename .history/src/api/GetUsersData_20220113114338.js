import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query, onValue } from "firebase/database";
function GetUsersData() {
  const db = getDatabase();
  const [data, setdata] = useState([]);

  useEffect(() => {
    get(query(ref(db, "/users")))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let temp = [];
          snapshot.forEach((item) => {
            temp.push({
              id: item.key,
              ...item.val(),
            });
          });
          setdata(temp);
        } else {
          console.log("No user data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userID]);

  return data;
}
export default GetUsersData;
