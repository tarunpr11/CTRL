import React from "react";
import { TextGenerateEffectDemo } from "../pages/TextGenerateEffectDemo";
import "./style.css";
import { LampDemo } from "../pages/lamp";

const About = () => {
  return (
    <div id="about">
      <LampDemo className="lamp-component" />
      <TextGenerateEffectDemo className="text-generate-component" />
    </div>
  );
};

export default About;
