import React, { useEffect, useState } from "react";
import Desk from "../../Desk";
import { Link } from "react-router-dom";

const D_ZoneChart = ({ data }) => {
  return (
    <div className="zoneD grid grid-cols-15 grid-rows-11 gap-2 text-center w-[780px] border-2 my-2.5 mx-auto border-slate-400 rounded p-2.5 pb-[24px]">
      {/* Desk_id: #30-40 */}
      <div className="occupied  col-start-6 col-end-16 flex place-content-end">
        <Desk data={data[29]} />
        <Desk data={data[30]} />
        <Desk data={data[31]} />
        <Desk data={data[32]} />
        <Desk data={data[33]} />
        <Desk data={data[34]} />
        <Desk data={data[35]} />
        <Desk data={data[36]} />
        <Desk data={data[37]} />
        <Desk data={data[38]} />
        <Desk data={data[39]} />
      </div>
      {/* Desk_id: #28-29 */}
      <div className="damaged col-start-4 col-end-6 flex place-content-center">
        <Desk data={data[27]} />
        <Desk data={data[28]} />
      </div>
      {/* Desk_id: #22-29 */}
      <div className="occupied2  col-start-1 col-end-5 row-start-3 row-end-5 flex flex-col place-content-center">
        {/* occupied2 */}
        <div className="flex flex-row -scale-y-100">
          <Desk data={data[24]} style="-scale-x-100" />
          <Desk data={data[25]} style="-scale-x-100" />
          <Desk data={data[26]} style="-scale-x-100" />
        </div>
        <div className="flex flex-row">
          <Desk data={data[23]} />
          <Desk data={data[22]} />
          <Desk data={data[21]} />
        </div>
      </div>
      {/* Desk_id: #41-60 */}
      <div className="occupied3  col-start-7 col-end-16 row-start-3 row-end-5 flex flex-col place-content-center">
        <div className="flex flex-row -scale-y-100 place-content-end">
          <Desk data={data[49]} style="-scale-x-100" />
          <Desk data={data[48]} style="-scale-x-100" />
          <Desk data={data[47]} style="-scale-x-100" />
          <Desk data={data[46]} style="-scale-x-100" />
          <Desk data={data[45]} style="-scale-x-100" />
          <Desk data={data[44]} style="-scale-x-100" />
          <Desk data={data[43]} style="-scale-x-100" />
          <Desk data={data[42]} style="-scale-x-100" />
          <Desk data={data[41]} style="-scale-x-100" />
          <Desk data={data[40]} style="-scale-x-100" />
        </div>
        <div className="flex flex-row place-content-end">
          <Desk data={data[50]} />
          <Desk data={data[51]} />
          <Desk data={data[52]} />
          <Desk data={data[53]} />
          <Desk data={data[54]} />
          <Desk data={data[55]} />
          <Desk data={data[56]} />
          <Desk data={data[57]} />
          <Desk data={data[58]} />
          <Desk data={data[59]} />
        </div>
      </div>
      {/* Desk_id: #10-21 */}
      <div className="ocpd6  col-start-1 col-end-7 row-start-7 row-end-9 flex flex-col place-content-center">
        {/* occupied6 */}
        <div className="flex flex-row -scale-y-100">
          <Desk data={data[15]} style="-scale-x-100" />
          <Desk data={data[16]} style="-scale-x-100" />
          <Desk data={data[17]} style="-scale-x-100" />
          <Desk data={data[18]} style="-scale-x-100" />
          <Desk data={data[19]} style="-scale-x-100" />
          <Desk data={data[20]} style="-scale-x-100" />
        </div>
        <div className="flex flex-row">
          <Desk data={data[14]} />
          <Desk data={data[13]} />
          <Desk data={data[12]} />
          <Desk data={data[11]} />
          <Desk data={data[10]} />
          <Desk data={data[9]} />
        </div>
      </div>
      {/* Desk_id: #61-76 */}
      <div className="ocpd7  col-start-9 col-end-16 row-start-6 row-end-8 flex flex-col place-content-center">
        {/* occupied7 */}
        <div className="flex flex-row -scale-y-100 place-content-end">
          <Desk data={data[67]} style="-scale-x-100" />
          <Desk data={data[66]} style="-scale-x-100" />
          <Desk data={data[65]} style="-scale-x-100" />
          <Desk data={data[64]} style="-scale-x-100" />
          <Desk data={data[63]} style="-scale-x-100" />
          <Desk data={data[62]} style="-scale-x-100" />
          <Desk data={data[61]} style="-scale-x-100" />
          <Desk data={data[60]} style="-scale-x-100" />
        </div>
        <div className="flex flex-row place-content-end">
          <Desk data={data[68]} />
          <Desk data={data[69]} />
          <Desk data={data[70]} />
          <Desk data={data[71]} />
          <Desk data={data[72]} />
          <Desk data={data[73]} />
          <Desk data={data[74]} />
          <Desk data={data[75]} />
        </div>
      </div>
      {/* Desk_id: #7-9 */}
      <div className="ocpd10  col-start-6 col-end-7 mt-2 row-start-9 row-end-12 flex flex-col place-items-center">
        <div className="-rotate-90">
          <Desk data={data[8]} />
        </div>
        <div className="-rotate-90">
          <Desk data={data[7]} />
        </div>
        <div className="-rotate-90">
          <Desk data={data[6]} />
        </div>
      </div>
      {/* Desk_id: #1-6 */}
      <div className="ocpd11 col-start-9 col-end-12 mt-2 row-start-9 row-end-12 flex justify-start">
        <div className="flex flex-col">
          <div className="rotate-90">
            <Desk data={data[3]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[4]} />
          </div>
          <div className="rotate-90">
            <Desk data={data[5]} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-rotate-90">
            <Desk data={data[2]} />
          </div>
          <div className="-rotate-90">
            <Desk data={data[1]} />
          </div>
          <div className="-rotate-90">
            <Desk data={data[0]} />
          </div>
        </div>
      </div>
      <div className="server rounded-sm bg-gray-300 col-start-11 col-end-14 mt-2 row-start-9 row-end-12 grid place-content-center">
        Server
      </div>
      <div className="hr rounded-sm bg-purple-100 col-start-1 col-end-6 mt-2 row-start-9 row-end-12 grid place-content-center">
        HR
      </div>
      <div className="Door col-start-8 col-end-9 row-start-11 row-end-12 flex self-end mb-[-20px]">
        {/* door */}
        <svg
          className="w-7 h-7 text-slate-500"
          fill="#000000"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 28.75h-2.779v-26.75c-0-0.69-0.56-1.25-1.25-1.25h-19.971c-0.69 0-1.25 0.56-1.25 1.25v0 26.75h-2.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM7.25 28.75v-25.5h17.471v25.5zM21.48 14.84c-0.138-0.057-0.299-0.089-0.467-0.089-0.349 0-0.665 0.141-0.894 0.37l0-0c-0.232 0.222-0.377 0.534-0.379 0.88v0c0.004 0.174 0.041 0.338 0.103 0.489l-0.003-0.009c0.066 0.157 0.161 0.291 0.279 0.4l0.001 0.001c0.219 0.234 0.529 0.38 0.874 0.38 0.002 0 0.005 0 0.007-0h-0c0.174-0.005 0.339-0.041 0.489-0.104l-0.009 0.003c0.3-0.143 0.537-0.379 0.676-0.671l0.004-0.009c0.058-0.142 0.094-0.306 0.1-0.477l0-0.002c-0.002-0.346-0.148-0.658-0.38-0.879l-0-0c-0.109-0.119-0.241-0.214-0.391-0.278l-0.007-0.003z"></path>
        </svg>
      </div>
      <div className="restroom rounded-sm bg-gray-300 col-start-4 col-end-6 row-start-1 row-end-2 grid place-content-center">
        Restroom
      </div>
      <div className="zoneE rounded-sm grid place-items-center mt-2 bg-[#e9f9fd] col-start-14 col-end-16 row-start-9 row-end-12 flex justify-center">
        {/* zoneE */}
        <Link to={"/zones/zone_es"}>
          <div>
            <p>Zone E</p>
            <svg
              className="h-7 w-7 ml-2"
              viewBox="0 -6.5 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="ui-gambling-website-lined-icnos-casinoshunter"
                  transform="translate(-212.000000, -159.000000)"
                  fill="#252528"
                  fillRule="nonzero"
                >
                  <g
                    id="square-filled"
                    transform="translate(50.000000, 120.000000)"
                  >
                    <path
                      d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                      id="right-arrow"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {/* </Link> */}
        </Link>
      </div>
    </div>
  );
};

export default D_ZoneChart;
