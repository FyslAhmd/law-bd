// DoctorChart.jsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#007bff",
  "#f5b301",
  "#007bff",
  "#00b894",
  "#f5b301",
  "#ff6f00",
];

const BookingChart = ({ bookingData, jsonData }) => {
  // Filter jsonData to get info of only booked doctors
  const chartData = (jsonData || [])
    .filter((item) => bookingData.includes(item.id))
    .map((item, index) => ({
      name: item.name,
      value: item.fee,
      color: colors[index % colors.length],
    }));

  return (
    <div className="my-10 p-4 rounded-xl border shadow">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {chartData.map((entry, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey="value"
              data={[entry]}
              fill={entry.color}
              stroke={entry.color}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingChart;
