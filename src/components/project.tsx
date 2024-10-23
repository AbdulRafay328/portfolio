import Image from "next/image";

interface Image {
  src: string;
  alt: string;
}

function Projectcard({src , alt}:Image) {
  return (
    <>
      <div className="logos xs:mx-7 xs:mt-7 flex text-slate-300 justify-center relative bg-slate-800 rounded-lg overflow-hidden items-center mt-20 ml-60 mr-60 mb-20">
        <div className="p-2 flex items-center justify-center w-1/2">
          <Image className=" object-cover rounded-lg" width={500} height={400} src={src} alt={alt} />
        </div>
        <div className="  bg-slate-700 w-1/2 p-8 pr-8">
          <div>
            <h1>Fiskill</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              assumenda ipsum, harum exercitationem architecto hic.
            </p>
            <div className="skill flex mt-8  items-center flex-wrap gap-3">
              <div className="bg-slate-900 text-[1vw] w-1/6 text-center text-white rounded-xl">
                react
              </div>
              <div className="bg-slate-900 w-1/6 text-[1vw] text-center text-white rounded-xl">
                react
              </div>
              <div className="bg-slate-900 w-1/6 text-[1vw] text-center text-white rounded-xl">
                react
              </div>
              <div className="bg-slate-900 w-1/6 text-[1vw] text-center text-white rounded-xl">
                react
              </div>
              <div className="bg-slate-900 w-1/6 text-[1vw] text-center text-white rounded-xl">
                react
              </div>
              <div className="bg-slate-900 w-1/6 text-[1vw] text-center text-white rounded-xl">
                react
              </div>
              <div className="bg-slate-900 w-1/6 text-[1vw] text-center text-white rounded-xl">
                react
              </div>
            </div>

            <Image
              className="h-5 invert mt-10 ml-2 w-5"
              src="/images/link.png"
              alt="link"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Projectcard;
