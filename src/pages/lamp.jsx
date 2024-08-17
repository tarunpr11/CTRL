"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import "./style.css";

const LampDemo = () => {
  return (
    <LampContainer className="lamp-container">
      <motion.h1
  initial={{ opacity: 0.5, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className=" bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl font-medium tracking-tight text-transparent"
>
  About Us
</motion.h1>




    </LampContainer>
  );
};

export default LampDemo;
