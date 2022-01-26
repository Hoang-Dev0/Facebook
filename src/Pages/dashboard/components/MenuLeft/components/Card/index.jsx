import React from 'react';

export default function Card(props) {
  return <div className="menuleft__card">
  <div className="menuleft__card--img">
    <img
      src={props.icon}
      alt=""
    />
  </div>
  <div className="menuleft__card--title">{props.title}</div>
</div>;
}
