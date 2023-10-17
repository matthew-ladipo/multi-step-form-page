import React from "react";
import { Routes, Route } from "react-router-dom";
import Step1 from './layouts/step1/step1'
import Step2 from "./layouts/step2/step2";
import Step3 from './layouts/step3/step3'
import Step4 from './layouts/step4/step4'
import Side from './component/side-navigation'

const Container = () => {
  return (
    <div className="container">
      <Side />
      <div className="form-box">
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2-page" element={<Step2 />} />
          <Route path="/step3-page" element={<Step3 />} />
          <Route path="/step4-page" element={<Step4 />} />
        </Routes>
        
      </div>
    </div>
  );
};

export default Container;
