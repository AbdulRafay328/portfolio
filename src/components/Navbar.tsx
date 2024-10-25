import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white bg-slate-900 py-4 w-full h-[68px] relative z-10">
      <div className="px-6 md:px-20 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold">&lt;AR/&gt;</div>

        <div className="hidden md:flex">
          <ul className="flex gap-6 md:gap-10 items-center text-sm md:text-base">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">Contact me</li>
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-slate-900 py-4">
          <ul className="flex flex-col items-center gap-4 text-sm">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">Contact me</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
