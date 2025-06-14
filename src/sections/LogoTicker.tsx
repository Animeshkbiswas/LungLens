'use client';
import pyTorch from "@/assets/icons8-pytorch-48.png"
import tensorF from "@/assets/icons8-tensorflow-48.png"
import nextJ from "@/assets/icons8-next.js-48.png"
import flsk from "@/assets/icons8-flask-50.png"
import rctJ from "@/assets/icons8-react-48.png"
import tailwnd from "@/assets/icons8-tailwind-css-48.png"
import ndejs from "@/assets/icons8-node.js-48.png"
import typscrpt from "@/assets/icons8-typescript-48.png"
import {motion} from "framer-motion"
export const LogoTicker = () => {
  return (
  <section className="py-20 md:py-24 ">
    <div className="container">
      <div className="flex items-center gap-5">
        <div className="flex-1 md:flex-none">
          <h2 className="text-white pr-12">Tools & Technologies</h2>
        </div>
        <div className = "flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div 
          initial={{
            translateX: '-50%'
          }}
          animate={{translateX:'0'}}
          transition={{
            repeat: Infinity,
            duration:30,
            ease:'linear'
          }}
          className="flex flex-none gap-14">
          {[pyTorch,tensorF,flsk,nextJ,ndejs,rctJ,typscrpt,tailwnd,pyTorch,tensorF,flsk,nextJ,ndejs,rctJ,typscrpt,tailwnd].map((icon)=>(
            <img src={icon.src} key={icon.src} className="h-12 w-auto"/>
          ))}
        </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
};
