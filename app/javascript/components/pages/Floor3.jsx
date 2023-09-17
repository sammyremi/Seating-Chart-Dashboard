import React from "react";
import floor from "../../images/3rd_Floor.png";
import { Link } from "react-router-dom";
import { MapInteractionCSS } from "react-map-interaction";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useEffect } from "react";
import { useGlobalContext } from "../Context";

const Floor3 = ({ fl_active }) => {
  const { floor_3_zones } = useGlobalContext();
  const setActive = fl_active[1];
  useEffect(() => {
    setActive("floor 3");
  }, []);
  return (
    <div>
      <div className="flex gap-6">
        <div className="basis-3/4 px-4">
          <div className="w-4/5  border-2 border-gray-300 mx-auto my-0">
            <MapInteractionCSS
              showControls={true}
              plusBtnContents={
                <div className="flex place-items-center hover:text-white hover:bg-sky-200 justify-center bg-gray-50 border-1 rounded-md h-8 w-7 text-xl">
                  <AiOutlinePlus />
                </div>
              }
              minusBtnContents={
                <div className="flex place-items-center hover:text-white hover:bg-sky-200  justify-center bg-gray-50 border-1 rounded-md h-8 w-7 text-xl">
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
          {floor_3_zones.map((zone) => {
            return (
              <Link key={zone} to={`/zones/zone_${zone.toLowerCase()}s`}>
                <button
                  type="button"
                  className={`drop-shadow-xl text-black w-4/5 hover:scale-110 transition-transform ease-in-out font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded 
                  ${
                    zone.toLowerCase() === "j"
                      ? "bg-[#ffcc99] hover:bg-[#ffead6]"
                      : zone.toLowerCase() === "k"
                      ? "bg-[#66b2ff] hover:bg-[#d2e6fa]"
                      : zone.toLowerCase() === "l"
                      ? "bg-[#ff66b3] hover:bg-[#fad3e6]"
                      : zone.toLowerCase() === "m"
                      ? "bg-[#ff9999] hover:bg-[#fdd3d3]"
                      : zone.toLowerCase() === "n"
                      ? "bg-[#ccccff] hover:bg-[#ececf8]"
                      : zone.toLowerCase() === "q"
                      ? "bg-[#ffff00] hover:bg-[#f8f8c2]"
                      : zone.toLowerCase() === "r"
                      ? "bg-[#66ffff] hover:bg-[#ddfdfd]"
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

export default Floor3;
