import React from "react";
import CreatePost from "../CreatePost";
import HistoryList from "../HistoryList";
import PostList from "../PostList";

import "./content.scss";

function Content(props) {
  return (
    <section className="content">
      <div className="content__container">
        <HistoryList />
        <CreatePost />
        <PostList />
      </div>
    </section>
  );
}

export default Content;
