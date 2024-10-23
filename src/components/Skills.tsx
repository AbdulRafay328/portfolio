import Image from "next/image";
function Skills(){
    return(
    <>
    <div className="logos flex justify-center items-center xs:flex-col xs:m-0 xs:py-12 md:my-20 md:mx-60  mt-20 ml-60 mr-60 mb-20">
          <div className="imgs1 flex items-center justify-center gap-20">
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 object-cover mb-3 w-16"
                src="/images/html-icon.png"
                alt="Html"
                width={500}
                height={400}
              />{" "}
              HTML
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 object-cover mb-3 w-16"
                src="/images/css-icon.png"
                alt="Css"
                width={500}
                height={400}
              />
              CSS
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 mb-3 w-16"
                src="/images/javascript-icon.png"
                alt="javascript"
                width={500}
                height={400}
              />
              JAVASCRIPT
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 mb-3 w-16"
                src="/images/typescript-icon.png"
                alt="typescript"
                width={500}
                height={400}
              />
              TYPESCRIPT
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 mb-3 w-16"
                src="/images/react-js-icon.png"
                alt="react"
                width={500}
                height={400}
              />
              REACT
            </div>
          </div>
          <div className="imgs1 flex items-center mt-16 justify-center gap-20">
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 mb-3 w-16"
                src="/images/nextjs-icon.png"
                alt="next"
                width={500}
                height={400}
              />
              NEXTJS
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 mb-3 w-16"
                src="/images/node-js-icon.png"
                alt="node"
                width={500}
                height={400}
              />
              NODEJS
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="text-center h-16 mb-3 w-16"
                src="/images/tailwind-css-icon.png"
                alt="tailwind"
                width={500}
                height={400}
              />
              TAILWIND CSS
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 mb-3 w-16"
                src="/images/figma-icon.png"
                alt="figma"
                width={500}
                height={400}
              />
              FIGMA
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                className="h-16 mb-3 invert w-16"
                src="/images/github-icon.png"
                alt="github"
                width={500}
                height={400}
              />
              GITHUB
            </div>
          </div>
        </div>
    </>
    )
}

export default Skills

