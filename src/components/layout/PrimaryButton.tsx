"use client";

import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({ label, type = "submit" }: PrimaryButtonProps) {
  return (
    <Button
      type={type}
      className="py-4 px-12 mt-2 rounded-sm font-bold tracking-wide
        bg-gradient-to-r from-orange-500 to-red-500
        hover:from-red-500 hover:to-orange-500 w-full
        text-white shadow-lg shadow-orange-500/20 
        transition-all duration-300"
    >
      {label}
    </Button>
  );
}
