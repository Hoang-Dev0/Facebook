import React from "react";
import PropTypes from "prop-types";
import "./menuRight.scss";

MenuRight.propTypes = {
  currentUser: PropTypes.object,
};

function MenuRight({ currentUser }) {
  const friends = currentUser.friends;

  return (
    <section className="menu-right">
      <h3 className="menu-right__reminder">Lời nhắc</h3>
      <div className="menu-right__birthday">
        <img
          src="https://pixlok.com/wp-content/uploads/2021/07/Gift-SVG-Icon-9dsdsdf3.png"
          className="menu-right__gift"
          alt=""
        />
        <p>
          <strong>Linh Le</strong> and <strong>2 others</strong> have birthdays
          today
        </p>
      </div>
      <div className="menu-right__heading">
        <h3 className="heading__person">Người liên hệ</h3>
        <span className="icon-camera">
          <i className="fas fa-video"></i>
        </span>
        <span className="icon-search">
          <i className="fas fa-search"></i>
        </span>
        <span className="icon-ellipsis">
          <i className="fas fa-ellipsis-h"></i>
        </span>
      </div>

      <ul className="menu-right__content">
        {friends.map((friend, index) => (
          <li key={index}>
            <div className="avatar">
              <img src={friend.avatar} alt="" />
            </div>
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MenuRight;
