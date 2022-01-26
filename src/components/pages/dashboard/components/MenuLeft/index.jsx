import React from "react";
import "./menuLeft.scss";
import { GrDown } from "react-icons/gr";
import Card from "./components/Card";
import ButtonDownUp from "./components/DownUp/ButtonDownUp";
import ShortCut from "./components/ShortCut/ShortCut";
export default function MenuLeft() {
  const menuList = [
    {
      icon: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/271823767_3285339685044453_2994956191335449856_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IrpyiENDS_0AX8E2urs&_nc_oc=AQmUtOsJHPOZDrZs4XgcviUGtA53fgGIRuJiYyGoeGgAmRlojqRkFDdprBmTP7KR78JYUFGZnMiyOynUJ3JAJRzV&tn=uUQAa4X-VIAFDMR_&_nc_ht=scontent.fdad1-1.fna&oh=00_AT8Muq3BGy19HkvK7VuZ3llGUCbYZjM2R9KRPlkuDdu2Gg&oe=61F23F25",
      title: "Đặng Xuân Chiến",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
      title: "Bạn bè",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png",
      title: "Kỷ niệm",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png",
      title: "Messenger",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
      title: "Nhóm",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
      title: "Marketplace",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png",
      title: "Chiến dịch gây quỹ",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png",
      title: "Chơi game",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
      title: "Đã lưu",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png",
      title: "FaceBook Pay",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png",
      title: "Gần đây nhất",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png",
      title: "Hoạt động quảng cáo gần đây",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png",
      title: "Messenger nhí",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png",
      title: "Quảng cáo",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png",
      title: "sự kiện",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png",
      title: "Sức khỏe cảm xúc",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png",
      title: "Thời tiết",
    },
    {
      icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
      title: "Trang",
    },
  ];
  return (
    <div className="menuleft">
      <Card
        icon="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/cp0/c0.10.40.40a/p40x40/271823767_3285339685044453_2994956191335449856_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=IrpyiENDS_0AX_XSWnQ&_nc_oc=AQnwIQXlsONCE8LJgIZK8Qxtm7pcFVnfvPoV_fzbguuYx9hWB2qtCSYSLmoAVsMsgF0RlxduW18JCIuVU761jFjh&_nc_ht=scontent.fdad1-1.fna&oh=00_AT8gCkBhP0q_Smc98t8nzppCEBA42oHRVOF9-mGrULUtcw&oe=61F3DA86"
        title="Đặng Xuân Chiến"
      />
      <Card
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
        title="Bạn bè"
      />
      <Card
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
        title="Dang xuan chien"
      />
      <Card
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
        title="Dang xuan chien"
      />
      <Card
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
        title="Dang xuan chien"
      />
      <ButtonDownUp icon={<GrDown />} title="Xem thêm" />
      <hr className="menuleft__line"></hr>
      <div className="menuleft__group--name">
        <div className="menuleft__group--name-1">Lối tắt dành cho bạn</div>
        <div className="menuleft__group--name-btnEdit">Chỉnh sửa </div>
      </div>
      <ShortCut />
      <ShortCut />
      <ShortCut />
      <ButtonDownUp icon={<GrDown />} title="Xem thêm" />

      <ul className='menuleft__footer'>
        <li className='menuleft__footer-item'>Quyền riêng tư .</li>
        <li className='menuleft__footer-item'>Điều khoản .</li>
        <li className='menuleft__footer-item'>Quảng cáo .</li>
        <li className='menuleft__footer-item'>Lựa chọn quảng cáo .</li>
        <li className='menuleft__footer-item'>Cookie .</li>
        <li className='menuleft__footer-item'>Xem thêm .</li>
        <li className='menuleft__footer-item'>Meta</li>
      </ul>
    </div>
  );
}
