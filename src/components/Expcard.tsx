import Image from "next/image";

interface Image {
  src: string;
  alt: string;
  head:string
}

function Card({src , alt ,head}:Image){
    return(
        <>
        <div className="logos shadow-lg shadow-black flex xs:flex-col md:flex-row xs:mx-7 xs:mt-12 text-slate-300 justify-center relative bg-slate-800 rounded-lg overflow-hidden items-center mt-20 ml-80 mr-80">
          <div className="  w-1/5 absolute top-5 left-5">
            <Image className="" width={500} height={400}  src={src} alt={alt} />
          </div>
          <div className="  w-3/5 pl-8">
            <h1 className="text-2xl font-semibold">{head}</h1>
            <ul className=" list-disc ml-6 leading-10">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className=" w-1/5 absolute top-3 right-2 text-center">
            Nov 2021 - Present
          </div>
        </div>
        </>
    )
}

export default Card