import React from "react";
import Desk from "../../Desk";
import { Link } from "react-router-dom";

const E_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="zoneE p-2.5 grid grid-cols-13 grid-rows-11 gap-2.5 text-center">
        <div className="restroom1 grid place-content-center rounded-sm bg-lime-300 col-start-1 col-end-3 row-start-1 row-end-2">
          Restroom 1
        </div>
        <div class="ocpd1 col-start-3 col-end-4 row-start-1 row-end-2 flex place-content-center">
          <Desk data={data[43]} />
        </div>
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
        <div className="restroom grid place-content-center rounded-sm bg-lime-300 col-start-4 col-end-5 row-start-1 row-end-4">
          Restroom 2
        </div>
        <div class="ocpd4 col-start-11 col-end-14 row-start-3 row-end-5 flex flex-col place-content-center">
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
        <div class="ocpd8 col-start-9 col-end-14 row-start-6 row-end-8 flex flex-col place-content-center">
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
        <div class="server grid place-content-center rounded-sm bg-gray-300 col-start-1 col-end-5 row-start-9 row-end-10">
          Server
        </div>
        <div class="ocpd9 col-start-5 col-end-7 row-start-9 row-end-11 flex flex-col place-content-center">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[2]} style="-scale-x-100" />
            <Desk data={data[3]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[1]} />
            <Desk data={data[0]} />
          </div>
        </div>
        <div class="ocpd11 col-start-9 col-end-14 row-start-9 row-end-10 flex flex-row -scale-y-100 place-content-end">
          <Desk data={data[4]} style="-scale-x-100" />
          <Desk data={data[5]} style="-scale-x-100" />
          <Desk data={data[6]} style="-scale-x-100" />
          <Desk data={data[7]} style="-scale-x-100" />
          <Desk data={data[8]} style="-scale-x-100" />
        </div>
        <div class="ZoneD rounded-sm bg-[#e9f9fd] col-start-1 col-end-5 row-start-10 row-end-12 flex flex-row justify-center">
          {/* <Link to={"/zones/zone_ds"}> */}
          <div className="flex mt-6">
            <svg
              className="h-7 w-7 mr-4"
              viewBox="0 -6.5 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="ui-gambling-website-lined-icnos-casinoshunter"
                  transform="translate(-342.000000, -159.000000)"
                  fill="#252528"
                  fill-rule="nonzero"
                >
                  <g
                    id="square-filled"
                    transform="translate(50.000000, 120.000000)"
                  >
                    <path
                      d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z"
                      id="left-arrow"
                      transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Zone D</span>
          </div>
          {/* </Link> */}
        </div>
        <div class="Door flex self-end mb-[-10px] col-start-7 col-end-8 row-start-11 row-end-12">
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
