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
    </>
  );
};

export default App;
