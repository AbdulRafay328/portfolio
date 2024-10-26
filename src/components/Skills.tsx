import Image from "next/image";

function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center items-center xs:py-12 md:my-20 mx-auto md:w-10/12 lg:w-8/12">
        {/* First Row of Skills */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/html-icon.png"
              alt="Html"
              width={500}
              height={400}
            />
            <span className="text-center">HTML</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/css-icon.png"
              alt="Css"
              width={500}
              height={400}
            />
            <span className="text-center">CSS</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/javascript-icon.png"
              alt="JavaScript"
              width={500}
              height={400}
            />
            <span className="text-center">JavaScript</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/typescript-icon.png"
              alt="TypeScript"
              width={500}
              height={400}
            />
            <span className="text-center">TypeScript</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/react-js-icon.png"
              alt="React"
              width={500}
              height={400}
            />
            <span className="text-center">React</span>
          </div>
        </div>

        {/* Second Row of Skills */}
        <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/nextjs-icon.png"
              alt="Next.js"
              width={500}
              height={400}
            />
            <span className="text-center">Next.js</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/node-js-icon.png"
              alt="Node.js"
              width={500}
              height={400}
            />
            <span className="text-center">Node.js</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/tailwind-css-icon.png"
              alt="Tailwind CSS"
              width={500}
              height={400}
            />
            <span className="text-center">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 w-16"
              src="/images/figma-icon.png"
              alt="Figma"
              width={500}
              height={400}
            />
            <span className="text-center">Figma</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              className="h-16 object-cover mb-3 invert w-16"
              src="/images/github-icon.png"
              alt="GitHub"
              width={500}
              height={400}
            />
            <span className="text-center">GitHub</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
