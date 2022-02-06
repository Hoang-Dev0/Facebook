import React from "react";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GamepadIcon from "@mui/icons-material/Gamepad";
import GroupsIcon from "@mui/icons-material/Groups";
import { GiAbstract050 } from "react-icons/gi";
import { FaFacebookMessenger } from "react-icons/fa";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./header.scss";

export default function Header() {
  const currentUser = JSON.parse(localStorage.getItem("loggedUser"));
  const words = currentUser.name.split(" ");
  const lenght = words.length;
  const lastName = words[lenght - 1];

  return (
    <div className="header">
      <Grid container>
        <Grid item xs={3}>
          <div className="header__logo">f</div>
          <div className="header__search">
            <div className="header__search--icon">{<SearchIcon sx={{ fontSize: 23 }}/>}</div>
            <input
              className="header__search--input"
              placeholder="Tìm kiếm trên facebook"
            ></input>
          </div>
        </Grid>
        <Grid item xs>
          <ul className="header__center">
            <li className="header__center--item">
              {<HomeIcon sx={{ fontSize: 27, color: "blue" }} />}
            </li>
            <li className="header__center--item">
              {<OndemandVideoIcon sx={{ fontSize: 27 }} />}
            </li>

            <li className="header__center--item">
              {<StorefrontIcon sx={{ fontSize: 27 }} />}
            </li>
            <li className="header__center--item">
              {<GroupsIcon sx={{ fontSize: 27 }} />}
            </li>

            <li className="header__center--item">
              {<GamepadIcon sx={{ fontSize: 27 }} />}
            </li>
          </ul>
        </Grid>
        <Grid item xs={3}>
          <div className="header__right">
            <div className="header__right--info">
              <div className="header__right--info-img">
                <img
                  src={
                    currentUser.avatar
                      ? currentUser.avatar
                      : "https://www.stregasystem.com/img/users/user.png"
                  }
                  alt=""
                />
              </div>
              <div className="header__right--info-name">{lastName}</div>
            </div>
            <div className="header__right--menu">{<GiAbstract050 />}</div>
            <div className="header__right--messenger">
              {<FaFacebookMessenger />}
            </div>
            <div className="header__right--notify">{<NotificationsIcon sx={{ fontSize: 25 }}/>}</div>
            <div className="header__right--account">
              {<ArrowDropDownIcon sx={{ fontSize: 25 }}/>}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
