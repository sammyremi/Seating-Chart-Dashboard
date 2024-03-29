import React, { useEffect, useState } from "react";
import Desk from "../../Desk";
import { Link } from "react-router-dom";

const L_ZoneChart = ({ data }) => {
  return (
    <div>
      <div className="ZoneL border-2 m-2 border-slate-400 rounded p-2 w-[400px] mx-auto my-2 grid grid-cols-6 grid-rows-11 gap-x-2.5 gap-y-1 text-center">
        <div className="zonek rounded-sm grid place-items-center bg-[#e9f9fd] col-start-1 col-end-2 row-start-1 row-end-12">
          {/* Zone K */}
          <Link to={"/zones/zone_ks"}>
            <div>
              <p>Zone K</p>
              <svg
                fill="#000000"
                className="w-7 h-7 text-slate-500"
                viewBox="0 0 24 24"
                id="left-arrow"
                xmlns="http://www.w3.org/2000/svg"
                // className="icon line"
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
        {/* Desk_id: #9-14 */}
        <div className="ocpd1 col-start-2 col-end-4 row-start-1 row-end-3 flex flex-col place-content-center">
          {/* occupied1 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data} desk_id="L0011" style="-scale-x-100" />
            <Desk data={data} desk_id="L0010" style="-scale-x-100" />
            <Desk data={data} desk_id="L0009" style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data} desk_id="L0012"/>
            <Desk data={data} desk_id="L0013"/>
            <Desk data={data} desk_id="L0014"/>
          </div>
        </div>
        {/* Desk_id: #1-8 */}
        <div className="ocpd2 col-start-6 col-end-7 row-start-3 row-end-12 mt-4 flex flex-col place-items-end">
          {/* occupied2 */}
          <div className="rotate-90">
            <Desk data={data} desk_id="L0008"/>
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="L0007"/>
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="L0006"/>
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="L0005"/>
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="L0004"/>
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="L0003"/>
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="L0002"/>
          </div>
          <div className="rotate-90">
            <Desk data={data} desk_id="L0001"/>
          </div>
        </div>
        {/* Desk_id: #15-22 */}
        <div className="occupied3 col-start-2 col-end-4 row-start-4 row-end-6 flex flex-col place-content-center">
          {/* occupied3 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data} desk_id="L0018" style="-scale-x-100" />
            <Desk data={data} desk_id="L0017" style="-scale-x-100" />
            <Desk data={data} desk_id="L0016" style="-scale-x-100" />
            <Desk data={data} desk_id="L0015" style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data} desk_id="L0019"/>
            <Desk data={data} desk_id="L0020"/>
            <Desk data={data} desk_id="L0021"/>
            <Desk data={data} desk_id="L0022"/>
          </div>
        </div>
        {/* Desk_id: #23-30 */}
        <div className="occupied4 col-start-2 col-end-4 row-start-7 row-end-9 flex flex-col place-content-center">
          {/* occupied4 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data} desk_id="L0026" style="-scale-x-100" />
            <Desk data={data} desk_id="L0025" style="-scale-x-100" />
            <Desk data={data} desk_id="L0024" style="-scale-x-100" />
            <Desk data={data} desk_id="L0023" style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data} desk_id="L0027" />
            <Desk data={data} desk_id="L0028" />
            <Desk data={data} desk_id="L0029" />
            <Desk data={data} desk_id="L0030" />
          </div>
        </div>
        {/* Desk_id: #31-38 */}
        <div className="occupied4 col-start-2 col-end-4 row-start-10 row-end-12 flex flex-col place-content-center">
          {/* occupied4 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data} desk_id="L0034" style="-scale-x-100" />
            <Desk data={data} desk_id="L0033" style="-scale-x-100" />
            <Desk data={data} desk_id="L0032" style="-scale-x-100" />
            <Desk data={data} desk_id="L0031" style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data} desk_id="L0035" />
            <Desk data={data} desk_id="L0036" />
            <Desk data={data} desk_id="L0037" />
            <Desk data={data} desk_id="L0038" />
          </div>
        </div>
        <div className="restroom rounded-sm grid place-content-center p-2 text-sm bg-gray-300 col-start-5 col-end-7 row-start-1 row-end-2">
          <p>Restroom</p>
        </div>
        <div className="Door flex self-end mb-[-10px] col-start-5 col-end-6 row-start-11 row-end-12">
          {/* door */}
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

export default L_ZoneChart;
