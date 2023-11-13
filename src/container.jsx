import React from "react";
import { Routes, Route } from "react-router-dom";
import Step1 from './layouts/step1/step1'
import Step2 from "./layouts/step2/step2";
import Step3 from './layouts/step3/step3'
import Step4 from './layouts/step4/step4'


const Container = () => {
  return (
    <>
    <div className="container">
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4  />} />
        </Routes>
      </div>
   
    </>
  );
};

export default Container;
