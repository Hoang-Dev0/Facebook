import React from "react";
import "./menuLeft.scss";
import { GrDown, GrUp } from "react-icons/gr";
import Card from "./components/Card";
import ButtonDownUp from "./components/DownUp/ButtonDownUp";
import ShortCut from "./components/ShortCut/ShortCut";
import { useState, useEffect } from "react";
export default function MenuLeft({ currentUser }) {
  const menuList = currentUser['listFunction'];
  const menuListgroup =  currentUser['listGroup'];
 
  console.log(currentUser['listGroup']);
  console.log(currentUser['listFunction']);
  /*handle show header menuleft */
  const [seeMore, setSeeMore] = useState(true);
  const [length, setLength] = useState(5);
  //set state see more
  const changeSeeMore = () => {
    setSeeMore(!seeMore);
    seeMore === false ? setLength(5) : setLength(menuList.length);
    // console.log("do dai " + length + "-- trang thai " + seeMore);
  };
  //handle click see more <> hidden
  const clickSeemore = () => {
    return (
      <button onClick={() => changeSeeMore()} className="menuleft__downup">
        <div className="menuleft__downup--icon">
          {seeMore && <GrDown />}
          {!seeMore && <GrUp />}
          <img src="" alt=""></img>
        </div>
        <div className="menuleft__downup--title">
          {seeMore && "Xem thêm"}
          {!seeMore && "Ẩn bớt"}
        </div>
      </button>
    );
  };
  // handle load data of menu left
  const loadMenuLeft = () => {
    return menuList.map((value,index) => {
      if (value.id <= length) {
        return <Card key={index} icon={value.icon} title={value.title} />;
      }
    });
  };
  /* end show header menuleft */

  /* handle show footer menuleft */
  const [shortCut, setShortcut] = useState(true);
  const [lengthShortcut, setLengthShortcut] = useState(5);
  const changeShortcut = () => {
    setShortcut(!shortCut);
    shortCut === false
      ? setLengthShortcut(5)
      : setLengthShortcut(menuList.length);
    console.log("do dai " + lengthShortcut + "-- trang thai " + shortCut);
  };
  // handle load data of menu left
  const loadFooterMenuLeft = () => {
    return menuListgroup.map((value,index) => {
      if (value.id <= lengthShortcut) {
        console.log(value);
        return <ShortCut key={index} icon={value.icon} title={value.title} />;
        
      }
    });
  };
  /* end handle show footer menuleft */
  return (
    <div className="menuleft">
      {loadMenuLeft()}
      {clickSeemore()}
      {/* <ButtonDownUp onClick={()=>console.log('onClick xem them')} icon={<GrDown />} title="Xem thêm" /> */}
      <hr className="menuleft__line"></hr>
      <div className="menuleft__group--name">
        <div className="menuleft__group--name-1">Lối tắt dành cho bạn</div>
        <div className="menuleft__group--name-btnEdit">Chỉnh sửa </div>
      </div>

      {loadFooterMenuLeft()}
      <ButtonDownUp
        icon={shortCut === true ? <GrDown /> : <GrUp />}
        title={shortCut === true ? "Xem thêm" : "Ẩn bớt"}
        changeShortcut={() => changeShortcut()}
      />

      <ul className="menuleft__footer">
        <li className="menuleft__footer-item">Quyền riêng tư .</li>
        <li className="menuleft__footer-item">Điều khoản .</li>
        <li className="menuleft__footer-item">Quảng cáo .</li>
        <li className="menuleft__footer-item">Lựa chọn quảng cáo .</li>
        <li className="menuleft__footer-item">Cookie .</li>
        <li className="menuleft__footer-item">Xem thêm .</li>
        <li className="menuleft__footer-item">Meta</li>
      </ul>
    </div>
  );
}
