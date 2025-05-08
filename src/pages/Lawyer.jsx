import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import React from "react";
import { Link } from 'react-router';

const Lawyer = ({ data }) => {
  const { id, image, name, experience, licenseNo, speciality } = data;
  return (
    <div>
      <div className="flex items-center gap-6 h-full border border-gray-300 shadow-xl rounded-xl p-3">
        <div>
          <img src={image} className="w-25 md:w-30 rounded-lg" alt="" />
        </div>
        <div className="md:space-y-1 flex-1">
          <div className="flex flex-col text-center lg:flex-row gap-4">
            <p className="text-green-800 bg-green-100 rounded-2xl px-2 py-1">Available</p>
            <p className="text-blue-800 bg-blue-100 rounded-2xl px-2 py-1">{experience}+ Years Experience</p>
          </div>
          <h1 className="text-lg md:text-xl font-bold">{name}</h1>
          <p className="text-gray-600 font-medium">{speciality}</p>
          <p className="text-gray-600 font-medium"><FontAwesomeIcon icon={faRegistered} className="mr-1" /> License No: {licenseNo}</p>
          <Link className='btn btn-outline btn-primary w-full rounded-full cursor-pointer' to={`/details/${id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
