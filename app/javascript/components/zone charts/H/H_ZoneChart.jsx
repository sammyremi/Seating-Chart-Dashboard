import React from "react";

const H_ZoneChart = () => {
  return (
    <div>
      <div className="p-2.5 grid grid-cols-12 grid-rows-9 gap-2.5 text-center">
        <div class="restroom bg-lime-500 col-start-1 col-end-5">restroom</div>
        <div class="occupied1 bg-cyan-300 col-start-6 col-end-7 row-start-1 row-end-9">
          occupied1
        </div>
        <div class="occupied2 bg-cyan-300 col-start-7 col-end-8 row-start-1 row-end-9">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-10 col-end-11 row-start-4 row-end-9">
          occupied3
        </div>
        <div class="zonei bg-orange-300 col-start-11 col-end-13 row-start-1 row-end-10">
          zone i
        </div>
        <div class="occupied4 bg-cyan-300 col-start-2 col-end-3 row-start-2 row-end-9">
          occupied4
        </div>
        <div class="occupied5 bg-cyan-300 col-start-3 col-end-4 row-start-2 row-end-9">
          occupied5
        </div>
        <div class="door bg-pink-300 col-start-5 col-end-6 row-start-9 row-end-10">
          door
        </div>
      </div>
    </div>
  );
};

export default H_ZoneChart;
