import React from 'react';

// Define the props type
type MyComponentProps = {
  showParagraph?: boolean; // Optional prop, defaults to true
  heading?:string
  headline?:string
};

function Heading({ showParagraph = true , heading , headline}: MyComponentProps) {
  return (
    <>
      <div className="border-solid text-white border-2 w-56 mx-auto bg-slate-700 rounded-lg border-sky-500">
        <div className="heading text-center m-3 ">{heading}</div>
      </div>
      {showParagraph && (
        <p className="text-center text-white mt-10">
          {headline}
        </p>
      )}
    </>
  );
}

export default Heading;
