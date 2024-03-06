import React, { useEffect, useState } from "react";
import Desk from "../../Desk";
import { Link } from "react-router-dom";

const J_ZoneChart = ({ data }) => {
  return (
    <div className="border-2 m-2 border-slate-400 rounded w-[376px] my-2 mx-auto">
      <div className="ZoneJ p-2.5 grid grid-cols-6 grid-rows-7 gap-2">
        <div className="zoneR grid rounded-sm place-items-center bg-[#e9f9fd] col-start-1 col-end-3 row-start-1 row-end-8">
          <Link to={"/zones/zone_rs"}>
            <div>
              <p>Zone R</p>
              <svg
                fill="#000000"
                // className="w-7 h-7 text-slate-500"
                viewBox="0 0 24 24"
                id="left-arrow"
                xmlns="http://www.w3.org/2000/svg"
                className="icon line"
              >
                <path
                  id="primary"
                  d="M21,12H3M6,9,3,12l3,3"
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                  }}
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        {/* Desk_id: #15-19 */}
        <div className="ocp1 col-start-3 col-end-7 row-start-1 row-end-2 flex flex-row items-center place-content-end">
          <Desk data={data} desk_id="J0015"/>
          <Desk data={data} desk_id="J0016"/>
          <Desk data={data} desk_id="J0017"/>
          <Desk data={data} desk_id="J0018"/>
          <Desk data={data} desk_id="J0019"/>
        </div>
        {/* Desk_id: #5-14 */}
        <div className="ocp2 col-start-3 col-end-7 row-start-3 row-end-5 flex flex-col">
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data} style="-scale-x-100" desk_id="J0014"/>
            <Desk data={data} style="-scale-x-100" desk_id="J0013"/>
            <Desk data={data} style="-scale-x-100" desk_id="J0012"/>
            <Desk data={data} style="-scale-x-100" desk_id="J0011"/>
            <Desk data={data} style="-scale-x-100" desk_id="J0010"/>
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data} desk_id="J0005"/>
            <Desk data={data} desk_id="J0006"/>
            <Desk data={data} desk_id="J0007"/>
            <Desk data={data} desk_id="J0008"/>
            <Desk data={data} desk_id="J0009"/>
          </div>
        </div>
        {/* Desk_id: #1-4 */}
        <div className="ocp3 col-start-3 col-end-7 row-start-6 row-end-8 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data} style="-scale-x-100" desk_id="J0004"/>
            <Desk data={data} style="-scale-x-100" desk_id="J0003"/>
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data} desk_id="J0001"/>
            <Desk data={data} desk_id="J0002"/>
          </div>
        </div>
        <div className="Door flex self-end mb-[-10px] justify-self-center col-start-4 col-end-5 row-start-7 row-end-8">
          <svg
            className="w-7 h-7 text-slate-500"
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>door</title>
            <path d="M30 28.75h-2.779v-26.75c-0-0.69-0.56-1.25-1.25-1.25h-19.971c-0.69 0-1.25 0.56-1.25 1.25v0 26.75h-2.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM7.25 28.75v-25.5h17.471v25.5zM21.48 14.84c-0.138-0.057-0.299-0.089-0.467-0.089-0.349 0-0.665 0.141-0.894 0.37l0-0c-0.232 0.222-0.377 0.534-0.379 0.88v0c0.004 0.174 0.041 0.338 0.103 0.489l-0.003-0.009c0.066 0.157 0.161 0.291 0.279 0.4l0.001 0.001c0.219 0.234 0.529 0.38 0.874 0.38 0.002 0 0.005 0 0.007-0h-0c0.174-0.005 0.339-0.041 0.489-0.104l-0.009 0.003c0.3-0.143 0.537-0.379 0.676-0.671l0.004-0.009c0.058-0.142 0.094-0.306 0.1-0.477l0-0.002c-0.002-0.346-0.148-0.658-0.38-0.879l-0-0c-0.109-0.119-0.241-0.214-0.391-0.278l-0.007-0.003z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default J_ZoneChart;
