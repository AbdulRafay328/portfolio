import React from "react";

type MyComponentProps = {
  showParagraph?: boolean;
  heading?: string;
  headline?: string;
};

function Heading({
  showParagraph = true,
  heading,
  headline,
}: MyComponentProps) {
  return (
    <>
      <div className="border-solid text-white border-2 w-3/4 md:w-56 mx-auto bg-slate-700 rounded-lg border-sky-500">
        <div className="heading text-center m-3 text-lg md:text-xl">
          {heading}
        </div>
      </div>

      {showParagraph && (
        <p className="text-center text-white mt-6 md:mt-10 text-sm md:text-base px-4 md:px-0">
          {headline}
        </p>
      )}
    </>
  );
}

export default Heading;
