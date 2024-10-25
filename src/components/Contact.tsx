import Image from "next/image";
import Link from "next/link";

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
        <Link href="https://github.com/AbdulRafay328">
          <Image
            className="invert h-8 w-8 md:h-10 md:w-10"
            src="/images/github-icon.png"
            alt="GitHub Icon"
            width={40}
            height={40}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/abdul-rafay-979143308/">
        <Image
          className="invert h-8 w-8 md:h-10 md:w-10"
          src="/images/linkedin-square-icon.png"
          alt="LinkedIn Icon"
          width={40}
          height={40}
        />
        </Link>
        <Link href="https://github.com/AbdulRafay328">
        <Image
          className="invert h-8 w-8 md:h-10 md:w-10"
          src="/images/github-icon.png"
          alt="GitHub Icon"
          width={40}
          height={40}
        />
        </Link>
      </div>
    </div>
  );
}

export default Contactme;
