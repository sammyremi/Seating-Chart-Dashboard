import React from "react";

const Q_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="ZoneQ p-2.5 grid grid-cols-22 grid-rows-12 gap-2 text-center">
        <div class="restroom1 bg-lime-500 col-start-1 col-end-3 row-start-1 row-end-2">
          restroom1
        </div>
        <div class="occupied1 bg-cyan-300 col-start-5 col-end-18 row-start-1 row-end-2">
          occupied1
        </div>
        <div class="restroom2 bg-lime-500 col-start-20 col-end-24 row-start-1 row-end-2">
          restroom2
        </div>
        <div class="occupied2 bg-cyan-300 col-start-3 col-end-7 row-start-3 row-end-5">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-9 col-end-14 row-start-3 row-end-5">
          occupied3
        </div>
        <div class="occupied4 bg-cyan-300 col-start-15 col-end-17 row-start-3 row-end-8">
          occupied4
        </div>
        <div class="occupied5 bg-cyan-300 col-start-18 col-end-20 row-start-3 row-end-8">
          occupied5
        </div>
        <div class="occupied6 bg-cyan-300 col-start-21 col-end-22 row-start-4 row-end-6">
          occupied6
        </div>
        <div class="occupied7 bg-cyan-300 col-start-9 col-end-14 row-start-6 row-end-8">
          occupied7
        </div>
        <div class="occupied8 bg-cyan-300 col-start-1 col-end-3 row-start-6 row-end-12">
          occupied8
        </div>
        <div class="occupied9 bg-cyan-300 col-start-4 col-end-6 row-start-7 row-end-12">
          occupied9
        </div>
        <div class="occupied10 bg-cyan-300 col-start-7 col-end-8 row-start-7 row-end-13">
          occupied10
        </div>
        <div class="occupied11 bg-cyan-300 col-start-9 col-end-12 row-start-9 row-end-12">
          occupied11
        </div>
        <div class="occupied12 bg-cyan-300 col-start-13 col-end-14 row-start-9 row-end-12">
          occupied12
        </div>
        <div class="zoner bg-orange-300 col-start-22 col-end-23 row-start-2 row-end-13">
          Zone R
        </div>
        <div class="door bg-pink-300 col-start-3 col-end-5 row-start-12 row-end-13">
          door
        </div>
      </div>
    </div>
  );
};

export default Q_ZoneChart;
