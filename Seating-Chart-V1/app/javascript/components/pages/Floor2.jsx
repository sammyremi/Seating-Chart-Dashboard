import React from "react";
import floor from "../../images/2nd_Floor.png";
import { Link } from "react-router-dom";
import { MapInteractionCSS } from "react-map-interaction";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useEffect } from "react";
import { useGlobalContext } from "../Context";

const Floor2 = ({ fl_active }) => {
  const { floor_2_zones } = useGlobalContext();
  const setActive = fl_active[1];
  useEffect(() => {
    setActive("floor 2");
  }, []);
  return (
    <div>
      <div className="flex gap-6">
        <div className="basis-3/4 px-4">
          <div className="w-4/5 border-2 border-gray-300 mx-auto my-0">
            <MapInteractionCSS
              showControls={true}
              plusBtnContents={
                <div className="flex place-items-center justify-center hover:text-white hover:bg-sky-200  bg-gray-50 border-1 rounded-md h-8 w-7 text-xl">
                  <AiOutlinePlus />
                </div>
              }
              minusBtnContents={
                <div className="flex place-items-center justify-center hover:text-white hover:bg-sky-200  bg-gray-50 border-1 rounded-md h-8 w-7 text-xl">
                  <AiOutlineMinus />
                </div>
              }
            >
              <img className="h-5/6 w-full bg-sky-100" src={floor} alt="pic" />
            </MapInteractionCSS>
          </div>
        </div>
        <div className="basis-1/4 px-4 text-center h-fit">
          <div
            type="button"
            className="mb-16 drop-shadow-xl text-black w-full bg-[#E9F9FD] rounded font-medium text-md px-5 py-2.5 mr-2"
          >
            Zones
          </div>
          {floor_2_zones.map((zone) => {
            return (
              <Link key={zone} to={`/zones/zone_${zone.toLowerCase()}s`}>
                <button
                  type="button"
                  className={`drop-shadow-xl text-black w-4/5 hover:scale-110 transition-transform ease-in-out font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded 
                  ${
                    zone.toLowerCase() === "d"
                      ? "bg-[#ffffcc] hover:bg-[#fcfcf0]"
                      : zone.toLowerCase() === "e"
                      ? "bg-[#ffcce6] hover:bg-[#faf0f5]"
                      : zone.toLowerCase() === "h"
                      ? "bg-[#99ff99] hover:bg-[#e6fae6]"
                      : zone.toLowerCase() === "i"
                      ? "bg-[#66b2ff] hover:bg-[#e0ecf8]"
                      : ""
                  }
                  `}
                >
                  Zone {zone.toUpperCase()}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Floor2;
