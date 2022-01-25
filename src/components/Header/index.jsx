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
  return (
    <div className="header">
      <Grid container>
        <Grid item xs={3}>
          <div className="header__logo">f</div>
          <div className="header__search">
            <div className="header__search--icon">{<SearchIcon />}</div>
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
                  src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/cp0/c0.12.50.50a/p50x50/271823767_3285339685044453_2994956191335449856_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=IrpyiENDS_0AX9B6Yi7&_nc_oc=AQm5Mrm6B5ml5ZhBph3C8bMeVivCOcObeB-J6e9OgQCyZqWsTqp66tYEkkqHKT4KNr6gpWt6gLRhSg_MXNmavV8g&_nc_ht=scontent.fdad1-1.fna&oh=00_AT_7husLTfmD8SvBlpUIfUJ2B5sQXWKp_kxelI9VIt79Dg&oe=61F51242"
                  alt=""
                />
              </div>
              <div className="header__right--info-name">Chiến</div>
            </div>
            <div className="header__right--menu">{<GiAbstract050 />}</div>
            <div className="header__right--messenger">
              {<FaFacebookMessenger />}
            </div>
            <div className="header__right--notify">{<NotificationsIcon />}</div>
            <div className="header__right--account">
              {<ArrowDropDownIcon />}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
