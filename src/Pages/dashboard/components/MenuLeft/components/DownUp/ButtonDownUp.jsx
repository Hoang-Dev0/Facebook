import React from "react";
import './buttonDownUp.scss'
const ButtonDownUp = (props) => {
  return (
    <div className="downup">
      <div className="downup--icon">
        {props.icon}
        <img src="" alt=""></img>
      </div>
      <div className="downup--title">{props.title}</div>
    </div>
  );
};

export default ButtonDownUp;
