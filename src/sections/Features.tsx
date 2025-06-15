'use client';
import lightBulb from "@/assets/icons8-light-bulb-48.png";
import alert from "@/assets/icons8-alert-64.png";
import gear from "@/assets/icons8-gear-50.png";
import genAI from "@/assets/icons8-ai-64.png";
import people from "@/assets/icons8-group-of-people-50.png";
import trending from "@/assets/icons8-combo-chart-50.png";
import {motion} from "framer-motion"

const features = [
  {
    text: "In underserved regions, diagnosing diseases like TB, pneumonia, and lung cancer is delayed due to a severe shortage of radiologists.This leads to missed treatment windows and tragic outcomes.",
    name: "The Problem",
    avatarImg: alert.src,
  },
  {
    text: "We built a GenAI-driven web app that analyzes chest X-rays using Vision Transformers and explains results in simple language using GPT.⚡ Fast. 🧠 Smart. ❤ Human-centered.",
    name: "The Solution",
    avatarImg: lightBulb.src,
  },
  {
    text: "1. Upload X-ray Easy image upload on mobile or web. \n 2. AI Detection ViT models spot diseases with high confidence. \n 3. GenAI Explanation GPT converts results into clear next steps. \n 4. Empowerment Health workers can understand and act immediately.",
    name: "How It Works",
    avatarImg: gear.src,
  },
  {
    text: "Prediction scores are not enough. \n GenAI makes results understandable, empathetic, and actionable—even for non-specialists. \n “Early signs of TB detected. Please consult a nearby clinic.”",
    name: "Why GenAI?",
    avatarImg: genAI.src,
  },
  {
    text: "•Frontline workers \n•Rural health centers \n•NGOs & diagnostics labs \n•Areas with no radiologist access",   
    name: "Who It's For",
    avatarImg: people.src,
  },
  {
    text: "•Add more diseases easily \n•Supports regional languages \n•Runs on low-power devices \n•Pilot-ready with NGO partners",
    name: "Scalable & Impactful",
    avatarImg: trending.src,
  },
];

export const Features = () => {
  return (
  <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl text-center tracking-tighter font-medium text-white">
        Diagnose with Confidence <br/>— Powered by GenAI
      </h2>
      <p className="text-white/70 text-lg text-center my-5 tracking-tight max-w-sm mx-auto">Bringing expert-level chest X-ray diagnosis to rural India, instantly and affordably.</p>
      <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div 
      initial={{
        translateX:'-50%'
      }}
      animate={{
        translateX: "0"
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 110,
      }}
      className="flex gap-5 flex-none">
        {[...features,...features].map((feature)=>(
          <div key={feature.name} className="border border-white/15 p-6 md:pb-4 md:px-8 md:pt-4 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(80,200,120,.3),black)] max-w-xs flex-none md:max-w-md">
            <div className="text-white text-lg md:text-2xl flex flex-row items-center gap-3 mt-5" > 
            <img src={feature.avatarImg} className="w-11 h-11 rounded-lg object-cover mr-2" />
            {feature.name}
            </div>
            <div className="text-white text-md md:text-lg pt-4 pb-1 whitespace-pre-line tracking-tight">
              {feature.text}
            </div>
          </div>
        ))}
      </motion.div>
      </div>
      <p className="text-white/70 text-lg text-center mt-16 tracking-tight">🥼 A Doctor's Assistant in Your Pocket<br/>This is more than just a model.<br/>It's a mission to make healthcare accessible, understandable, and equitable—for everyone.</p>
    </div>
    </section>
);
};
