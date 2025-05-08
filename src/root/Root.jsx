import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Root;
