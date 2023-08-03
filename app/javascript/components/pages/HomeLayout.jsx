import { Outlet } from "react-router-dom";
import React from "react";
import Sidenav from "../Sidenav";
import Navbar from "../Navbar";
import background from "../../images/background.png";

const HomeLayout = () => {
  // passing global values to Outlet via RRD
  const value = "Ever forward";

  return (
    <div>
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 4rem)",
          backgroundImage: `url(${background})`,
        }}
        className="flex flex-row h-auto bg-no-repeat bg-cover bg-fixed"
      >
        <div className="basis-1/6 h-auto border-r-2">
          <Sidenav />
        </div>
        <div className="basis-5/6 min-h-screen pt-20 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default HomeLayout;
