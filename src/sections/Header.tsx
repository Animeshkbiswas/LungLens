import LogoIcon from '@/assets/lunglens-logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import Button from '@/components/Button';
export const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="px-8 lg:px-24">
      <div className="flex justify-between items-center md:border border-white/15 md:p-3 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
        <div className='flex'>
          <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
            <LogoIcon className="h-8 w-8"/>
          </div>
          <h1 className="px-3 text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
  Lung<span className="text-emerald-700">Lens</span>
</h1>
        </div>
        <div className='hidden md:block'>
          <nav className='flex gap-8 text-sm'>
            <a href="./sections/LogoTicker.tsx" className='text-white/70 hover:text-white transition'>Toolkit</a>
            <a href="./sections/Features.tsx"className='text-white/70 hover:text-white transition'>Features</a>
            <a href="./Figma.tsx"className='text-white/70 hover:text-white transition'>Design</a>
            <a href="./Prototype.tsx"className='text-white/70 hover:text-white transition'>Try Demo</a>
          </nav>
        </div>
        <div className='flex gap-4 items-center'>
            <Button/>
            <MenuIcon className="md:hidden"/>
        </div>
      </div>
    </div>
  </header>;
};
