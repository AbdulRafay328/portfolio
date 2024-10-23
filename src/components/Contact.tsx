import Image from "next/image";

function Contactme() {
  return (
    <>
      <div>
        <div className="text-white font-bold text-3xl text-center mt-20">
          rafayone23@gmail.com
        </div>
        <div className="text-white font-bold text-3xl text-center mt-5">
          +92 3162149602
        </div>
        <div className="text-white  text-center mt-10">
          You may also find me on these platforms
        </div>
        <div className="text-white flex justify-center gap-3 items-center text-center mt-10">
          <Image
            className="invert h-10 w-10"
            src="/images/github-icon.png"
            alt=""
            width={500}
            height={400}
          />
          <Image
            className="invert h-10 w-10"
            src="/images/linkedin-square-icon.png"
            alt=""
            width={500}
            height={400}
          />
          <Image
            className="invert h-10 w-10"
            src="/images/github-icon.png"
            alt=""
            width={500}
            height={400}
          />
        </div>
      </div>
    </>
  );
}

export default Contactme
