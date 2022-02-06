import React from "react";
import PropTypes from "prop-types";
import "./historyCard.scss";

HistoryCard.propTypes = {
  avatar: PropTypes.string,
  storyImage: PropTypes.string,
};

function HistoryCard({ avatar, storyImage }) {
  return (
    <li className="content__history-item">
      <a href="#" className="content__history-link">
        <img src={storyImage} alt="" className="content__history-img-fr" />
        <div className="content__history-avatar">
          <img
            src={
              avatar
                ? avatar
                : "https://www.stregasystem.com/img/users/user.png"
            }
            alt=""
          />
        </div>
      </a>
    </li>
  );
}

export default HistoryCard;
