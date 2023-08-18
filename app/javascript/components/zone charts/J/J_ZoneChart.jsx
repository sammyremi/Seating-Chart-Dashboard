import React from "react";
import Desk from "../../Desk";

const J_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="ZoneJ p-2.5 grid grid-cols-5 grid-rows-9 gap-2.5">
        <div class="zoneR bg-orange-100 col-start-1 col-end-2 row-start-1 row-end-10">
          Zone R
        </div>
        <div class="ocp1 col-start-4 col-end-6 row-start-1 row-end-2 flex flex-row items-center">
          <Desk data={data[14]} />
          <Desk data={data[15]} />
          <Desk data={data[16]} />
          <Desk data={data[17]} />
          <Desk data={data[18]} />
        </div>
        <div class="ocp2 col-start-4 col-end-6 row-start-3 row-end-5 flex flex-col">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[13]} style="-scale-x-100" />
            <Desk data={data[12]} style="-scale-x-100" />
            <Desk data={data[11]} style="-scale-x-100" />
            <Desk data={data[10]} style="-scale-x-100" />
            <Desk data={data[9]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[4]} />
            <Desk data={data[5]} />
            <Desk data={data[6]} />
            <Desk data={data[7]} />
            <Desk data={data[8]} />
          </div>
        </div>
        <div class="ocp3 col-start-4 col-end-6 row-start-7 row-end-9 flex flex-col">
          <div className="flex flex-row -scale-y-100">
            <Desk data={data[3]} style="-scale-x-100" />
            <Desk data={data[2]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row">
            <Desk data={data[0]} />
            <Desk data={data[1]} />
          </div>
        </div>
        <div class="door bg-pink-300 col-start-2 col-end-3 row-start-9 row-end-10">
          door
        </div>
      </div>
    </div>
  );
};

export default J_ZoneChart;
