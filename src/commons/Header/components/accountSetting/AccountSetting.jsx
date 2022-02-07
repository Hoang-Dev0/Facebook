import React from "react";
import "./accountsetting.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NightlightIcon from '@mui/icons-material/Nightlight';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountSetting(props) {
    const [logout, setLogout] = useState("");
    const navigate = useNavigate(); 

    const handleLogOut =()=>{
        localStorage.removeItem("loggedUser");
        setTimeout(() => {
            navigate("/login");
          }, 2000);
    }
  return (
    <div className="accountSetting">
      <div className="accountSetting__info">
          <div className="accountSetting__info-avatar">
              <img src={props.currentUser["avatar"]} alt="" />
          </div>
          <div className="accountSetting__info-name">{props.currentUser["name"]}</div>
          <div className="accountSetting__info-title">Xem trang cá nhân của bạn</div>
      </div>
      <hr className="accountSetting__line" />
      <div className="accountSetting__opinion">
        <div className="accountSetting__opinion-icon">
          <AnnouncementIcon sx={{ fontSize: 20 }} />
        </div>
        <div className="accountSetting__opinion-title">
          Đóng góp ý kiến
        </div>
      </div>
      <hr className="accountSetting__line" />
      <div className="accountSetting__item">
        <div className="accountSetting__item-setting">
          <div className="accountSetting__item-setting--icon">
            <SettingsIcon sx={{ fontSize: 20 }} />
          </div>
          <div className="accountSetting__item-setting--title">
            Cài đặt và quyền riêng tư
          </div>
        </div>
        <div className="accountSetting__item-help">
          <div className="accountSetting__item-help--icon">
            <HelpIcon sx={{ fontSize: 20 }} />
          </div>
          <div className="accountSetting__item-help--title">
            Trợ giúp & hỗ trợ
          </div>
        </div>
        <div className="accountSetting__item-screen">
          <div className="accountSetting__item-screen--icon">
            <NightlightIcon sx={{ fontSize: 20 }} />
          </div>
          <div className="accountSetting__item-screen--title">
            Màn hình & trợ năng
          </div>
        </div>
        <div onClick={()=>handleLogOut()} className="accountSetting__item-logout">
          <div className="accountSetting__item-logout--icon">
            <ExitToAppIcon sx={{ fontSize: 20 }} />
          </div>
          <div className="accountSetting__item-logout--title">Đăng xuất</div>
        </div>
      </div>
      <ul className="accountSetting__footer">
        <li className="accountSetting__footer-item">Quyền riêng tư .</li>
        <li className="accountSetting__footer-item">Điều khoản .</li>
        <li className="accountSetting__footer-item">Quảng cáo .</li>
        <li className="accountSetting__footer-item">Lựa chọn quảng cáo .</li>
        <li className="accountSetting__footer-item">Cookie .</li>
        <li className="accountSetting__footer-item">Xem thêm .</li>
        <li className="accountSetting__footer-item">Meta</li>
      </ul>
    </div>
  );
}
