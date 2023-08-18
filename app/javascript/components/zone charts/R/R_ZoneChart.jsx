import React from "react";

const R_ZoneChart = () => {
  return (
    <div>
      <div class="ZoneR p-2.5 grid grid-cols-14 grid-rows-12 gap-2.5 text-center">
        <div class="restroom bg-lime-500 col-start-7 col-end-9 row-start-1 row-end-2">
          restroom
        </div>
        <div class="server bg-gray-300 col-start-3 col-end-5 row-start-1 row-end-2">
          server
        </div>
        <div class="occupied1 bg-cyan-300 col-start-11 col-end-14 row-start-1 row-end-2">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-1 col-end-7 row-start-2 row-end-4">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-9 col-end-14 row-start-2 row-end-4">
          occupied3
        </div>
        <div class="occupied4 bg-cyan-300 col-start-9 col-end-14 row-start-5 row-end-7">
          occupied4
        </div>
        <div class="occupied5 bg-cyan-300 col-start-1 col-end-7 row-start-5 row-end-7">
          occupied5
        </div>
        <div class="occupied6 bg-cyan-300 col-start-9 col-end-14 row-start-8 row-end-10">
          occupied6
        </div>
        <div class="occupied7 bg-cyan-300 col-start-1 col-end-5 row-start-10 row-end-11">
          occupied7
        </div>
        <div class="occupied8 bg-cyan-300 col-start-12 col-end-14 row-start-11 row-end-12">
          occupied8
        </div>
        <div class="occupied9 bg-cyan-300 col-start-7 col-end-8 row-start-8 row-end-10">
          occupied9
        </div>
        <div class="zonej bg-orange-300 col-start-14 col-end-15 row-start-1 row-end-13">
          Zone J
        </div>
        <div class="door bg-pink-300 col-start-8 col-end-9 row-start-12 row-end-13">
          door
        </div>
      </div>
    </div>
  );
};

export default R_ZoneChart;
