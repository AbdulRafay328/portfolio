import Image from "next/image";
function Testimonials() {
  return (
    <>
      <div className=" bg-slate-800 xs:w-96 h-96 p-8 text-white flex flex-col rounded-lg items-center w-2/6 people1">
        <Image
          className="h-10 invert w-10"
          src="/images/user-profile-icon.png"
          alt=""
          width={500}
          height={400}
        />
        <div className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nihil nemo ipsa quo impedit sunt aperiam quae hic deleniti temporibus?
        </div>

        <div className="mt-5">
          <h1 className="font-bold">John doe</h1>
          <div>freelancer</div>
        </div>
      </div>
    </>
  );
}

export default Testimonials