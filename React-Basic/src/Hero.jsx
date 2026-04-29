import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Dream <span className="text-blue-500">Career</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Create ATS-friendly resumes, track jobs, and get AI-powered insights 
            to land your dream job faster.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
              Get Started
            </button>
            <button className="border border-gray-400 hover:bg-gray-800 px-6 py-3 rounded-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://via.placeholder.com/500"
            alt="Hero"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;