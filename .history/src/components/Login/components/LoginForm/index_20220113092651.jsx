import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

LoginForm.propTypes = {};

function LoginForm(props) {
  return (
    <form action="" className="login__form">
      <input type="text" name="email" placeholder="Email hoặc số điện thoại" />
      <div className="password-field">
        <input type="password" name="password" placeholder="Mật khẩu" />

        <span className="toggle-password">
          {/* <i class="far fa-eye"></i> */}
          <i className=""="far fa-eye-slash icon-eye"></i>
        </span>
      </div>

      <button className="btn btn--login">Đăng nhập</button>
      <a href="#" className="forgot-password">
        Quên mật khẩu ?
      </a>
    </form>
  );
}

export default LoginForm;
