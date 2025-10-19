"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapPage() {
  const dibRef = useRef(null);
  useGSAP(() => {
    gsap.from(dibRef.current, {
      y: 300,
      duration: 2,
      delay: 1,
      opacity: 0,
      rotate:360,
    })
  })

  return (
    <div className="bg-black flex h-screen justify-evenly items-center border border-red-500">
      <div className="p-5 border border-white">
        <div className="circle"></div>
        <div  ref={dibRef} className="dibba"></div>
      </div>
      <div className="main">
        <div className="circle"></div>
        <div className="dibba"></div>
      </div>
    </div>
  );
}
