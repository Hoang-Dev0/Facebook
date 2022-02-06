import React from "react";
import PropTypes from "prop-types";

import "./historyList.scss";
import HistoryCard from "../HistoryCard";

HistoryList.propTypes = {
  currentUser: PropTypes.object,
};

function HistoryList({ currentUser = {} }) {
  
  const friends = currentUser.friends;

  return (
    <ul className="content__history-list">
      <li className="content__history-item">
        <a href="#" className="content__history-link">
          <img
            src={
              currentUser.avatar
                ? currentUser.avatar
                : "https://www.stregasystem.com/img/users/user.png"
            }
            alt=""
            className="content__history-img"
          />
          <span className="content__btn-create">
            <i className="fas fa-plus"></i>
          </span>
          <div className="content__footer-card">
            <span>Tạo tin</span>
          </div>
        </a>
      </li>
      <HistoryCard
        avatar={currentUser.avatar}
        storyImage={currentUser.storys[0].image}
      />

      {/* {Array.from(Array(3).keys()).map((item, index) => (
        <HistoryCard key={index} currentUser={currentUser} />
      ))} */}
      {friends.map((friend, index) => {
        const avatar = friend.avatar;
        const storyImage = friend.storys[0].image;
        return (
          <HistoryCard key={index} avatar={avatar} storyImage={storyImage} />
        );
      })}

      <span className="content__history-arrow">
        <i className="fas fa-arrow-right"></i>
      </span>
    </ul>
  );
}

export default HistoryList;
