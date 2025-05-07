import React from "react";
import heroBG from "../assets/banner-img-1.png";

const Hero = () => {
  return (
    <div
      className="hero my-5 rounded-xl"
      style={{
        backgroundImage: `url(${heroBG})`,
      }}
    >
      <div className="hero-overlay rounded-xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4/6 my-25">
          <h1 className="mb-5 text-3xl font-bold">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="mb-5">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
