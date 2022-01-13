import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";
// import "../../../../assets/main";
LoginForm.propTypes = {};

function LoginForm(props) {
  const [formValue, setFormValue] = useState({
      email : '',
      
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form action="" className="login__form">
      <input type="text" name="email" placeholder="Email hoặc số điện thoại" />
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          className="password-input"
          placeholder="Mật khẩu"
        />

        <span className="toggle-password" onClick={handleToggleShowPassword}>
          {showPassword ? (
            <i className="far fa-eye"></i>
          ) : (
            <i className="far fa-eye-slash "></i>
          )}
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
