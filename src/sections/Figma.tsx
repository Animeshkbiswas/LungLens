'use client';
import Button from "@/components/Button";
import startsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png"
import {motion, useMotionTemplate, useMotionValue, useScroll, useTransform} from "framer-motion"
import { RefObject, useEffect, useRef } from "react";
const useRelativeMousePosition = (to: RefObject<HTMLElement>)=>{
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
 
  const updateMousePosition = (event:MouseEvent)=>{
  if (!to.current) return;
    const {top,left}= to.current.getBoundingClientRect();
    mouseX.set(event.x-left);
    mouseY.set(event.y-top);
  };
useEffect(()=>{
  window.addEventListener('mousemove',updateMousePosition);
  return()=>{
    window.removeEventListener('mousemove',updateMousePosition);
  }
},[])
 return [mouseX,mouseY];
}


export const Figma = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end','end start']
  });
  const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300]);
  const [mouseX,mouseY] = useRelativeMousePosition(borderedDivRef)
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`;
  return (
  <section className="py-16 md:py-20">
    <div className="container">
      <motion.div 
      ref={borderedDivRef}
      animate={{
        backgroundPositionX: startsBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      }}
      className="border border-white/15 py-24 rounded-xl overflow-hidden relative group" 
      style={{
        backgroundPositionY,
        backgroundImage: `url(${startsBg.src})`,
      }}>
        <div className="absolute inset-0 bg-[rgb(6,78,59)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700" 
        style={{
          backgroundImage: `url(${gridLines.src})`,
        }}></div>
        <motion.div className="absolute inset-0 bg-[rgb(6,78,59)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700" 
        style={{
          maskImage,
          backgroundImage: `url(${gridLines.src})`,
        }}></motion.div>
        <div className="relative">
        <h1 className="px-3 text-5xl md:text-6xl text-white font-extrabold text-center pb-6 max-w-sm mx-auto">
  LungLens
</h1>
        <h2 className="text-2xl md:text-3xl text-white/70 tracking-tighter text-center font-medium max-w-xs mx-auto">Where AI meets Healthcare</h2>
      <p className="text-center text-lg  md:text-xl text-white/50 px-4 mt-5 tracking-tight max-w-xs mx-auto">A Bridge between Clinical Power and Human understanding—bringing trustworthy, accessible healthcare to those who need it most.</p>
      <div className="flex justify-center mt-8">
       <a href="#"> 
        <button className="relative py-2 px-4 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#15B392] to-[#54C392] animate-pulse transition-all duration-250 overflow-hidden hover:shadow-[0_0_20px_#10B981]">
  <div className="absolute inset-0 pointer-events-none">
    <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
    <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
    <div className="absolute inset-0 rounded-lg transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.6)]"></div>
  </div>
  <span className="relative z-10">Design Preview</span>
</button>
</a>
      </div>
      </div>
      </motion.div>
    </div>
    </section>
);
};
