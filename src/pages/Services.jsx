import React from "react";
import ThreeDCardDemo from "../pages/Card";
import "./style.css";
import SparklesPreview from "../pages/WhatWeDoTitle";

const Services = () => {
  return (
    <div className="services" id="services">
      <SparklesPreview />
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <ThreeDCardDemo
          title="Web Development"
          subtitle="Building Beautiful, Functional Web Solutions"
          image="/assets/web.jpg"
          className="service-card-1 service-card"
        />
        <ThreeDCardDemo
          title="Video Editing"
          subtitle="Transforming Footage into Art"
          image="/assets/edit.jpg"
          className="service-card-3 service-card"
        />
        <ThreeDCardDemo
          title="Posts and Logo Design"
          subtitle="Designing Dreams into Reality"
          image="/assets/posts.jpg"
          className="service-card-4 service-card"
        />
        <ThreeDCardDemo
          title="App Development"
          subtitle="Coming soon..."
          image="/assets/app.jpg"
          className="service-card-2 service-card"
        />
      </div>
    </div>
  );
};

export default Services;
