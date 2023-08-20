import React from "react";
import Desk from "../../Desk";

const I_ZoneChart = ({ data }) => {
  return (
    <div>
      <div class="ZoneI p-2.5 grid grid-cols-17 grid-rows-12 gap-2.5 text-center">
        <div class="zoneh bg-orange-300 col-start-1 col-end-2 row-start-1 row-end-13">
          Zone H
        </div>
        <div class="ocpd1 bg-cyan-300 col-start-2 col-end-8 row-start-1 row-end-3 flex flex-col place-content-center">
          {/* occupied1 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[45]} style="-scale-x-100" />
            <Desk data={data[44]} style="-scale-x-100" />
            <Desk data={data[43]} style="-scale-x-100" />
            <Desk data={data[42]} style="-scale-x-100" />
            <Desk data={data[41]} style="-scale-x-100" />
            <Desk data={data[40]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[46]} />
            <Desk data={data[47]} />
            <Desk data={data[48]} />
            <Desk data={data[49]} />
            <Desk data={data[50]} />
            <Desk data={data[51]} />
          </div>
        </div>
        <div class="occupied2 bg-cyan-300 col-start-12 col-end-14 row-start-1 row-end-5">
          occupied2
        </div>
        <div class="occupied3 bg-cyan-300 col-start-15 col-end-16 row-start-1 row-end-3">
          occupied3
        </div>
        <div class="restroom1 bg-lime-500 col-start-16 col-end-18 row-start-1 row-end-3">
          restroom1
        </div>
        <div class="ocpd4 bg-cyan-300 col-start-2 col-end-9 row-start-4 row-end-6 flex flex-col place-content-center">
          {/* occupied4 */}
          <div className="flex flex-row -scale-y-100 place-content-start">
            <Desk data={data[24]} style="-scale-x-100" />
            <Desk data={data[52]} style="-scale-x-100" />
            <Desk data={data[53]} style="-scale-x-100" />
            <Desk data={data[54]} style="-scale-x-100" />
            <Desk data={data[55]} style="-scale-x-100" />
            <Desk data={data[56]} style="-scale-x-100" />
            <Desk data={data[57]} style="-scale-x-100" />
          </div>
          <div className="flex flex-row place-content-start">
            <Desk data={data[24]} />
            <Desk data={data[63]} />
            <Desk data={data[62]} />
            <Desk data={data[61]} />
            <Desk data={data[60]} />
            <Desk data={data[59]} />
            <Desk data={data[58]} />
          </div>
        </div>
        <div class="occupied5 bg-cyan-300 col-start-15 col-end-16 row-start-4 row-end-8">
          occupied5
        </div>
        <div class="server bg-gray-300 col-start-16 col-end-18 row-start-4 row-end-6">
          server
        </div>
        <div class="restroom2 bg-lime-500 col-start-16 col-end-18 row-start-6 row-end-8">
          restroom2
        </div>
        <div class="occupied6 bg-cyan-300 col-start-12 col-end-14 row-start-6 row-end-12">
          occupied6
        </div>
        <div class="occupied7 bg-cyan-300 col-start-3 col-end-5 row-start-7 row-end-10 flex justify-center">
          {/* occupied7 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[24]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[24]} />
            </div>
            <div className="rotate-90">
              <Desk data={data[24]} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[24]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[24]} />
            </div>
            <div className="-rotate-90">
              <Desk data={data[24]} />
            </div>
          </div>
        </div>
        <div class="occupied7 bg-cyan-300 col-start-6 col-end-7 row-start-7 row-end-10">
          ocp10
        </div>
        <div class="occupied8 bg-cyan-300 col-start-9 col-end-11 row-start-7 row-end-11">
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
