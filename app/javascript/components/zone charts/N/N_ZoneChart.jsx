import React from "react";

const N_ZoneChart = () => {
  return (
    <div>
      <div class="zoneN p-2.5 grid grid-cols-9 grid-rows-11 gap-2.5 text-center">
        <div class="zonem bg-orange-300 col-start-1 col-end-2 row-start-1 row-end-12">
          Zone M
        </div>
        <div class="occupied1 bg-cyan-300 col-start-9 col-end-10 row-start-1 row-end-11">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-3 col-end-5 row-start-3 row-end-11">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-6 col-end-8 row-start-2 row-end-11">
          occupied3
        </div>
        <div class="restroom bg-lime-500 col-start-3 col-end-5 row-start-1 row-end-3">
          restroom
        </div>
        <div class="door bg-pink-300 col-start-5 col-end-6 row-start-11 row-end-12">
          door
        </div>
      </div>
    </div>
  );
};

export default N_ZoneChart;
