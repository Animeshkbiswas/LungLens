'use client';
import startsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png"
import {motion, useMotionTemplate, useMotionValue, useScroll, useTransform} from "framer-motion"
import { RefObject, useEffect, useRef } from "react";
import React, { useState } from 'react';
import axios from 'axios';

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
export const Prototype = () => {
  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState('');
  const [resultWord, setResultWord] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
    const borderedDivRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ['start end','end start']
    });
    const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300]);
    const [mouseX,mouseY] = useRelativeMousePosition(borderedDivRef)
    const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setPreviewURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      setIsProcessing(true);
      const response = await axios.post('https://asutoshp10-Lungs-space.hf.space/upload-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResultWord(response.data.word);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image');
    } finally {
      setIsProcessing(false);
    }
  };
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
        <h1 className="px-3 text-3xl md:text-4xl text-white font-extrabold text-center pb-6 max-w-sm mx-auto">
  Try Our Prototype
</h1>
<div className="flex flex-col items-center border border-emerald-400/20 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] max-w-md mx-auto p-4">
  {previewURL && (
    <div className="mb-4">
      <img
        src={previewURL}
        alt="Preview"
        className="w-40 h-auto rounded shadow"
      />
    </div>
  )}
  <div className="flex flex-col items-center space-y-2">
      {fileName && (
        <p className="text-white text-sm text-center truncate max-w-xs">
          {fileName}
        </p>
      )}
      <label className="relative inline-flex items-center justify-center px-6 py-2 bg-white rounded-lg">
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          className="hidden"
        />
        <span className="relative z-5 font-normal">Upload Xray</span>
      </label>
    </div>
    <button
        onClick={handleUpload}
        className="relative py-2 px-4 mt-6 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#15B392] to-[#54C392] animate-pulse transition-all duration-250 overflow-hidden hover:shadow-[0_0_20px_#10B981]">
          <div className="absolute inset-0 pointer-events-none">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
          <div className="absolute inset-0 rounded-lg transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.6)]"></div>
        </div>
        Try the model
      </button>
</div>
 {resultWord && (
  <div className="mt-6 px-6 py-5 bg-[#062c23] border border-emerald-400/20 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] max-w-md mx-auto">
    <h4 className="text-emerald-300 text-lg font-semibold tracking-tight text-center">
      Probable Disease:
    </h4>
    <p className="text-white text-xl text-center mt-2 font-bold tracking-wide">
      {resultWord}
    </p>
     <p className="text-sm text-yellow-300 mt-4 text-center italic">
      ⚠ This is an AI-generated prediction. Do not rely on it as a medical diagnosis.
      Please consult a licensed physician for confirmation.
    </p>
  </div>
)}
      </div>
      </motion.div>
    </div>
    </section>

    );
};
