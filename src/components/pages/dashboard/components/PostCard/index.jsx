import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./postCard.scss";
import LikeIcon from "../../../../../assets/img/icon-like.svg";
import HeartIcon from "../../../../../assets/img/icon-heart.svg";
import GifIcon from "../../../../../assets/img/gif.PNG";
import StickerIcon from "../../../../../assets/img/sticker.PNG";
import AnotherSmile from "../../../../../assets/img/another-smile.PNG";

PostCard.propTypes = {
  friends: PropTypes.array,
  user: PropTypes.object,
  post: PropTypes.object,
};

function PostCard({ friends, user, post }) {
  const auto_grow = (e) => {
    e.target.style.height = "37px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const listComment = post?.comments;
  const [listFriendComment, setListFriendComment] = useState([]); // list friend and comment
  useEffect(() => {
    listComment.forEach((comment) => {
      let tempObj;
      if (friends) {
        friends.forEach((friend) => {
          if (parseInt(comment.user_id) === parseInt(friend.id)) {
            tempObj = friend;
          }
        });
        setListFriendComment((prevState) => [
          ...prevState,
          { comment, friend: tempObj },
        ]);
      }
    });
  }, []);

  const renderComments = listFriendComment.map((item, index) => {
    return (
      <li key={index}>
        <div className="avatar size-32">
          <img
            src={
              item.friend?.avatar
                ? item.friend?.avatar
                : "https://www.stregasystem.com/img/users/user.png"
            }
            alt=""
          />
        </div>
        <div className="posts__comment-side">
          <div className="posts__comment-box">
            <div>
              <p>{item.friend.name}</p>
              <p>{item.comment.content}</p>
            </div>
            <span className="icon-ellipsis toggle">
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </div>
          <div>
            <span>Thích</span>
            <span>Phản hồi</span>
            <span>{item.comment.time}</span>
          </div>
        </div>
      </li>
    );
  });

  return (
    <>
      <li className="posts__item">
        <div className="posts__top">
          <div className="posts__heading">
            <div className="posts__avatar">
              <img
                src={
                  user.avatar
                    ? user.avatar
                    : "https://www.stregasystem.com/img/users/user.png"
                }
                alt=""
              />
            </div>
            <div className="posts__info">
              <a href="#" className="posts__name">
                {user.name}
              </a>
              <div className="posts__time">
                <a href="#">{post.time}</a>
                <span></span>
                <i className="fas fa-globe-americas"></i>
              </div>
            </div>
            <span className="icon-ellipsis">
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </div>
          <p className="posts__title">{post.title}</p>
        </div>
        <img src={post.image} alt="" className="posts__img" />
        <div className="posts__count-actions">
          <div className="posts__emotions">
            <img src={LikeIcon} alt="" className="like-icon-svg" />
            {/* <img src={HeartIcon} alt="" className="heart-icon-svg" /> */}
          </div>
          <span className="posts__people-like">{post.like}</span>
          <span className="posts__comments">{`${post.comments.length} bình luận`}</span>
          {/* <span className="post__share">385 lượt chia sẻ</span> */}
        </div>
        <div className="posts__actions">
          <div className="posts__action">
            <i className="far fa-thumbs-up"></i>
            <span>Thích</span>
          </div>
          <div className="posts__action">
            <i className="far fa-comment-alt"></i>
            <span>Yêu thích</span>
          </div>
          <div className="posts__action">
            <i className="fal fa-share"></i>
            <span>Chia sẻ</span>
          </div>
        </div>
        <ul className="posts__show-comments">{friends && renderComments}</ul>
        <div className="posts__write-comment">
          <div className="avatar size-32">
            <img
              src={
                user.avatar
                  ? user.avatar
                  : "https://www.stregasystem.com/img/users/user.png"
              }
              alt=""
            />
          </div>

          <div className="">
            <textarea
              onInput={(e) => {
                auto_grow(e);
              }}
              name=""
              id=""
              placeholder="Viết bình luận..."
            ></textarea>

            <div className="">
              <span className="icon-ellipsis">
                <i className="far fa-smile"></i>
              </span>
              <span className="icon-ellipsis">
                <i className="fal fa-camera"></i>
              </span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default PostCard;
