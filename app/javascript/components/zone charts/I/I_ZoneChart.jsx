import React from "react";
import Desk from "../../Desk";
import { Link } from "react-router-dom";

const I_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="ZoneI p-2.5 grid grid-cols-17 grid-rows-12 gap-2.5 text-center">
        <div class="zoneh grid place-items-center bg-[#e9f9fd] rounded-sm col-start-1 col-end-2 row-start-1 row-end-13">
          {/* Zone H */}
          {/* <Link to={"/zones/zone_hs"}> */}
          <div>
            <p>Zone H</p>
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
          {/* </Link> */}
        </div>
        {/* Desk_id: #41-52 */}
        <div class="ocpd1  col-start-2 col-end-8 row-start-1 row-end-3 flex flex-col place-content-center">
          {/* occupied1 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[45]} style="-scale-x-100" />
            <Desk data={data[44]} style="-scale-x-100" />
            <Desk data={data[43]} style="-scale-x-100" />
            <Desk data={data[42]} style="-scale-x-100" />
            <Desk data={data[41]} style="-scale-x-100" />
            <Desk data={data[40]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[46]} />
            <Desk data={data[47]} />
            <Desk data={data[48]} />
            <Desk data={data[49]} />
            <Desk data={data[50]} />
            <Desk data={data[51]} />
          </div>
        </div>
        {/* Desk_id: #33-40 */}
        <div class="ocpd2  col-start-12 col-end-14 row-start-1 row-end-5 flex justify-center">
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[39]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[38]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[37]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[36]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[32]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[33]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[34]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[35]} />
            </div>
          </div>
        </div>
        {/* Desk_id: #31-32 */}
        <div class="ocpd3  col-start-15 col-end-16 row-start-1 row-end-3 flex flex-col place-items-center">
          {/* occupied3 */}
          <div className="rotate-90">
            <Desk data={data[30]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[31]} />
          </div>
        </div>
        {/* Desk_id: #53-64?? */}
        <div class="ocpd4  col-start-2 col-end-9 row-start-4 row-end-6 flex flex-col place-content-center">
          {/* occupied4 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[24]} style="-scale-x-100" />
            <Desk data={data[52]} style="-scale-x-100" />
            <Desk data={data[53]} style="-scale-x-100" />
            <Desk data={data[54]} style="-scale-x-100" />
            <Desk data={data[55]} style="-scale-x-100" />
            <Desk data={data[56]} style="-scale-x-100" />
            <Desk data={data[57]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[24]} />
            <Desk data={data[63]} />
            <Desk data={data[62]} />
            <Desk data={data[61]} />
            <Desk data={data[60]} />
            <Desk data={data[59]} />
            <Desk data={data[58]} />
          </div>
        </div>
        {/* Desk_id: #27-30 */}
        <div class="ocpd5  col-start-15 col-end-16 row-start-4 row-end-8 flex flex-col place-items-center">
          <div className="rotate-90">
            <Desk data={data[29]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[28]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[27]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[26]} />
          </div>
        </div>
        {/* Desk_id: #9-20 */}
        <div class="ocpd6  col-start-12 col-end-14 row-start-6 row-end-12 flex justify-center">
          {/* occupied6 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[8]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[9]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[10]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[11]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[12]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[13]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[14]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[15]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[16]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[17]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[18]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[19]} />
            </div>
          </div>
        </div>
        {/* Desk_id: #65-70 */}
        <div class="ocpd7  col-start-3 col-end-5 row-start-7 row-end-10 flex justify-center">
          {/* occupied7 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[66]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[65]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[64]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[67]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[68]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[69]} />
            </div>
          </div>
        </div>
        {/* Desk_id: #71-73 */}
        <div class="ocpd10  col-start-6 col-end-7 row-start-7 row-end-10 flex flex-col place-items-center">
          {/* ocp10 */}
          <div className="rotate-90">
            <Desk data={data[72]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[71]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[70]} />
          </div>
        </div>
        {/* Desk_id: #1-8 */}
        <div class="ocpd8  col-start-9 col-end-11 row-start-7 row-end-11 flex justify-center">
          {/* occupied8 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[0]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[1]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[2]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[3]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[7]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[6]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[5]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[4]} />
            </div>
          </div>
        </div>
        {/* Desk_id: #21-26 */}
        <div class="ocpd9  col-start-15 col-end-17 row-start-9 row-end-12 flex justify-center">
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[22]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[21]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[20]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[23]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[24]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[25]} />
            </div>
          </div>
        </div>
        <div class="restroom1 rounded-sm grid place-content-center bg-lime-300 col-start-16 col-end-18 row-start-1 row-end-3">
          Restroom 1
        </div>
        <div class="server rounded-sm grid place-content-center bg-gray-300 col-start-16 col-end-18 row-start-4 row-end-6">
          Server
        </div>
        <div class="restroom2 rounded-sm grid place-content-center bg-lime-300 col-start-16 col-end-18 row-start-6 row-end-8">
          Restroom 2
        </div>
        <div class="Door flex self-end mb-[-10px] col-start-10 col-end-11 row-start-12 row-end-13">
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

export default I_ZoneChart;
