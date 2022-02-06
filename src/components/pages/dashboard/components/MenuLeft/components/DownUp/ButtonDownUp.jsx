import React from "react";
import './buttonDownUp.scss'
const ButtonDownUp = (props) => {
  return (
    <button onClick={props.changeShortcut} className="downup">
      <div className="downup--icon">
        {props.icon}
        <img src="" alt=""></img>
      </div>
      <div className="downup--title">{props.title}</div>
    </button>
  );
};

export default ButtonDownUp;
