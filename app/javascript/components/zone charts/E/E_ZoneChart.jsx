import React from "react";
import Desk from "../../Desk";
import { Link } from "react-router-dom";

const E_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="zoneE p-2.5 border-2 border-slate-400 rounded grid grid-cols-9 grid-rows-10 gap-2.5 my-2 mx-auto w-[650px] text-center">
        {/* Desk_id: #44 */}
        <div class="ocpd1 col-start-3 col-end-4 row-start-1 row-end-2 flex place-content-center">
          <Desk data={data[43]} />
        </div>
        {/* Desk_id: #33-40 */}
        <div class="ocpd2 col-start-2 col-end-6 row-start-3 row-end-5 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[37]} style="-scale-x-100" />
            <Desk data={data[38]} style="-scale-x-100" />
            <Desk data={data[39]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[36]} />
            <Desk data={data[35]} />
            <Desk data={data[34]} />
            <Desk data={data[33]} />
            <Desk data={data[32]} />
          </div>
        </div>
        {/* Desk_id: #30-32, #41-43 */}
        <div class="ocpd4 col-start-9 col-end-10 row-start-3 row-end-5 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data[40]} style="-scale-x-100" />
            <Desk data={data[41]} style="-scale-x-100" />
            <Desk data={data[42]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data[31]} />
            <Desk data={data[30]} />
            <Desk data={data[29]} />
          </div>
        </div>
        {/* Desk_id: #15-24 */}
        <div class="ocpd6 col-start-2 col-end-7 row-start-6 row-end-8 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[19]} style="-scale-x-100" />
            <Desk data={data[20]} style="-scale-x-100" />
            <Desk data={data[21]} style="-scale-x-100" />
            <Desk data={data[22]} style="-scale-x-100" />
            <Desk data={data[23]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[18]} />
            <Desk data={data[17]} />
            <Desk data={data[16]} />
            <Desk data={data[15]} />
            <Desk data={data[14]} />
          </div>
        </div>
        {/* Desk_id: #10-14, #25-29  */}
        <div class="ocpd8 col-start-8 col-end-10 row-start-6 row-end-8 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data[24]} style="-scale-x-100" />
            <Desk data={data[25]} style="-scale-x-100" />
            <Desk data={data[26]} style="-scale-x-100" />
            <Desk data={data[27]} style="-scale-x-100" />
            <Desk data={data[28]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data[13]} />
            <Desk data={data[12]} />
            <Desk data={data[11]} />
            <Desk data={data[10]} />
            <Desk data={data[9]} />
          </div>
        </div>
        {/* Desk_id: #1-4 */}
        <div class="ocpd9 col-start-4 col-end-6 row-start-9 row-end-11 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[2]} style="-scale-x-100" />
            <Desk data={data[3]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[1]} />
            <Desk data={data[0]} />
          </div>
        </div>
        {/* Desk_id: #5-9 */}
        <div class="ocpd11 col-start-8 col-end-10 row-start-9 row-end-10 flex flex-row -scale-y-100 place-content-end">
          <Desk data={data[4]} style="-scale-x-100" />
          <Desk data={data[5]} style="-scale-x-100" />
          <Desk data={data[6]} style="-scale-x-100" />
          <Desk data={data[7]} style="-scale-x-100" />
          <Desk data={data[8]} style="-scale-x-100" />
        </div>
        <div className="restroom1 grid place-content-center rounded-sm bg-lime-300 col-start-1 col-end-3 row-start-1 row-end-2">
          Restroom 1
        </div>
        <div className="restroom2 grid place-content-center ml-[-7px] mb-[-2px] rounded-sm bg-lime-300 col-start-4 col-end-6 row-start-1 row-end-4">
          Restroom 2
        </div>
        <div class="server grid place-content-center rounded-sm bg-gray-300 col-start-2 col-end-4 row-start-9 row-end-11">
          Server
        </div>
        <div class="ZoneD rounded-sm grid place-items-center bg-[#e9f9fd] col-start-1 col-end-2 row-start-2 row-end-11 flex flex-row justify-center">
          <Link to={"/zones/zone_ds"}>
            <div>
              <p>Zone D</p>
              <svg
                fill="#000000"
                className="w-7 h-7 text-slate-500"
                viewBox="0 0 24 24"
                id="left-arrow"
                xmlns="http://www.w3.org/2000/svg"
                class="icon line"
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
        <div class="Door flex self-end mb-[-10px] col-start-6 col-end-7 row-start-10 row-end-11">
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

export default E_ZoneChart;
