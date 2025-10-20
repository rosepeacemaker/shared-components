import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ImageStyle() {
  const Images = [
    {
      title: " Guest favourite",
      icon: Heart,
      image: "/assets/bedroom-img.jpg",
    },
    { title: " Guest favourite", icon: Heart, image: "/assets/hold-img.jpg" },
    { title: " Guest favourite", icon: Heart, image: "/assets/house-img.jpg" },
  ];
  return (
    <div className="flex flex-row gap-3 p-2">
      {Images.map((item, index) => (
        <Card key={index} className="flex gap-2 py-0 shadow-none border-none">
          <CardContent className="p-0">
            <div className="relative top-8 flex px-3 justify-between items-center  flex-row">
              <div className=" bg-white px-3 rounded-full">
                <span className="text-xs text-center font-medium text-black">
                  {item.title}
                </span>
              </div>
              <item.icon className="h-6 w-6" fill="gray" color="white" />
            </div>
            <Image
              src={item.image}
              alt="household"
              width={320}
              height={400}
              className="object-cover h-48 w-48 rounded-3xl"
            />
          </CardContent>
          <CardFooter className="p-0">
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold">Apartment in uptown</span>
              <span className="text-xs text-gray-500">
                $177 for one night. ⭐5.0
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
