"use client";
import React from "react";
import ReusableCard from "./cardtypes";

export default function HeroFooterCard() {
  const cardData = [
    {
      title: "Find Your Courses, Apply Hurry up!",
content:"Join Our Learning Community!",
      bgColor: "bg-green-600",
    },
    {
      title: "Explore New Skills Today!",
content:"Join Our Learning Community!",
      bgColor: "bg-yellow-500",
    },
    {
      title: "Join Our Learning Community!",
content:"Join Our Learning Community!",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-6 py-6">
      {cardData.map((card, index) => (
        <ReusableCard key={index} title={card.title} bgColor={card.bgColor} content={card.content} />
      ))}
    </div>
  );
}
