import { Features } from "@/sections/Features";
import { Figma } from "@/sections/Figma";
import { Footer } from "@/sections/Footer";
import {Header} from "@/sections/Header"
import {Hero} from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker";
import { Prototype } from "@/sections/Prototype";
import ImgUploadComponent from '@/components/ImgUploadComponent';
export default function Home() {
  return (
  <>
    <Header/>
    <Hero/>
    <LogoTicker/>
    <Features/>
    <Figma/>
     <div className="flex justify-center items-center h-screen">
      <ImgUploadComponent />
    </div>
    <Prototype/>
    <Footer/>
  </>
  );
}
