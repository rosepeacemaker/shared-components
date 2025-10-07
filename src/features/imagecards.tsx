import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

import React from "react";

export default function ImageCards() {
  const cardImages = [
    { title: "Card 1", image: "/assets/stone-clip.mp4" },
    { title: "Card 2", image: "/assets/stone-clip.mp4" },
    { title: "Card 3", image: "/assets/stone-clip.mp4" },
    { title: "Card 4", image: "/assets/stone-clip.mp4" },
    { title: "Card 5", image: "/assets/stone-clip.mp4" },
    { title: "Card 6", image: "/assets/stone-clip.mp4" },
    { title: "Card 7", image: "/assets/stone-clip.mp4" },
  ];
  return (
    <div className="flex flex-row gap-1 mt-6">
      {cardImages.map((items, index) => (
        <Card key={index}>
          <CardHeader>{items.title}</CardHeader>
          <CardContent>
            <Image src="/assets/stone-clip.mp4" alt="fly"width={800} height={600}
            className="bg-cover  w-full h-36 rounded-lg" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
