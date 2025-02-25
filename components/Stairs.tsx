/*"use client"

import { motion, animate } from "framer-motion"



const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};


const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};


const Stairs = () => {
  return (
    <>
      {[...Array(6).map((_, index) => {
        return (
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
            />
        );        
      })]}
    </>
  )
};

export default Stairs; */



"use client"; // If you're using Next.js, this is required for client components

import { motion, AnimatePresence } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (

      <AnimatePresence mode="wait">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
              }}
              className="relative h-full w-full bg-white"
            />
          ))}
      </AnimatePresence>
  );
};

export default Stairs;
