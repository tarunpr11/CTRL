import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import "./style.css";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 home-title">
        Build
        <FlipWords words={words} /> <br />
        websites with Ctrl.
      </div>
    </div>
  );
}
