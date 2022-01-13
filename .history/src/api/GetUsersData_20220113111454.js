import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query } from "firebase/database";

export default function GetUserData() {
  const db = getDatabase();
  const [data, setData] = useState([]);
  try {
      
  } catch (error) {
      
  }
}
