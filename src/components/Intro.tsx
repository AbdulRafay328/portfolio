import Image from "next/image";

function Intro() {
  return (
    <>
      <div className="flex xs:flex-col-reverse md:flex-row md:gap-12 gap-12 px-8">
        <div className="left space-y-[48px]">
          <div className="space-y-[8px]">
            <div className="text-[64px] md:text-[64px] md:font-bold font-bold xs:font-semibold xs:text-4xl">
              Hi I&apos;m Rafay
            </div>
            <div className="text-base md:pt-12">
              I&apos;m a frontend developer with a focus on creating and occasionally designing exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </div>
          </div>
          <div className="space-y-[8px] leading-10">
            <div className="flex items-center text-base gap-2">
              <Image
                className="invert"
                width={25}
                height={20}
                src="/images/location.png"
                alt="location logo"
              />
              Karachi, Pakistan
            </div>
            <div className="flex px-2 items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              Available for new projects
            </div>
          </div>
        </div>
        <div className="right xs:w-[100%] md:w-11/12 flex justify-center w-11/12">
          <Image
            className="rounded-xl object-cover shadow-2xl shadow-gray-700"
            width={200}
            height={10}
            src="/images/Profile.png"
            alt="profile image"
          />
        </div>
      </div>
    </>
  );
}

export default Intro;

