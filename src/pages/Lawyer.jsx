import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import React from "react";

const Lawyer = ({ data }) => {
  const { image, name, experience, licenseNo, speciality } = data;
  return (
    <div>
      <div className="flex items-center gap-6 h-full border border-gray-300 shadow-xl rounded-xl p-3">
        <div>
          <img src={image} className="w-30 rounded-lg" alt="" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-col text-center lg:flex-row gap-4">
            <p className="text-green-800 bg-green-100 rounded-2xl px-2 py-1">Available</p>
            <p className="text-blue-800 bg-blue-100 rounded-2xl px-2 py-1">{experience}+ Years Experience</p>
          </div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-600 font-medium"><FontAwesomeIcon icon={faRegistered} className="mr-1" />{speciality}</p>
          <p className="text-gray-600 font-medium">{licenseNo}</p>
          <button className='btn btn-outline btn-primary w-full rounded-full cursor-pointer'>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
