import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { addToAppointmentList } from "../utilities/localStorage";
import { toast } from "react-toastify";

const LawyerDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const lawyer = data.find((item) => item.id.toString() === id);
  const navigate = useNavigate();

  if (!lawyer) {
    return (
      <div className="text-center bg-gray-100 my-20 space-y-4 border border-gray-300 p-10 rounded-xl">
        <h1 className="text-3xl font-bold text-red-600">
          404 - Lawyer Not Found
        </h1>
        <p className="text-gray-600">
          The lawyer you are looking for does not exist or the ID is incorrect.
        </p>
        <Link to="/" className="btn btn-outline btn-primary">
          Go Back Home
        </Link>
      </div>
    );
  }

  const { image, name, experience, licenseNo, speciality, fee, available } =
    lawyer;

  const handleBooking = () => {
    const databaseRes = addToAppointmentList(lawyer.id);
    if (databaseRes) {
      toast.success(`Appointment booked with ${name}`);
      navigate("/bookings");
    } else {
      toast.error(`Already Appointment booked`);
    }
  };

  return (
    <div className="my-10">
      <div className="bg-gray-100 p-6 md:p-12 rounded-xl">
        <h1 className="text-xl md:text-3xl text-center font-bold">
          Lawyer’s Profile Details
        </h1>
        <p className="text-gray-600 font-medium text-center my-5 text-xs md:text-base">
          Get to know your legal expert closely — from qualifications to
          experience and specialization. Trust builds with transparency, and
          here you’ll find all the essential details about your chosen lawyer.{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center p-6 my-5 border rounded-xl border-gray-300">
        <div>
          <img src={image} className="w-40 rounded-xl" alt="" />
        </div>
        <div className="space-y-2">
          <p className="text-blue-800 bg-blue-100 text-center rounded-3xl px-4 py-2 w-fit">
            {experience}+ Years Experience
          </p>
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex gap-3">
            <p className="text-gray-600 font-medium">{speciality}</p>
            <p className="text-gray-600 font-medium">
              <FontAwesomeIcon icon={faRegistered} className="mr-1" />
              {licenseNo}
            </p>
          </div>
          <div className="text-gray-600 font-medium">
            Availability :
            <div className="flex flex-col md:flex-row gap-2">
              {available.map((day, index) => (
                <span
                  key={index}
                  className="text-yellow-600 bg-yellow-100 font-normal text-center rounded-2xl px-2 py-1 mx-2"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 font-medium">
            Consultation Fee:{" "}
            <span className="text-green-600 font-semibold">{fee} Taka</span>
          </p>
        </div>
      </div>

      <div className="my-5 p-6 border border-gray-300 rounded-xl space-y-2">
        <h1 className="text-xl text-center font-bold">Book an Appointment</h1>
        <hr className="text-gray-400 border-dashed" />
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Availability</h2>
          <p className="text-green-800 bg-green-100 rounded-3xl px-3 py-2">
            Lawyer Available Today
          </p>
        </div>
        <hr className="text-gray-400" />
        <div className="">
          <p className="text-xs my-3 max-h-fit text-yellow-600 bg-yellow-100 rounded-xl p-1">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
          <button
            onClick={handleBooking}
            className="btn text-white text-base w-full rounded-full border-none bg-green-600 hover:bg-green-500"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
