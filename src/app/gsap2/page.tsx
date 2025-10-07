"use client";
import { useGSAP } from "@gsap/react";
import gsap, { random } from "gsap";
import React, { useRef, useState } from "react";

export default function GsapAnimation() {
  const rotate  = gsap.utils.random(-360, 360, 30);
  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-200, 200, 10);
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotation, setRotate] = useState(0);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      duration: 2,
      rotate: rotation,
    });
  }, [xValue, rotation, yValue]);
  return (
    <div className="flex flex-col items-center justify-center bg-teal-950 h-screen">
      <button
        className="px-4 py-2 bg-pink-400 rounded-2xl mb-20"
        onClick={() => {
          setXValue(randomX);
          setRotate(rotate);
          setYValue(randomY);
        }}
      >
        Annimate
      </button>
      <div
        ref={imageRef}
        className="bg-[url('/assets/mosq-img.png')] bg-cover w-[300px] h-[300px]"
      ></div>
    </div>
  );
}
