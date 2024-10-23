function Navbar() {
  return (
    <>
      <nav className="text-white bg-slate-900 py-4 w-full h-[68px]">
        <div className="px-6 md:px-20 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold">&lt;AR/&gt;</div>

          {/* Navigation Links */}
          <div className="hidden md:flex">
            <ul className="flex gap-6 md:gap-10 cursor-pointer items-center text-sm md:text-base">
              <li>About</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact me</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

