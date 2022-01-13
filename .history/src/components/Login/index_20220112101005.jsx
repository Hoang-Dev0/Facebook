import React from "react";
import PropTypes from "prop-types";

LoginPage.propTypes = {};

function LoginPage(props) {
  return (
    <section className="login">
      <div className="container">
        <div className="login_main">
          <div className="login-wrap">
            <div className="login-left">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                alt=""
              />
            </div>
            <div className="login-right"></div>
          </div>
          <div className="login-footer"></div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
