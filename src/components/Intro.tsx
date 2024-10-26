import { motion } from "framer-motion";

import Image from "next/image";

function Intro() {
  const leftVarient = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const rightVarient = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col-reverse md:flex-row md:gap-12 gap-8 px-4 md:px-8 py-8"
    >
      <motion.div
        variants={leftVarient}
        className="left space-y-8 md:space-y-12"
      >
        {/* Heading Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold md:font-bold">
            Hi I&apos;m Rafay
          </h1>
          <p className="text-base md:text-lg md:pt-6 leading-relaxed">
            I&apos;m a frontend developer with a focus on creating and
            occasionally designing exceptional digital experiences that are
            fast, accessible, visually appealing, and responsive. Even though I
            have been creating web applications for over 2 years, I still love
            it as if it was something new.
          </p>
        </div>

        {/* Location & Availability */}
        <div className="space-y-4 leading-10">
          <div className="flex items-center gap-2 text-base md:text-lg">
            <Image
              className="invert"
              width={25}
              height={20}
              src="/images/location.png"
              alt="location logo"
            />
            Karachi, Pakistan
          </div>
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-green-600"></div>
            Available for new projects
          </div>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        variants={rightVarient}
        className="right w-full md:w-5/12 flex justify-center"
      >
        <Image
          className="rounded-xl md:hidden mds:block mds:p-0 mds:gap-1 object-cover shadow-2xl shadow-gray-700"
          width={300}
          height={300}
          src="/images/Profile.png"
          alt="profile image"
        />
      </motion.div>
    </motion.div>
  );
}

export default Intro;
