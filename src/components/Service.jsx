import React from "react";
import img1 from "../assets/success-doctor.png";
import img2 from "../assets/success-review.png";
import img3 from "../assets/success-patients.png";
import img4 from "../assets/success-staffs.png";
import CountUp from "react-countup";

const Service = () => {
  return (
    <div className="my-20">
      <h1 className="text-3xl text-center font-bold">
        We Provide Best Law Services
      </h1>
      <p className="text-gray-600 font-medium text-center my-5">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.{" "}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        <div>
          <div className="flex flex-col items-center gap-2 bg-gray-200 p-4 rounded-xl">
            <img src={img1} alt="" />
            <h1 className="text-2xl font-bold">
              <CountUp start={1} end={199} duration={5} enableScrollSpy />+
            </h1>
            <p className="text-gray-600">Total Lawyer</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 bg-gray-200 p-4 rounded-xl">
            <img src={img2} alt="" />
            <h1 className="text-2xl font-bold">
              <CountUp start={1} end={667} duration={5} enableScrollSpy />+
            </h1>
            <p className="text-gray-600">Total Reviews</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 bg-gray-200 p-4 rounded-xl">
            <img src={img3} alt="" />
            <h1 className="text-2xl font-bold">
              <CountUp start={1} end={1900} duration={5} enableScrollSpy />+
            </h1>
            <p className="text-gray-600">Cases Initiated</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 bg-gray-200 p-4 rounded-xl">
            <img src={img4} alt="" />
            <h1 className="text-2xl font-bold">
              <CountUp start={1} end={300} duration={5} enableScrollSpy />+
            </h1>
            <p className="text-gray-600">Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
