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
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>  
          <p>Phuc Hoang</p>
        </li>
        <li>
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1643306964821-c0d592088b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p>Phuc Hoang</p>
        </li>
      </ul>
    </section>
  );
}

export default MenuRight;
