import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";
import GetUserData from "../../../../api/GetUsersData";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm({ onSubmit = null }) {
  const users = GetUserData();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleInputChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formValue);
    }
  };
  return (
    <form action="" className="login__form">
      <input
        type="text"
        name="email"
        placeholder="Email hoặc số điện thoại"
        value={formValue.email}
        onChange={(e) => handleInputChange(e)}
      />
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          className="password-input"
          placeholder="Mật khẩu"
          value={formValue.password}
          onChange={(e) => handleInputChange(e)}
        />

        <span className="toggle-password" onClick={handleToggleShowPassword}>
          {showPassword ? (
            <i className="far fa-eye"></i>
          ) : (
            <i className="far fa-eye-slash "></i>
          )}
        </span>
      </div>

      <button className="btn btn--login" onClick={(e) => handleSubmit(e)}>
        Đăng nhập
      </button>
      <a href="#" className="forgot-password">
        Quên mật khẩu ?
      </a>
    </form>
  );
}

export default LoginForm;
