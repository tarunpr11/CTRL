'use client';
import React from 'react';
import BackgroundBeams from '../components/ui/background-beams';
import '../pages/style.css'; // Ensure your CSS is imported

const BackgroundBeamsDemo = () => {
  return (
    <div className="container my-20">
      <div className="background-beams-wrapper parent-container h-screen w-full relative">
        <BackgroundBeams />
        </div>
    </div>
    
  );
}

export default BackgroundBeamsDemo;
