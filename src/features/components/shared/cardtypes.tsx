import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type ReusableCardProps = {
  title: string;
content: string;
  bgColor: string;
};

export default function ReusableCard({ title, bgColor,content}: ReusableCardProps) {
  return (
    <Card
      className={`w-[550px] max-w-[300px] h-[200px] ${bgColor} flex items-center justify-center border border-white text-white text-[20px]`}
    >
      <CardContent className="flex flex-col items-center justify-center gap-2 w-full">
        <CardTitle className="text-center">{title} {content}</CardTitle>
      </CardContent>
    </Card>
  );
}
