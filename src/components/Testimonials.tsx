import Image from "next/image";

function Testimonials() {
  return (
    <>
      <div className="bg-slate-800 xs:w-[300px] md:w-[400px] lg:w-[500px] p-8 text-white flex flex-col rounded-lg items-center mx-auto my-10 shadow-lg">
        <Image
          className="h-20 w-20 object-cover rounded-full mb-5"
          src="/images/user-profile-icon.png"
          alt="User profile"
          width={80}
          height={80}
        />
        <p className="text-center text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nihil nemo ipsa quo impedit sunt aperiam quae hic deleniti temporibus?
        </p>
        <div className="mt-5 text-center">
          <h1 className="font-bold text-lg">John Doe</h1>
          <div className="text-gray-400">Freelancer</div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
