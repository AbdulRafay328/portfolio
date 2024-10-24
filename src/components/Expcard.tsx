import { motion } from "framer-motion";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  head: string;
}

function Card({ src, alt, head }: ImageProps) {
  const cardVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVarient}
      className="shadow-lg shadow-black flex flex-col md:flex-row text-slate-300 justify-center relative bg-slate-800 rounded-lg overflow-hidden items-center mt-12 mx-4 md:mx-20 p-5 md:p-8"
    >
      {/* Image Section */}
      <div className="w-1/5 absolute top-5 left-5 md:static md:w-1/4 flex justify-center items-center">
        <Image
          className="object-contain"
          width={100}
          height={100}
          src={src}
          alt={alt}
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-3/5 pl-0 md:pl-8 mt-14 md:mt-0">
        <h1 className="text-xl md:text-2xl xs:mt-7 font-semibold text-center md:text-left">
          {head}
        </h1>
        <ul className="list-disc ml-6 leading-8 mt-4">
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>

      {/* Date Section */}
      <div className="w-full md:w-1/5 absolute bottom-5 md:static top-3 right-2 text-center">
        Nov 2021 - Present
      </div>
    </motion.div>
  );
}

export default Card;
