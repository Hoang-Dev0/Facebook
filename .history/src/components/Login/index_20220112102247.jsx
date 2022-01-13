import React from "react";
import PropTypes from "prop-types";

LoginPage.propTypes = {};

function LoginPage(props) {
  return (
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
              <form action="" className="login__form">
                <input type="text" placeholder="Email hoặc số điện thoại" />
                <input type="text" placeholder="Mật khẩu" />
                <button className="btn btn--blue">Đăng nhập</button>
                <a href="#" className="forgot-password">
                  Quên mật khẩu
                </a>
              </form>
              <button className="btn btn-create-account">
                Tạo tài khoản mới
              </button>
            </div>
          </div>
          <div className="login-footer"></div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
