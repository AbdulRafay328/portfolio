import React from 'react';

// Define the props type
type MyComponentProps = {
  showParagraph?: boolean; // Optional prop, defaults to true
  heading?: string;
  headline?: string;
};

function Heading({ showParagraph = true, heading, headline }: MyComponentProps) {
  return (
    <>
      {/* Heading Container */}
      <div className="border-solid text-white border-2 w-3/4 md:w-56 mx-auto bg-slate-700 rounded-lg border-sky-500">
        <div className="heading text-center m-3 text-lg md:text-xl">{heading}</div>
      </div>

      {/* Optional Paragraph */}
      {showParagraph && (
        <p className="text-center text-white mt-6 md:mt-10 text-sm md:text-base px-4 md:px-0">
          {headline}
        </p>
      )}
    </>
  );
}

export default Heading;

