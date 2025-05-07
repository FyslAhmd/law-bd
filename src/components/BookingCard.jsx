import React from "react";

const BookingCard = ({ data, jsonData, cancelAppointment }) => {
  const lawyer = jsonData.find((item) => item.id == data);
  const { name, speciality, fee } = lawyer;
  return (
    <div className="p-4 my-4 rounded-xl border border-gray-300">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p className="text-gray-600 font-medium">{speciality}</p>
        </div>
        <p className="text-gray-600 font-medium">
          Appointment Fee : {fee} Taka
        </p>
      </div>
      <button
        onClick={() => cancelAppointment(lawyer.id)}
        className="btn btn-outline btn-error my-2 w-full rounded-full cursor-pointer"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default BookingCard;
