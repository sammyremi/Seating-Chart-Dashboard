import React, { useState } from "react";
import Zones from "./pages/ZonesPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import AllWorkStations from "./pages/AllWorkStations";
import Zone from "./Zone";
import FloorMap from "./FloorMap";
import Floor2 from "./pages/Floor2";
import Floor3 from "./pages/Floor3";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import Error from "./pages/Error";
import Show from "./pages/Show";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reload on window resize
let prevWidth = window.innerWidth;
let prevHeight = window.innerHeight;

window.onresize = function (event) {
  if (window.innerWidth < prevWidth || window.innerHeight < prevHeight) {
    location.reload();
  }
  prevWidth = window.innerWidth;
  prevHeight = window.innerHeight;
};

const App = () => {
  const [active, setActive] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "zones",
          element: <Zones />,
        },
        {
          path: "sign_out",
          element: <Signout />,
        },
        {
          path: "edit/:zone/:id",
          element: <Show />,
        },
        {
          path: "/workstations/:floor",
          element: <AllWorkStations />,
        },
        {
          path: "zones/:zone_name",
          element: <Zone />,
        },
        {
          path: "floor_map",
          element: <FloorMap fl_active={[active, setActive]} />,
          children: [
            {
              index: true,
              element: <Floor2 val={"2"} fl_active={[active, setActive]} />,
            },
            {
              path: "floor_3",
              element: <Floor3 val={"3"} fl_active={[active, setActive]} />,
            },
            {
              path: "floor_2",
              element: <Floor2 val={"2"} fl_active={[active, setActive]} />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
