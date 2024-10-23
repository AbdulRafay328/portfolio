import Image from "next/image";

function Contactme() {
  return (
    <div className="flex flex-col items-center text-center mt-20 px-4">
      <div className="text-white font-bold text-2xl md:text-3xl">
        rafayone23@gmail.com
      </div>
      <div className="text-white font-bold text-2xl md:text-3xl mt-5">
        +92 3162149602
      </div>
      <div className="text-white text-base md:text-lg mt-10">
        You may also find me on these platforms
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <Image
          className="invert h-8 w-8 md:h-10 md:w-10"
          src="/images/github-icon.png"
          alt="GitHub Icon"
          width={40}
          height={40}
        />
        <Image
          className="invert h-8 w-8 md:h-10 md:w-10"
          src="/images/linkedin-square-icon.png"
          alt="LinkedIn Icon"
          width={40}
          height={40}
        />
        <Image
          className="invert h-8 w-8 md:h-10 md:w-10"
          src="/images/github-icon.png"
          alt="GitHub Icon"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}

export default Contactme;

