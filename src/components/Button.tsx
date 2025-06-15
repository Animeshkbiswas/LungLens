import React from 'react'

const Button = () => {
  return (
    <a href="https://github.com/Aryamitra95/LungLens">
    <button className="relative py-2 px-4 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#15B392] to-[#54C392] animate-pulse transition-all duration-250 overflow-hidden hover:shadow-[0_0_20px_#10B981]">
  <div className="absolute inset-0 pointer-events-none">
    <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
    <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
    <div className="absolute inset-0 rounded-lg transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.6)]"></div>
  </div>
  <span className="relative z-10">Join Us</span>
</button>
</a>
  )
}

export default Button