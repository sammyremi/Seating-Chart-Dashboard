import React from "react";

const D_ZoneChart = ({ data }) => {
  return (
    <div className="p-2.5 zoneD grid grid-cols-16 grid-rows-10 gap-2.5 text-center">
      <div className="restroom bg-lime-500 col-start-1 col-end-4">restroom</div>
      <div className="vacant bg-yellow-300 col-start-6 col-end-7">vacant</div>
      <div className="occupied bg-cyan-300 col-start-7 col-end-17">
        occupied
      </div>
      <div className="damaged bg-red-300 col-start-4 col-end-6 row-start-2 row-end-3">
        damaged
      </div>
      <div className="occupied2 bg-cyan-300 col-start-1 col-end-5 row-start-3 row-end-4">
        occupied2
      </div>
      <div className="occupied3 bg-cyan-300 col-start-7 col-end-17 row-start-3 row-end-4">
        occupied3
      </div>
      <div className="occupied4 bg-cyan-300 col-start-1 col-end-5 row-start-4 row-end-5">
        occupied4
      </div>
      <div className="occupied5 bg-cyan-300 col-start-7 col-end-17 row-start-4 row-end-5">
        occupied5
      </div>
      <div className="occupied6 bg-cyan-300 col-start-1 col-end-7 row-start-6 row-end-7">
        occupied6
      </div>
      <div className="occupied7 bg-cyan-300 col-start-9 col-end-17 row-start-5 row-end-6">
        occupied7
      </div>
      <div className="occupied8 bg-cyan-300 col-start-1 col-end-7 row-start-7 row-end-8">
        occupied8
      </div>
      <div className="occupied9 bg-cyan-300 col-start-9 col-end-17 row-start-6 row-end-7">
        occupied9
      </div>
      <div className="occupied10 bg-cyan-300 col-start-6 col-end-7 row-start-8 row-end-11">
        occupied10
      </div>
      <div className="occupied11 bg-cyan-300 col-start-9 col-end-12 row-start-8 row-end-11">
        occupied11
      </div>
      <div className="server bg-gray-300 col-start-12 col-end-15 row-start-8 row-end-11">
        server
      </div>
      <div className="hr bg-purple-300 col-start-1 col-end-6 row-start-8 row-end-11">
        hr
      </div>
      <div className="door bg-pink-300 col-start-7 col-end-8 row-start-10 row-end-11">
        door
      </div>
      <div className="zoneE bg-orange-300 col-start-15 col-end-17 row-start-8 row-end-11">
        zoneE
      </div>
    </div>
  );
};

export default D_ZoneChart;
