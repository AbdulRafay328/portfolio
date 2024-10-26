import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  src: string;
  alt: string;
  address: string;
  heading: string;
}

function Projectcard({ src, alt, address, heading }: ImageProps) {
  // Framer Motion variants for left and right animations
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="logos xs:mx-5 xs:mt-7 md:mx-20 flex xs:flex-col md:flex-row text-slate-300 justify-center bg-slate-800 rounded-lg overflow-hidden items-center mt-20 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image Section (Sliding in from the left) */}
      <motion.div
        className="p-2 flex items-center justify-center xs:w-full md:w-1/2"
        variants={leftVariant}
      >
        <Image
          className="object-cover rounded-lg"
          width={500}
          height={400}
          src={src}
          alt={alt}
        />
      </motion.div>

      {/* Text and Skills Section (Sliding in from the right) */}
      <motion.div
        className="bg-slate-700 xs:w-full md:w-1/2 p-6 md:p-8"
        variants={rightVariant}
      >
        <h1 className="text-xl font-bold">{heading}</h1>
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
          <Link href={address}>
          <Image
            
            className="h-5 invert w-5"
            src="/images/link.png"
            alt="link"
            width={20}
            height={20}
          />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projectcard;
