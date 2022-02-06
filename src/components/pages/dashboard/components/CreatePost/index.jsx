import React from "react";
import PropTypes from "prop-types";

import "./createPost.scss";

CreatePost.propTypes = {
  currentUser: PropTypes.object,
};

function CreatePost({ currentUser }) {
  const words = currentUser.name.split(" ");
  const lenght = words.length;
  const lastName = words[lenght - 1];
  return (
    <>
      <section className="create-content">
        <div className="create-content__main">
          <div className="create-content__top">
            <img src={currentUser.avatar} alt="" />
            <p>{lastName + " ơi, bạn đang nghĩ gì thế?"}</p>
          </div>
          <div className="create-content__bottom">
            <ul className="create-content__actions">
              <li className="create-content__action">
                <div>
                  <i className="fas fa-video action--red"></i>
                  <i className="fas fa-eye"></i>
                </div>
                <span>Video trực tiếp</span>
              </li>
              <li className="create-content__action">
                <i className="far fa-file-image action--green"></i>
                <span>Ảnh/video</span>
              </li>
              <li className="create-content__action">
                <i className="far fa-grin action--yellow"></i>
                <span>Cảm xúc/Hoạt động</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreatePost;
