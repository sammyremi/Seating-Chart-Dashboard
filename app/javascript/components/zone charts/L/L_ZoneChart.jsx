import React from "react";

const L_ZoneChart = () => {
  return (
    <div>
      <div class="ZoneL p-2.5 grid grid-cols-7 grid-rows-8 gap-2.5 text-center">
        <div class="zonek bg-orange-300 col-start-1 col-end-2 row-start-1 row-end-9">
          Zone K
        </div>
        <div class="occupied1 bg-cyan-300 col-start-2 col-end-5 row-start-1 row-end-3">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-7 col-end-8 row-start-1 row-end-9">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-2 col-end-6 row-start-4 row-end-6">
          occupied3
        </div>
        <div class="occupied4 bg-cyan-300 col-start-2 col-end-6 row-start-7 row-end-9">
          occupied4
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
