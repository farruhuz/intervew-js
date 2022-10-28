import React, { useState } from "react";
import "./App.css";
import logo from "./assets/images/logo.png";
import ChildMenu from "./components/ChildMenu/ChildMenu";

function App() {
  const [showmenu, setShowmenu] = useState(false);
  const [onceWork, setOnceWork] = useState(false);

  const changeSecondChildClassHandler = (value, value2)=>{
    setShowmenu(value)
    setOnceWork(value2)
  }
  return (
    <div className="lessons">
      <div className="lessons__btn">
        <div className="lessons__firstchild" onClick={()=>changeSecondChildClassHandler(!showmenu, true)}>
          <img src={logo} alt="ilmhub__logo" />
          <span>Darslar</span>
        </div>
        <div className={onceWork ? (showmenu ? "lessons__secondchild__2" : "lessons__secondchild") : "lessons__secondchild0"}>
          <ChildMenu/>
        </div>
      </div>
      <div className="box_model"></div>
    </div>
  );
}

export default App;
