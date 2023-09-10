import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "./Context";

const FloorMap = ({ fl_active }) => {
  const { setActiveSideNav } = useGlobalContext();
  const active_floor = fl_active[0];
  const setActiveFloor = fl_active[1];

  useEffect(() => {
    setActiveSideNav("floor");
  }, []);
  return (
    <div>
      <div className="relative lg:left-[15px] lg:top-[-16px] left-32 -top-4">
        <Link to={"/floor_map/floor_2"}>
          <button
            type="button"
            class={`py-1 drop-shadow-md rounded-b-2xl px-3 mb-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
              active_floor === "floor 2" ? "bg-sky-200 ring-2 ring-sky-200" : ""
            }`}
            onClick={() => setActiveFloor("floor 2")}
          >
            Floor 2
          </button>
        </Link>
        <Link to={"/floor_map/floor_3"}>
          <button
            type="button"
            class={`py-1 drop-shadow-md rounded-b-2xl px-3 mb-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
              active_floor === "floor 3" ? "bg-sky-200 ring-2 ring-sky-200" : ""
            }`}
            onClick={() => setActiveFloor("floor 3")}
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
