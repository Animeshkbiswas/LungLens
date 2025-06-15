import LungLens from "@/assets/lunglens-logo.svg"
import GitH from "@/assets/github-white-icon.svg"
import LinkedIn from "@/assets/linkedin.svg"
import Figma from "@/assets/Fig_Logo.svg"
export const Footer = () => {
  return (
  <footer className="py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
      <div className="flex gap-3 py-8 justify-center items-center overflow-visible">
  <LungLens className="w-12 h-12 mt-5" /> 
  <h1 className="mr-2 text-2xl font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
    Lung<span className="text-emerald-700">Lens</span>
  </h1>
  <div className="font-medium text-white/40">Prototype Page</div>
</div>
      <div>
        <nav className="flex flex-col lg:flex-row lg:gap-7 gap-4 lg:flex-1">
  <p className="text-white/30 text-md">Meet the team:</p>

  <a href="https://www.linkedin.com/in/aryamitra-pradhan-a31a34344/" className="text-white/70 hover:text-white text-xs md:text-sm flex items-center gap-2 transition">
    <LinkedIn className="w-4 h-4" />
    Aryamitra Pradhan
  </a>

  <a href="https://www.linkedin.com/in/asutosh-pradhan-089758278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white/70 hover:text-white text-xs md:text-sm flex items-center gap-2 transition">
    <LinkedIn className="w-4 h-4" />
    Asutosh Pradhan
  </a>

  <a href="https://www.linkedin.com/in/animesh-kumar-biswas-584085280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white/70 hover:text-white text-xs md:text-sm flex items-center gap-2 transition">
    <LinkedIn className="w-4 h-4" />
    Animesh Biswas
  </a>

  <a href="https://www.linkedin.com/in/shibansh-behera-b38a77317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white/70 hover:text-white text-xs md:text-sm flex items-center gap-2 transition">
    <LinkedIn className="w-4 h-4" />
    Shibansh Behera
  </a>
</nav>
      </div>
      <div className="py-8 inline-flex gap-5 lg:flex-1">
       <a href="https://github.com/Aryamitra95/LungLens" className="text-white/40 hover:text-white transition h-6 w-6"><GitH /></a> 
        
        </div>
      </div>
    </div>
    </footer>
    );
};
