import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query } from "firebase/database";

export default function GetUserData() {
  const db = getDatabase();
  const [data, setData] = useState([]);
  try {
    onValue(ref(db, "/products"), (snapshot) => {
      if (snapshot.exists()) {
        let temp = [];
        snapshot.forEach((item) => {
          if (
            item.val().category_id?.search(categoryID) >= 0 &&
            item.key.search(productsID) >= 0
          ) {
            temp.push({
              id: item.key,
              ...item.val(),
            });
          }
        });
        setProData(temp);
      } else {
        console.log("No data available");
      }
    });
  } catch (error) {
    console.error(error);
  }
}
