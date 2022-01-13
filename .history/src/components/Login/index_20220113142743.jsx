import React from "react";
import PropTypes from "prop-types";

import "./login.scss";
import "../../api/GetUsersData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/LoginForm";
import GetUsersData from "../../api/GetUsersData";

LoginPage.propTypes = {};

function LoginPage(props) {
  const users = GetUsersData();

  const handleSubmit = (formValue) => {
    if (!users) return;
    let currentUser = {};
    try {
      users.forEach((user) => {
        if (formValue.email !== "" && formValue.password !== "") {
          if (
            formValue.email === user.email &&
            formValue.password === user.password
          ) {
            currentUser = user;
          }
        } else {
          console.log("Vui long nhap email va password");
        }
      });
    } catch (error) {
      console.log("Fail to login", error);
    }

    console.log(currentUser);
  };

  return (
    <>
    <section className="login">
      <div className="container">
        <div className="login__main">
          <div className="login__wrap">
            <div className="login__left">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                alt="facebook"
              />
              <p>
                Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc
                sống của bạn.
              </p>
            </div>
            <div className="login__right">
              <LoginForm onSubmit={handleSubmit} />
              <button className="btn btn-create-account">
                Tạo tài khoản mới
              </button>
            </div>
          </div>
          <div className="login__content">
            <span>Tạo Trang</span> dành cho người nổi tiếng, thương hiệu hoặc
            doanh nghiệp.
          </div>
          <div className="login__footer"></div>
        </div>
      </div>
    </section>
    
  );
}

export default LoginPage;
