import React from "react";
import "./ChildMenu.css";
import { Checkbox } from 'antd';
import videoImg from "../../assets/images/video.png";
import listIcon from "../../assets/images/list.png";
import codeIcon from "../../assets/images/code.png";
import lockIcon from "../../assets/images/lock.png";

const ChildMenu = () => {
  return (
    <div className="child__menu">
      <p>Flutter Cross-platform</p>
      <div className="child__menu__list">
        <ul className="menu__list__name">
            <li>
                <div>
                    <span>1</span>
                    <span>Create 3D site with <br/> Spline and ReactCr...</span>
                </div>
                <Checkbox></Checkbox>
            </li>
        </ul>
        <ul className="menu__list__sub__name">
          <li>
            <div className="video">
                <img src={videoImg} alt="imgvideo" />
                <div>
                    <p>Why react hook ?</p>
                    <span>10:10 video, 8 minut o'qish</span>
                </div>
            </div>
            <div className="container">
                <input type="checkbox" id="check"/>
                <label for="check"></label>
            </div>
          </li>
          <li>
            <div>
                <img src={listIcon} alt="listIcon" />
                <p>Why react hooks</p>
            </div>
            <div className="container">
                <input type="checkbox" id="check"/>
                <label for="check"></label>
            </div>
          </li>
          <li>
            <div>
                <img src={codeIcon} alt="listIcon" />
                <p>(Amaliyot)Todos</p>
            </div>
            <div className="container">
                <input type="checkbox" id="check"/>
                <label for="check"></label>
            </div>
          </li>
        </ul>
        {/*  */}
        <ul className="menu__list__name">
            <li>
                <div>
                    <span>2</span>
                    <span>Create 3D site with <br/> Spline and ReactCr...</span>
                </div>
                <Checkbox disabled></Checkbox>
            </li>
        </ul>
        <ul className="menu__list__sub__name">
          <li>
            <div className="video">
                <img src={lockIcon} alt="imgvideo" />
                <div>
                    <p>Why react hook ?</p>
                    <span>10:10 video, 8 minut o'qish</span>
                </div>
            </div>
            <div className="container">
                <input type="checkbox" id="check" disabled/>
                <label for="check"></label>
            </div>
          </li>
          <li>
            <div>
                <img src={lockIcon} alt="listIcon" />
                <p>Why react hooks</p>
            </div>
            <div className="container">
                <input type="checkbox" id="check" disabled/>
                <label for="check"></label>
            </div>
          </li>
          <li>
            <div>
                <img src={lockIcon} alt="listIcon" />
                <p>(Amaliyot)Todos</p>
            </div>
            <div className="container">
                <input type="checkbox" id="check" disabled/>
                <label for="check"></label>
            </div>
          </li>
        </ul>
        {/*  */}
        <ul className="menu__list__name">
            <li>
                <div>
                    <span>3</span>
                    <span>Create 3D site with <br/> Spline and ReactCr...</span>
                </div>
                <Checkbox disabled></Checkbox>
            </li>
        </ul>
        <ul className="menu__list__sub__name">
          <li>
            <div className="video">
                <img src={lockIcon} alt="imgvideo" />
                <div>
                    <p>Why react hook ?</p>
                    <span>10:10 video, 8 minut o'qish</span>
                </div>
            </div>
            <div className="container">
                <input type="checkbox" id="check" disabled/>
                <label for="check"></label>
            </div>
          </li>
          <li>
            <div>
                <img src={lockIcon} alt="listIcon" />
                <p>Why react hooks</p>
            </div>
            <div className="container">
                <input type="checkbox" id="check" disabled/>
                <label for="check"></label>
            </div>
          </li>
          <li>
            <div>
                <img src={lockIcon} alt="listIcon" />
                <p>(Amaliyot)Todos</p>
            </div>
            <div className="container">
                <input type="checkbox" id="check" disabled/>
                <label for="check"></label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChildMenu;
