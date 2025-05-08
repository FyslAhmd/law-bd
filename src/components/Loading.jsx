import React from "react";

const Loading = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    </div>
  );
};

export default Loading;
