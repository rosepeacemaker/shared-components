"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeroFooter from "@/features/components/shared/reuseablecard";
import { ManagementBar } from "@/components/animate-ui/components/community/management-bar";
import ImageCards from "@/features/imagecards";
import VideoCard from "@/features/components/videoclip";
import ButtonStyle from "@/features/components/shared/buttonstyle";

export default function DropDown() {
  return (
    <div className="flex items-center justify-center p-6 flex-col">
      {/* <DropdownMenu>
        <DropdownMenuTrigger className="base-button">Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <HeroFooter />
      <ImageCards />
      {/* <ManagementBar /> */}
      <p className="text-2xl text-black font-bold italic -rotate-y-12 -rotate-x-45 font-serif mt-20">
        It&apos;s free
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="flex items-center justify-center  bg-[#F9F5EF]">
          <ButtonStyle />
        </div>
        {/* <VideoCard
          videoSrc="/assets/clock-clip.mp4" // Replace with your video path/URL
          thumbnail="/images/thumbnail.jpg" // Optional
          title="Sample Video 1"
        />
        <VideoCard
          videoSrc="/assets/stone-clip.mp4" // YouTube example (use iframe for embeds)
          title="YouTube Embed"
        />
        <VideoCard
          videoSrc="/assets/stone-clip.mp4"
          title="Sample Video 2"
        /> */}
      </div>
    </div>
  );
}
