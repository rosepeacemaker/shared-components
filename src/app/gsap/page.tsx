"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapHook() {
  useGSAP(() => {
    gsap.to(".box", {
      x: 1000,
      duration: 2,
      delay: 1,
    });
  });

  return <div className=" box"></div>;
}
