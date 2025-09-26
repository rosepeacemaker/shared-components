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

export default function DropDown() {
  return (
    <div className="flex items-center justify-center p-6 flex-col">
      <DropdownMenu>
        <DropdownMenuTrigger className="base-button">Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <HeroFooter />
      <ManagementBar />
    </div>
  );
}
