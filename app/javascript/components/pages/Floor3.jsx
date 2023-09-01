import React from "react";
import floor from "../../images/3rd_Floor.png";
import { Link } from "react-router-dom";
import { MapInteractionCSS } from 'react-map-interaction';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Floor3 = ({val}) => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="basis-3/4 px-4">
        <div className="w-4/5 border border-2 border-gray-300 mx-auto my-0">
          <MapInteractionCSS showControls={true} 
          plusBtnContents={<div className="flex place-items-center hover:text-white hover:bg-sky-200 justify-center bg-gray-50 border-1 rounded-md h-8 w-7 text-xl"><AiOutlinePlus/></div>} 
          minusBtnContents={<div className="flex place-items-center hover:text-white hover:bg-sky-200  justify-center bg-gray-50 border-1 rounded-md h-8 w-7 text-xl"><AiOutlineMinus/></div>}>
            <img className="h-5/6 w-full bg-sky-100" src={floor} alt="pic" />
          </MapInteractionCSS>
          </div>
        </div>
        <div className="basis-1/4 px-4 text-center h-fit">
          {/* <Link to={"/zones"}> */}
            <button
              type="button"
              className="mb-16 drop-shadow-xl text-black w-full bg-[#E9F9FD] rounded hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2"
            >
              Zones
            </button>
          {/* </Link> */}
          <Link to={"/zones/zone_js"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ffcc99] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone J
            </button>
          </Link>
          <Link to={"/zones/zone_ks"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#66b2ff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone K
            </button>
          </Link>
          <Link to={"/zones/zone_ls"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ff66b3] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone L
            </button>
          </Link>
          <Link to={"/zones/zone_ms"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ff9999] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone M
            </button>
          </Link>
          <Link to={"/zones/zone_ns"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ccccff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone N
            </button>
          </Link>
          <Link to={"/zones/zone_qs"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ffff00] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone Q
            </button>
          </Link>
          <Link to={"/zones/zone_rs"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#66ffff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone R
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Floor3;
