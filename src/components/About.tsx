import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20 mt-10">
      <div className="h-96 md:w-1/2 flex justify-center items-center">
        <Image
          className="rounded-xl shadow-2xl shadow-gray-700 object-cover"
          width={220}
          height={300} // Adjusted height for better aspect ratio
          src="/images/Aboutme.png"
          alt="About Me"
        />
      </div>
      <div className="md:w-1/2 xs:pt-5 xs:px-4 space-y-8">
        <div className="font-medium text-xl">Curious about me? Here you have it:</div>
        <div>
          I&apos;m a passionate self-proclaimed designer who specializes in full stack development with React.js & Node.js. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matter to me.
        </div>
        <div>
          I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nest.js, Tailwind CSS, Supabase, and much more.
        </div>
      </div>
    </div>
  );
}

export default About;
