import React, { useState } from "react";
import {
  getAppointmentList,
  removeFromAppointmentList,
} from "../utilities/localStorage";
import BookingCard from "../components/BookingCard";
import { useLoaderData } from "react-router";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const localStorageData = getAppointmentList();
  const jsonData = useLoaderData();
  useState(() => {
    setBookingData(localStorageData);
  }, []);

  const handleCancelAppointment = (id) => {
    removeFromAppointmentList(id);
    setBookingData(getAppointmentList());
  };
  return (
    <div className="my-20">
      <h1 className="text-3xl text-center font-bold">My Today Appointments</h1>
      <p className="text-gray-600 font-medium text-center my-5">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.{" "}
      </p>
      <div>
        {bookingData.map((dataId) => (
          <BookingCard
            key={dataId}
            jsonData={jsonData}
            data={dataId}
            cancelAppointment = {handleCancelAppointment}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
