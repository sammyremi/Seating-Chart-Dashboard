import React from "react";
import Desk from "../../Desk";

const L_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="ZoneL p-2.5 grid grid-cols-7 grid-rows-8 gap-2.5 text-center">
        <div class="zonek grid place-items-center bg-orange-100 col-start-1 col-end-2 row-start-1 row-end-9">
          {/* Zone K */}
          <div>
            <p>Zone K</p>
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
        </div>
        <div class="ocpd1 bg-cyan-300 col-start-2 col-end-5 row-start-1 row-end-3 flex flex-col place-content-center">
          {/* occupied1 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[10]} style="-scale-x-100" />
            <Desk data={data[9]} style="-scale-x-100" />
            <Desk data={data[8]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[11]} />
            <Desk data={data[12]} />
            <Desk data={data[13]} />
          </div>
        </div>
        <div class="occupied2 bg-cyan-300 col-start-7 col-end-8 row-start-1 row-end-9">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-2 col-end-6 row-start-4 row-end-6 flex flex-col place-content-center">
          {/* occupied3 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[17]} style="-scale-x-100" />
            <Desk data={data[16]} style="-scale-x-100" />
            <Desk data={data[15]} style="-scale-x-100" />
            <Desk data={data[14]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[18]} />
            <Desk data={data[19]} />
            <Desk data={data[20]} />
            <Desk data={data[21]} />
          </div>
        </div>
        <div class="occupied4 bg-cyan-300 col-start-2 col-end-6 row-start-7 row-end-9 flex flex-col place-content-center">
          {/* occupied4 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[25]} style="-scale-x-100" />
            <Desk data={data[24]} style="-scale-x-100" />
            <Desk data={data[23]} style="-scale-x-100" />
            <Desk data={data[22]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[26]} />
            <Desk data={data[27]} />
            <Desk data={data[28]} />
            <Desk data={data[29]} />
          </div>
        </div>
        <div class="restroom bg-lime-500 col-start-6 col-end-7 row-start-1 row-end-2">
          restroom
        </div>
        <div class="door bg-pink-300 col-start-6 col-end-7 row-start-8 row-end-9">
          door
        </div>
      </div>
    </div>
  );
};

export default L_ZoneChart;
