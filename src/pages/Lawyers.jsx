import React from "react";
import Lawyer from "./Lawyer";

const Lawyers = ({ data }) => {
  // console.log(data);
  return (
    <div className="my-20">
      <h1 className="text-3xl text-center font-bold">Our Best Lawyers</h1>
      <p className="text-gray-600 font-medium text-center my-5">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <Lawyer key={index} data={item}></Lawyer>
        ))}
      </div>
      <div className="text-center">
        <button className="btn text-white text-base rounded-full border-none bg-green-600 hover:bg-green-500 mt-4">
          Show All Lawyer
        </button>
      </div>
    </div>
  );
};

export default Lawyers;
