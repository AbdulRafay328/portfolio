import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex mt-10 xs:flex-col md:flex-row justify-center xs:px-0 md:px-20 items-center px-20">
        <div className="  h-96 w-1/2 flex justify-center items-center">
          <Image className=" rounded-xl shadow-2xl shadow-gray-700 object-cover" width={220} height={10} src="/images/Aboutme.png" alt="" />
        </div>
        <div className="w-2/4 xs:pt-5 xs:pl-[30px]  space-y-8">
          <div className="font-medium text-xl">Curious about me? Here you have it:</div>
          <div>
            Im a passionate self-proclaimed designer who specializes in full
            stack development React.js & Nodejs. I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience pixel perfect design, and writing clear
            readable, highly performant code matters to me.
          </div>
          <div>
            I began my journey as a web developer in 2015, and since then, Ive
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, Im building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </div>
        </div>
      </div>
    </>
  );
}

export default About
