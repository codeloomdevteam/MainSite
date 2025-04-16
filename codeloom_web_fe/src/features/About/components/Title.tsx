import React from "react";

type Props = {};

const Title = (props: Props) => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-5xl">
            <h1 className="md:text-7xl text-3xl font-bold">
              Why Choose Code Loom?
            </h1>
            <p className="py-6 md:text-lg text-xs">
              Your success is our benchmark. We combine technical expertise with
              deep collaboration to build solutions that drive real business
              results.
            </p>
          </div>
        </div>
      </div>
      <div className="hero mt-10 mb-20">
        <div className="md:w-1/3 w-2/3 pr-4">
          <img alt="CODELOOM" src="/codeloom_full_logo.svg" />
        </div>
      </div>
    </div>
  );
};

export default Title;
