import React from "react";

const I_ZoneChart = () => {
  return (
    <div>
      <div class="ZoneI p-2.5 grid grid-cols-18 grid-rows-12 gap-2.5 text-center">
        <div class="zoneh bg-orange-300 col-start-1 col-end-2 row-start-1 row-end-13">
          Zone H
        </div>
        <div class="occupied1 bg-cyan-300 col-start-2 col-end-8 row-start-1 row-end-3">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-12 col-end-14 row-start-1 row-end-5">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-15 col-end-16 row-start-1 row-end-3">
          occupied3
        </div>
        <div class="restroom1 bg-lime-500 col-start-16 col-end-19 row-start-1 row-end-3">
          restroom1
        </div>
        <div class="occupied4 bg-cyan-300 col-start-2 col-end-9 row-start-4 row-end-6">
          occupied4
        </div>
        <div class="occupied5 bg-cyan-300 col-start-16 col-end-17 row-start-4 row-end-8">
          occupied5
        </div>
        <div class="server bg-gray-300 col-start-17 col-end-19 row-start-4 row-end-7">
          server
        </div>
        <div class="restroom2 bg-lime-500 col-start-17 col-end-19 row-start-7 row-end-9">
          restroom2
        </div>
        <div class="occupied6 bg-cyan-300 col-start-12 col-end-14 row-start-6 row-end-12">
          occupied6
        </div>
        <div class="occupied7 bg-cyan-300 col-start-2 col-end-7 row-start-7 row-end-10">
          occupied7
        </div>
        <div class="occupied8 bg-cyan-300 col-start-10 col-end-12 row-start-7 row-end-11">
          occupied8
        </div>
        <div class="occupied9 bg-cyan-300 col-start-15 col-end-17 row-start-9 row-end-12">
          occupied9
        </div>
        <div class="door bg-pink-300 col-start-10 col-end-11 row-start-12 row-end-13">
          door
        </div>
      </div>
    </div>
  );
};

export default I_ZoneChart;
