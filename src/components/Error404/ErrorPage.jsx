import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import Navbar from "../Navbar";

const ErrorPage = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="text-center bg-white shadow-lg p-10 rounded-2xl max-w-lg w-full">
          <div className="text-red-500 text-6xl mb-4 flex justify-center">
            <FaExclamationTriangle />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or an unexpected error has
            occurred.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
