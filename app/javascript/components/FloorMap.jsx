import React from "react";
import { Outlet, Link } from "react-router-dom";

const FloorMap = () => {
  return (
    <div>
      <div className="relative left-[15px] top-[-16px]">
        <Link to={"/floor_map/floor_2"}>
          <button
            type="button"
            class="py-1 drop-shadow-md rounded-b-2xl px-3 mb-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-sky-200 focus:bg-sky-200"
          >
            Floor 2
          </button>
        </Link>
        <Link to={"/floor_map/floor_3"}>
          <button
            type="button"
            class="py-1 drop-shadow-md rounded-b-2xl px-3 mb-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-sky-200 focus:bg-sky-200"
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
