import React, { useState } from "react";
import Zones from "./pages/ZonesPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import AllWorkStations from "./pages/AllWorkStations";
import Zone from "./pages/Zone";
import FloorMap from "./FloorMap";
import Floor2 from "./pages/Floor2";
import Floor3 from "./pages/Floor3";
import Show from "./pages/Show";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Access the DOM element with the "app" ID
const appElement = document.getElementById('app');

// Get "current user"
const user_details = appElement.getAttribute('data-auth');

// convert from JSON to object
export const current_user = JSON.parse(user_details)

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <h2>There was an error...</h2>,
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
          path: "edit/:zone/:id",
          element: <Show current_user={current_user}/>,
        },
        {
          path: "all-workstations",
          element: <AllWorkStations />,
        },
        {
          path: "zones/:zone_name",
          element: <Zone />,
        },
        {
          path: "floor_map",
          element: <FloorMap />,
          children: [
            {
              index: true,
              element: <Floor2 />,
            },
            {
              path: "floor_3",
              element: <Floor3 />,
            },
            {
              path: "floor_2",
              element: <Floor2 />,
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
