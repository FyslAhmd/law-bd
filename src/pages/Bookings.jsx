import React, { useState } from "react";
import {
  getAppointmentList,
  removeFromAppointmentList,
} from "../utilities/localStorage";
import BookingCard from "../components/BookingCard";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";
// import BookingChart from "../components/BookingChart";

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
    toast.error("Appointment Cancelled");
  };
  return (
    <div className="my-20">
      {/* <BookingChart
        bookingData={bookingData}
        jsonData={jsonData}
      ></BookingChart> */}
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
            cancelAppointment={handleCancelAppointment}
          ></BookingCard>
        ))}
      </div>
      {bookingData.length === 0 && (
        <div className="text-center space-y-4 p-8 border border-gray-300 rounded-xl my-10 w-fit mx-auto">
          <h1 className="text-2xl font-bold">No Appointment Yet</h1>
          <Link to="/" className="btn btn-outline btn-primary">
            Book an Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default Bookings;
