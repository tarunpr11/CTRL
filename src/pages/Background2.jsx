"use client";
import React from "react";
import BackgroundBeams from "../components/ui/background-beams";
import "../pages/style.css";

const BackgroundBeamsDemo = () => {
  return (
    <div className="h-[60rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <BackgroundBeams />
      </div>
    </div>
  );
}

export default BackgroundBeamsDemo
