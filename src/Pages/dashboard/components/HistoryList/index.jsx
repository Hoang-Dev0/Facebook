import React from "react";
import PropTypes from "prop-types";

import "./historyList.scss";
import HistoryCard from "../HistoryCard";

HistoryList.propTypes = {};

function HistoryList(props) {

  return (
    <ul className="content__history-list">
      <li className="content__history-item">
        <a href="#" className="content__history-link">
          <img
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/p526x296/272115271_2091058694384433_5241051845720726402_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=825194&_nc_ohc=y2rPs3Ffii4AX9dLDPd&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_4UQL86vw-iYd80cEp5HSLOteQ7dIjD-syONMlpjlHxg&oe=61EFEEEB"
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
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />

      <span className="content__history-arrow">
        <i className="fas fa-arrow-right"></i>
      </span>
    </ul>
  );
}

export default HistoryList;
