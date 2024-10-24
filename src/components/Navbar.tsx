

function Navbar() {
  return (
    <>
      <nav className="text-white bg-slate-900 py-4 w-full h-[68px]">
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;

