import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";
// import "../../../../assets/main";
LoginForm.propTypes = {};

function LoginForm(props) {
  const [valuePassword, setValuePassword] = useState({
    passoword: "",
    showPassword: false,
  });
  const handleToggleShowPassword = ()=>{
      setValuePassword((prev)=>{
          
      })
  }
  return (
    <form action="" className="login__form">
      <input type="text" name="email" placeholder="Email hoặc số điện thoại" />
      <div className="password-field">
        <input
          type={valuePassword.showPassword ? "text" : "password"}
          
          name="password"
          className="password-input"
          placeholder="Mật khẩu"
        />

        <span className="toggle-password" onClick={handleToggleShowPassword}>
          {/* <i class="far fa-eye"></i> */}
          <i className="far fa-eye-slash " id="icon-eye"></i>
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
