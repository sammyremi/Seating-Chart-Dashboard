import React from "react";
import Desk from "../../Desk";

const Q_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="ZoneQ p-2.5 grid grid-cols-22 grid-rows-12 gap-2 text-center">
        <div class="restroom1 bg-lime-500 col-start-1 col-end-3 row-start-1 row-end-2">
          restroom1
        </div>
        <div class="ocpd1 bg-cyan-300 col-start-5 col-end-18 row-start-1 row-end-2 flex justify-center">
          {/* ocpd1 */}
          <Desk data={data[62]} />
          <Desk data={data[61]} />
          <Desk data={data[60]} />
          <Desk data={data[59]} />
          <Desk data={data[58]} />
          <Desk data={data[57]} />
          <Desk data={data[56]} />
          <Desk data={data[55]} />
          <Desk data={data[54]} />
          <Desk data={data[53]} />
          <Desk data={data[52]} />
        </div>
        <div class="restroom2 bg-lime-500 col-start-20 col-end-24 row-start-1 row-end-2">
          restroom2
        </div>
        <div class="occupied2 bg-cyan-300 col-start-3 col-end-7 row-start-3 row-end-5 flex flex-col place-content-center">
          {/* ocpd2 */}
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[18]} style="-scale-x-100" />
            <Desk data={data[18]} style="-scale-x-100" />
            <Desk data={data[18]} style="-scale-x-100" />
            <Desk data={data[18]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[17]} />
            <Desk data={data[16]} />
            <Desk data={data[15]} />
            <Desk data={data[14]} />
          </div>
        </div>
        <div class="occupied3 bg-cyan-300 col-start-9 col-end-14 row-start-3 row-end-5 flex flex-col place-content-center">
          {/* ocpd3 */}
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[51]} style="-scale-x-100" />
            <Desk data={data[50]} style="-scale-x-100" />
            <Desk data={data[49]} style="-scale-x-100" />
            <Desk data={data[48]} style="-scale-x-100" />
            <Desk data={data[47]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[42]} />
            <Desk data={data[43]} />
            <Desk data={data[44]} />
            <Desk data={data[45]} />
            <Desk data={data[46]} />
          </div>
        </div>
        <div class="occupied7 bg-cyan-300 col-start-9 col-end-14 row-start-6 row-end-8 flex flex-col place-content-center">
          {/* ocpd7 */}
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[41]} style="-scale-x-100" />
            <Desk data={data[40]} style="-scale-x-100" />
            <Desk data={data[39]} style="-scale-x-100" />
            <Desk data={data[38]} style="-scale-x-100" />
            <Desk data={data[37]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[32]} />
            <Desk data={data[33]} />
            <Desk data={data[34]} />
            <Desk data={data[35]} />
            <Desk data={data[36]} />
          </div>
        </div>
        <div class="occupied4 bg-cyan-300 col-start-15 col-end-17 row-start-3 row-end-8">
          ocpd4
        </div>
        <div class="occupied5 bg-cyan-300 col-start-18 col-end-20 row-start-3 row-end-8">
          ocpd5
        </div>
        <div class="occupied6 bg-cyan-300 col-start-21 col-end-22 row-start-4 row-end-6">
          ocpd6
        </div>
        <div class="occupied8 bg-cyan-300 col-start-1 col-end-3 row-start-6 row-end-12">
          ocpd8
        </div>
        <div class="occupied9 bg-cyan-300 col-start-4 col-end-6 row-start-7 row-end-12">
          ocpd9
        </div>
        <div class="occupied10 bg-cyan-300 col-start-7 col-end-8 row-start-7 row-end-13">
          ocpd10
        </div>
        <div class="occupied11 bg-cyan-300 col-start-9 col-end-12 row-start-9 row-end-12">
          ocpd11
        </div>
        <div class="occupied12 bg-cyan-300 col-start-13 col-end-14 row-start-9 row-end-12">
          ocpd12
        </div>
        <div class="zoner bg-orange-300 col-start-22 col-end-23 row-start-2 row-end-13">
          Zone R
        </div>
        <div class="Door grid place-items-center bg-pink-300 col-start-3 col-end-5 row-start-12 row-end-13">
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

export default Q_ZoneChart;
