import React from "react";
import { useEffect, useState } from "react";
import Firebase from "../Firebase";
import { getDatabase, ref, get, query } from "firebase/database";

function GetUserData