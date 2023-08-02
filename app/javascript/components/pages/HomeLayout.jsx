import { Outlet } from "react-router-dom";
import React from "react";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";

const HomeLayout = () => {
  // passing global values to Outlet via RRD
  const value = "Ever forward";
  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: "calc(100vh - 4rem)" }}
        className="flex flex-row h-auto"
      >
        <div className="basis-1/6 h-auto">
          <Sidenav />
        </div>
        <div className="basis-5/6 bg-lime-200 h-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default HomeLayout;
