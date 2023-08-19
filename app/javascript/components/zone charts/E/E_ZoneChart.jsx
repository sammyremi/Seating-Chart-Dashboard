import React from "react";
import Desk from "../../Desk";

const E_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="zoneE p-2.5 grid grid-cols-12 grid-rows-11 gap-2.5 text-center">
        <div className="restroom1 bg-lime-500 col-start-1 col-end-3 row-start-1 row-end-2">
          restroom 1
        </div>
        <div class="occupied1 bg-cyan-300 col-start-3 col-end-4 row-start-1 row-end-2 flex place-content-center">
          <Desk data={data[0]} />
        </div>
        <div class="occupied2 bg-cyan-300 col-start-2 col-end-5 row-start-3 row-end-4 flex flex-row -scale-y-100 place-content-start">
          <Desk data={data[0]} />
          <Desk data={data[1]} />
          <Desk data={data[1]} />
        </div>
        <div className="restroom2 bg-lime-500 col-start-5 col-end-7 row-start-1 row-end-4">
          restroom 2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-2 col-end-7 row-start-4 row-end-5 flex flex-row place-content-start">
          <Desk data={data[0]} />
          <Desk data={data[1]} />
          <Desk data={data[0]} />
          <Desk data={data[1]} />
          <Desk data={data[1]} />
        </div>
        <div class="occupied4 bg-cyan-300 col-start-13 col-end-16 row-start-3 row-end-5 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data[3]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
            <Desk data={data[3]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data[0]} />
            <Desk data={data[1]} />
            <Desk data={data[0]} />
          </div>
        </div>
        <div class="ocpd6 bg-cyan-300 col-start-2 col-end-7 row-start-6 row-end-8 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[3]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
            <Desk data={data[3]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[0]} />
            <Desk data={data[1]} />
            <Desk data={data[0]} />
            <Desk data={data[1]} />
            <Desk data={data[1]} />
          </div>
        </div>
        <div class="ocpd8 bg-cyan-300 col-start-11 col-end-16 row-start-6 row-end-8 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data[3]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
            <Desk data={data[3]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data[2]} />
            <Desk data={data[2]} />
            <Desk data={data[2]} />
            <Desk data={data[2]} />
            <Desk data={data[2]} />
          </div>
        </div>
        <div class="server bg-gray-300 col-start-1 col-end-5 row-start-9 row-end-10">
          server
        </div>
        <div class="occupied9 bg-cyan-300 col-start-5 col-end-7 row-start-9 row-end-11 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[3]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[2]} />
            <Desk data={data[2]} />
          </div>
        </div>
        <div class="occupied11 bg-cyan-300 col-start-11 col-end-16 row-start-9 row-end-10 flex flex-row place-content-end">
          <Desk data={data[0]} />
          <Desk data={data[1]} />
          <Desk data={data[0]} />
          <Desk data={data[1]} />
          <Desk data={data[1]} />
        </div>
        <div class="ZoneI place-items-center bg-orange-300 col-start-1 col-end-5 row-start-10 row-end-12">
          Zone I
        </div>
        <div class="door bg-pink-300 col-start-8 col-end-9 row-start-11 row-end-12">
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
