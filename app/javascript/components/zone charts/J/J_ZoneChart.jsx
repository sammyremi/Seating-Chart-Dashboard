import React from "react";
import Desk from "../../Desk";

const J_ZoneChart = ({ data }) => {
  console.log(data[0]);
  return (
    <div>
      <div class="ZoneJ p-2.5 grid grid-cols-7 grid-rows-8 gap-2.5 text-center">
        <div class="zoneR bg-orange-300 col-start-1 col-end-3 row-start-1 row-end-9">
          Zone R
        </div>
        <div class="occupied1 bg-cyan-300 col-start-3 col-end-8 row-start-1 row-end-2">
          <Desk desk_info={data[0]} />
          {/* <Desk desk_info={data[1]} />
          <Desk desk_info={data[2]} />
          <Desk desk_info={data[3]} />
          <Desk desk_info={data[4]} /> */}
        </div>
        <div class="occupied2 bg-cyan-300 col-start-3 col-end-8 row-start-3 row-end-5">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-6 col-end-8 row-start-6 row-end-8">
          occupied3
        </div>
        <div class="door bg-pink-300 col-start-4 col-end-5 row-start-8 row-end-9">
          door
        </div>
      </div>
    </div>
  );
};

export default J_ZoneChart;
