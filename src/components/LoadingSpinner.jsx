import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LoadingSpinner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoadingSpinner;
