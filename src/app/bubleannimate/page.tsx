import React from 'react'
import {motion} from "framer-motion";
type BubbleBackgroundTypes={
    interactive?:boolean
}

export default function BublePage({interactive=true}:BubbleBackgroundTypes) {
  return (
    <motion.div 
    initial={{opacity:0,scale:0.90}}
    transition={{}}
    animate={{}}
    >

    </motion.div>
    
  )
}
