import Image from "next/image";

function Intro() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-12 gap-8 px-4 md:px-8 py-8">
      <div className="left space-y-8 md:space-y-12">
        {/* Heading Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold md:font-bold">
            Hi I&apos;m Rafay
          </h1>
          <p className="text-base md:text-lg md:pt-6 leading-relaxed">
            I&apos;m a frontend developer with a focus on creating and occasionally designing exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
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
      </div>

      {/* Profile Image */}
      <div className="right w-full md:w-5/12 flex justify-center">
        <Image
          className="rounded-xl md:hidden mds:block mds:p-0 mds:gap-1 object-cover shadow-2xl shadow-gray-700"
          width={300}
          height={300}
          src="/images/Profile.png"
          alt="profile image"
        />
      </div>
    </div>
  );
}

export default Intro;

