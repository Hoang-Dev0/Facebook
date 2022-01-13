// import React from "react";
// import { useEffect, useState } from "react";
// import Firebase from "../Firebase";
// import { getDatabase, ref, get, query, onValue } from "firebase/database";

// export default function GetUserData() {
//   const db = getDatabase();
//   const [data, setData] = useState([]);
//   try {
//     onValue(ref(db, "/users"), (snapshot) => {
//       if (snapshot.exists()) {
//         let temp = [];
//         console.log(snapshot.val());
//         snapshot.forEach((item) => {
//           temp.push({
//             id: item.key,
//             ...item.val(),
//           });
//         });
//         setData(temp);
//       } else {
//         console.log("No data available");
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query, onValue } from "firebase/database";
function GetUsersData(userID = "") {
  const db = getDatabase();
  //   const dbRef = ref(db, "/");
  const [proData, setProData] = useState([]);
  //   child(dbRef, `/${productsType}`)

  useEffect(() => {
    get(query(ref(db, "/users")))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let temp = [];
          snapshot.forEach((item) => {
            if (item.key.search(userID) >= 0) {
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
  }, [userID]);

  return proData;
}
export default GetUsersData;
