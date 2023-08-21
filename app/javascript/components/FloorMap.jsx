import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const FloorMap = () => {
  const [active, setActive] = useState("floor 2");
  return (
    <div>
      <div className="relative left-[15px] top-[-16px]">
        <Link to={"/floor_map/floor_2"}>
          <button
            type="button"
            class={`py-1 drop-shadow-md rounded-b-2xl px-3 mb-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
              active === "floor 2" ? "bg-sky-200 ring-2 ring-sky-200" : ""
            }`}
            onClick={() => setActive("floor 2")}
          >
            Floor 2
          </button>
        </Link>
        <Link to={"/floor_map/floor_3"}>
          <button
            type="button"
            class={`py-1 drop-shadow-md rounded-b-2xl px-3 mb-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
              active === "floor 3" ? "bg-sky-200 ring-2 ring-sky-200" : ""
            }`}
            onClick={() => setActive("floor 3")}
          >
            Floor 3
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default FloorMap;
