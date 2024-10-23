function Navbar() {
  return (
    <>
      <nav className="text-white md:px-20 xs:w-[768px] xs:px-0 md:w-full md:py-4 bg-slate-900 py-4 w-full px-20 h-[68px] ">
        <div className="px-8 flex justify-between items-center ">
          <div className="text-3xl font-bold">&lt;AR/&gt;</div>
          <div>
            <ul className="flex gap-10 cursor-pointer items-center text-base">
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
