import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import LikeIcon from "../../../../../assets/img/icon-like.svg";
import HeartIcon from "../../../../../assets/img/icon-heart.svg";
import GifIcon from "../../../../../assets/img/gif.PNG";
import StickerIcon from "../../../../../assets/img/sticker.PNG";
import AnotherSmile from "../../../../../assets/img/another-smile.PNG";
import "./postList.scss";
import PostCard from "../PostCard";

PostList.propTypes = {
  currentUser: PropTypes.object,
};

function PostList({ currentUser }) {
  const postsOfCurrentUser = currentUser.posts;
  const friends = currentUser.friends;

  return (
    <div>
      <section className="posts">
        <div className="posts__main">
          <ul className="posts__list">
            {/* CurrentUser's postcard */}
            {postsOfCurrentUser.map((post, index) => (
              <PostCard
                key={index}
                user={currentUser}
                post={post}
                friends={friends}
              />
            ))}

            {/*Friend of CurrentUser's postcard */}
            {friends.map((friend) => {
              const listPostCard = friend.posts.map((post, index) => {
                // console.log(<PostCard user={friend} post={post} />);
                return <PostCard key={index} user={friend} post={post} />;
              });
              return listPostCard;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PostList;
