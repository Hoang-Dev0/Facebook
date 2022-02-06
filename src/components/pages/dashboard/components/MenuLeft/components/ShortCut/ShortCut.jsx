import React from "react";
import { GrDown } from "react-icons/gr";
import ButtonDownUp from "../DownUp/ButtonDownUp";
const group = (props) => {
  return (
    <div className="menuleft__group"> 
      <div className="menuleft__group--img">
        <img
          src={props.icon}
          alt=""
        />
      </div>
      <div className="menuleft__group--title">
        {props.title}
      </div>
    </div>
  );
};

export default group;
