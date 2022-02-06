import React from "react";
import PropTypes from "prop-types";

import CreatePost from "../CreatePost";
import HistoryList from "../HistoryList";
import PostList from "../PostList";

import "./content.scss";

Content.propTypes = {
  currentUser: PropTypes.object,
};

function Content({ currentUser = {} }) {
  return (
    <section className="content">
      <div className="content__container">
        <HistoryList currentUser={currentUser} />
        <CreatePost currentUser={currentUser} />
        <PostList currentUser={currentUser} />
      </div>
    </section>
  );
}

export default Content;
