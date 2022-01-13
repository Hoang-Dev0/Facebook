import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query } from "firebase/database";
function GetUsersData(userID = "") {
  const db = getDatabase();
  const [proData, setProData] = useState([]);

  useEffect(() => {
    get(query(ref(db, "/users")))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let temp = [];
          snapshot.forEach((item) => {
            if (item.key.indexOf(userID) >= 0) {
              temp.push({
                id: item.key,
                ...item.val(),
              });
            }
          });
          setProData(temp);
        } else {
          console.log("No user data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return proData;
}
export default GetUsersData;
