import React from "react";

const M_ZoneChart = () => {
  return (
    <div>
      <div class="zoneM p-2.5 grid grid-cols-10 grid-rows-8 gap-2.5 text-center">
        <div class="zonen bg-orange-300 col-start-9 col-end-11 row-start-1 row-end-9">
          Zone N
        </div>
        <div class="occupied1 bg-cyan-300 col-start-6 col-end-8 row-start-1 row-end-2">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-3 col-end-8 row-start-3 row-end-5">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-3 col-end-8 row-start-6 row-end-8">
          occupied3
        </div>
        <div class="occupied4 bg-cyan-300 col-start-5 col-end-8 row-start-8 row-end-9">
          occupied4
        </div>
        <div class="restroom bg-lime-500 col-start-1 col-end-3 row-start-1 row-end-2">
          restroom
        </div>
        <div class="server bg-gray-300 col-start-1 col-end-3 row-start-8 row-end-9">
          server
        </div>
        <div class="door bg-pink-300 col-start-8 col-end-9 row-start-8 row-end-9">
          door
        </div>
      </div>
    </div>
  );
};

export default M_ZoneChart;
