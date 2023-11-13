import React from "react";
import Contain from "./container";
import './index'
import Side from './component/side-navigation'


function App() {
  return (
    <>
      <div className="box">
        <div className="sub-box">
        <Side/>
        <Contain />
        </div>
      </div>
    </>
  );
}

export default App;
