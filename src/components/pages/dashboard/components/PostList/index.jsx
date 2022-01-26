import React from "react";
import PropTypes from "prop-types";

import LikeIcon from "../../../../../assets/img/icon-like.svg";
import HeartIcon from "../../../../../assets/img/icon-heart.svg";
import GifIcon from "../../../../../assets/img/gif.PNG";
import StickerIcon from "../../../../../assets/img/sticker.PNG";
import AnotherSmile from "../../../../../assets/img/another-smile.PNG";
import "./postList.scss";

PostList.propTypes = {};

function PostList(props) {
  const auto_grow = (e) => {
    e.target.style.height = "37px";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <div>
      <section className="posts">
        <div className="posts__main">
          <ul className="posts__list">
            <li className="posts__item">
              <div className="posts__top">
                <div className="posts__heading">
                  <div className="posts__avatar">
                    <img
                      src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/p526x296/271731847_1647950228930696_4942286770181606374_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=k4NgJhnJMT0AX_Cdkod&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_rd3JBd2AqvA5O7agbG7-h2xaYwX_9Qo7LSS2so3zlhQ&oe=61F348AE"
                      alt=""
                    />
                  </div>
                  <div className="posts__info">
                    <a href="#" className="posts__name">
                      Hóng Hớt Showbiz
                    </a>
                    <div className="posts__time">
                      <a href="#">1 giờ</a>
                      <span></span>
                      <i className="fas fa-globe-americas"></i>
                    </div>
                  </div>
                  <span className="icon-ellipsis">
                    <i className="fas fa-ellipsis-h"></i>
                  </span>
                </div>
                <p className="posts__title">
                  Đ.ấ.m lại từ đầu? 😂 Ai còn nhớ từng xảy ra chuyện gì chắc đã
                  già
                </p>
              </div>
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/s640x640/272119590_5625306087484378_3863732218157786977_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=otYAw9hBIZ0AX8Bs_-c&tn=_4EpfJTYs4cGTTQY&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-x84n9FnsxviXlDtYig2Dgkj0N35ozyrg_F1ACmb7JSg&oe=61F111AF"
                alt=""
                className="posts__img"
              />
              <div className="posts__count-actions">
                <div className="posts__emotions">
                  <img src={LikeIcon} alt="" className="like-icon-svg" />
                  <img src={HeartIcon} alt="" className="heart-icon-svg" />
                </div>
                <span className="posts__people-like">
                  Thanh Hoa, Nhã Duyên và 163 người khác
                </span>
                <span className="posts__comments">58 bình luận</span>
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
              <ul className="posts__show-comments">
                <li>
                  <div className="avatar size-32">
                    <img
                      src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/p526x296/271731847_1647950228930696_4942286770181606374_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=k4NgJhnJMT0AX_Cdkod&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_rd3JBd2AqvA5O7agbG7-h2xaYwX_9Qo7LSS2so3zlhQ&oe=61F348AE"
                      alt=""
                    />
                  </div>
                  <div className="posts__comment-side">
                    <div className="posts__comment-box">
                      <div>
                        <p>Phuc Hoang</p>
                        <p>chanh chiu người chị Ty béo 🥰</p>
                      </div>
                      <span className="icon-ellipsis toggle">
                        <i className="fas fa-ellipsis-h"></i>
                      </span>
                    </div>
                    <div>
                      <span>Thích</span>
                      <span>Phản hồi</span>
                      <span>17 tuần</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="posts__write-comment">
                <div className="avatar size-32">
                  <img
                    src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/p526x296/271731847_1647950228930696_4942286770181606374_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=k4NgJhnJMT0AX_Cdkod&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_rd3JBd2AqvA5O7agbG7-h2xaYwX_9Qo7LSS2so3zlhQ&oe=61F348AE"
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
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PostList;
