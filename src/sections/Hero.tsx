'use client';
import Button from "@/components/Button";
import startsBg from "@/assets/stars.png";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:['start end', 'end start']
  });
  const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300]);
  return (
 <motion.section
  className="md:h-[1000px] flex items-center justify-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
  style={{ 
    backgroundImage: `url(${startsBg.src})` ,
    backgroundPositionY,
  }}
   animate={{
    backgroundPositionX: startsBg.width,
   }} 
   transition={{
    repeat: Infinity,
    ease: 'linear',
    duration: 90
   }}
>
  <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(80,200,120,.5)_15%,rgb(5,31,24,.5)_78%,transparent)]"></div>
  {/*Planet*/}
  <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(16,185,129)_37.7%,rgb(6,78,59))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(16,185,129)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  {/*Planet*/}
  {/*Ring 1*/}
  <motion.div 
  style={{
    translateY: '-50%',
    translateX: '-50%',
  }}
  animate={{
    rotate: '1turn',
  }}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: "linear",
  }}
  className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
   <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -transalte-x-1/2 -translate-y-1/2">
   <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -transalte-x-1/2 -translate-y-1/2"></div>
   <div className="absolute h-5 w-5 left-full border border-white bg-white rounded-full top-1/2 -transalte-x-1/2 -translate-y-1/2 inline-flex items-center justify-center"></div>
   <div className="h-2 w-2 bg-white rounded-full"></div>
  </div>
  </motion.div>
  {/*Ring 1*/}
  {/*Ring 2*/}
  <motion.div
  style={{
    translateY: '-50%',
    translateX: '-50%',
  }} 
   animate={{
    rotate: '-1turn',
   }}
   transition={{
     repeat: Infinity,
    duration: 90,
    ease: "linear",
   }}
  className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>
  {/*Ring 2*/}
  {/*Ring 3*/}
  <motion.div 
  style={{
    translateY: '-50%',
    translateX: '-50%',
  }} 
   animate={{
    rotate: '1turn',
   }}
   transition={{
     repeat: Infinity,
    duration: 1200,
    ease: "linear",
   }}
  className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -transalte-x-1/2 -translate-y-1/2"></div>
   <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -transalte-x-1/2 -translate-y-1/2"></div>
  </motion.div>
  {/*Ring 3*/}
  <div className="container relative mt-16">
    <h1 className="pb-4 text-8xl md:text-[168px] md:pb-8 font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(110,231,183,.5))] text-transparent bg-clip-text text-center">
      Lung Lens
    </h1>
    <p className="text-white/70 text-lg md:text-xl mt-5 text-center max-w-xl mx-auto">
      An AI-powered tool that analyzes chest X-rays to detect lung conditions with speed and precision.<br/>Designed to assist healthcare professionals with fast, reliable, and data-driven diagnostics.
    </p>
    <div className="flex justify-center mt-5 relative z-5">
      <Button />
    </div>
  </div>
  
</motion.section>

  );
};
