import Image from "next/image";

interface Image {
  src: string;
  alt: string;
}

function Projectcard({ src, alt }: Image) {
  return (
    <>
      <div className="logos xs:mx-5 xs:mt-7 md:mx-20 flex xs:flex-col md:flex-row text-slate-300 justify-center bg-slate-800 rounded-lg overflow-hidden items-center mt-20 mb-20">
        {/* Image Section */}
        <div className="p-2 flex items-center justify-center xs:w-full md:w-1/2">
          <Image
            className="object-cover rounded-lg"
            width={500}
            height={400}
            src={src}
            alt={alt}
          />
        </div>
        
        {/* Text and Skills Section */}
        <div className="bg-slate-700 xs:w-full md:w-1/2 p-6 md:p-8">
          <h1 className="text-xl font-bold">Fiskill</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            assumenda ipsum, harum exercitationem architecto hic.
          </p>
          
          {/* Skills */}
          <div className="skill flex flex-wrap mt-8 gap-3">
            <div className="bg-slate-900 text-xs md:text-sm text-center text-white rounded-xl px-3 py-1">
              React
            </div>
            <div className="bg-slate-900 text-xs md:text-sm text-center text-white rounded-xl px-3 py-1">
              Tailwind CSS
            </div>
            <div className="bg-slate-900 text-xs md:text-sm text-center text-white rounded-xl px-3 py-1">
              Next.js
            </div>
            <div className="bg-slate-900 text-xs md:text-sm text-center text-white rounded-xl px-3 py-1">
              TypeScript
            </div>
            <div className="bg-slate-900 text-xs md:text-sm text-center text-white rounded-xl px-3 py-1">
              Node.js
            </div>
            <div className="bg-slate-900 text-xs md:text-sm text-center text-white rounded-xl px-3 py-1">
              Firebase
            </div>
          </div>

          {/* Link Icon */}
          <div className="flex justify-start mt-10">
            <Image
              className="h-5 invert w-5"
              src="/images/link.png"
              alt="link"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projectcard;
