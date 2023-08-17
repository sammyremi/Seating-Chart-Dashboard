import React from "react";

const E_ZoneChart = () => {
  return (
    <div>
      <div class="zoneE p-2.5 grid grid-cols-15 grid-rows-10 gap-2.5 text-center">
        <div className="restroom1 bg-lime-500 col-start-1 col-end-3 row-start-1 row-end-2">
          restroom 1
        </div>
        <div class="occupied1 bg-cyan-300 col-start-3 col-end-4 row-start-1 row-end-2">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-5 col-end-8 row-start-2 row-end-3">
          occupied2
        </div>
        <div className="restroom2 bg-lime-500 col-start-8 col-end-10 row-start-1 row-end-3">
          restroom 2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-5 col-end-10 row-start-3 row-end-4">
          occupied3
        </div>
        <div class="occupied4 bg-cyan-300 col-start-13 col-end-16 row-start-2 row-end-3">
          occupied4
        </div>
        <div class="occupied5 bg-cyan-300 col-start-13 col-end-16 row-start-3 row-end-4">
          occupied5
        </div>
        <div class="occupied6 bg-cyan-300 col-start-2 col-end-7 row-start-5 row-end-6">
          occupied6
        </div>
        <div class="occupied7 bg-cyan-300 col-start-2 col-end-7 row-start-6 row-end-7">
          occupied7
        </div>
        <div class="occupied8 bg-cyan-300 col-start-11 col-end-16 row-start-5 row-end-6">
          occupied8
        </div>
        <div class="vacant bg-yellow-300 col-start-11 col-end-16 row-start-6 row-end-7">
          vacant
        </div>
        <div class="server bg-gray-300 col-start-1 col-end-5 row-start-8 row-end-9">
          server
        </div>
        <div class="occupied9 bg-cyan-300 col-start-5 col-end-7 row-start-8 row-end-9">
          occupied9
        </div>
        <div class="occupied10 bg-cyan-300 col-start-5 col-end-7 row-start-9 row-end-10">
          occupied10
        </div>
        <div class="occupied11 bg-cyan-300 col-start-11 col-end-16 row-start-8 row-end-9">
          occupied11
        </div>
        <div class="ZoneI bg-orange-300 col-start-1 col-end-5 row-start-9 row-end-11">
          ZoneI
        </div>
        <div class="door bg-pink-300 col-start-8 col-end-9 row-start-10 row-end-11">
          door
        </div>
      </div>
    </div>
  );
};

export default E_ZoneChart;
