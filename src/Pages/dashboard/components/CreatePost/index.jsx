import React from "react";
import "./createPost.scss";

function CreatePost(props) {
  return (
    <>
      <section className="create-content">
        <div className="create-content__main">
          <div className="create-content__top">
            <img
              src="https://images.unsplash.com/photo-1642478880159-0afa788e0530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>Phan ơi, bạn đang nghĩ gì thế?</p>
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
