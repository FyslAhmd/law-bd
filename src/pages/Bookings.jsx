// import React, { useState } from "react";
// import {
//   getAppointmentList,
//   removeFromAppointmentList,
// } from "../utilities/localStorage";
// import BookingCard from "../components/BookingCard";
// import { Link, useLoaderData } from "react-router";
// import { toast } from "react-toastify";

// const Bookings = () => {
//   const [bookingData, setBookingData] = useState([]);
//   const localStorageData = getAppointmentList();
//   const jsonData = useLoaderData();
//   useState(() => {
//     setBookingData(localStorageData);
//   }, []);

//   const handleCancelAppointment = (id) => {
//     removeFromAppointmentList(id);
//     setBookingData(getAppointmentList());
//     toast.error("Appointment Cancelled");
//   };
//   return (
//     <div className="my-20">
//       <h1 className="text-3xl text-center font-bold">My Today Appointments</h1>
//       <p className="text-gray-600 font-medium text-center my-5">
//         Our platform connects you with verified, experienced Lawyers across
//         various specialties — all at your convenience.{" "}
//       </p>
//       <div>
//         {bookingData.map((dataId) => (
//           <BookingCard
//             key={dataId}
//             jsonData={jsonData}
//             data={dataId}
//             cancelAppointment={handleCancelAppointment}
//           ></BookingCard>
//         ))}
//       </div>
//       {bookingData.length === 0 && (
//         <div className="text-center space-y-4 p-8 border border-gray-300 rounded-xl my-10 w-fit mx-auto">
//           <h1 className="text-2xl font-bold">No Appointment Yet</h1>
//           <Link to="/" className="btn btn-outline btn-primary">
//             Book an Appointment
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookings;

import React, { useState, useEffect } from "react";
import {
  getAppointmentList,
  removeFromAppointmentList,
} from "../utilities/localStorage";
import BookingCard from "../components/BookingCard";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const TriangleBar = ({ fill, x, y, width, height }) => {
  const path = `
    M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  },${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  },${y + height}
    Z`;
  return <path d={path} fill={fill} stroke="none" />;
};

const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const jsonData = useLoaderData();

  useEffect(() => {
    setBookingData(getAppointmentList());
  }, []);

  const handleCancelAppointment = (id) => {
    removeFromAppointmentList(id);
    setBookingData(getAppointmentList());
    toast.error("Appointment Cancelled");
  };

  const chartData = bookingData
    .map((id) => jsonData.find((lawyer) => lawyer.id === id))
    .filter(Boolean)
    .map((lawyer) => ({
      name: lawyer.name,
      fee: lawyer.fee,
      fill: getRandomColor(),
    }));

  return (
    <div className="my-20">
      <h1 className="text-3xl text-center font-bold">My Today Appointments</h1>
      <p className="text-gray-600 font-medium text-center my-5">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>

      {/* Chart */}
      {chartData.length > 0 && (
        <div className="my-10">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Booking Fee Chart
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="fee"
                shape={(props) => (
                  <TriangleBar {...props} fill={chartData[props.index].fill} />
                )}
              >
                <LabelList dataKey="fee" position="top" fill="#000" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Appointment Cards */}
      <div>
        {bookingData.map((dataId) => (
          <BookingCard
            key={dataId}
            jsonData={jsonData}
            data={dataId}
            cancelAppointment={handleCancelAppointment}
          />
        ))}
      </div>

      {/* No Appointments */}
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
