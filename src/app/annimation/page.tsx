"use client"
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { easeIn, motion } from "framer-motion";

type InteractiveProps={
  interactive?:boolean  
}
export default function AnnimationPage({interactive=true}:InteractiveProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: easeIn }}
      className="absolute inset-0 flex items-center justify-center rounded-xl"
    >
      <BubbleBackground interactive={interactive} className="bg-pink-600" />
    </motion.div>
  );
}
