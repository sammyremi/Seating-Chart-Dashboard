import React from "react";
import floor from "../../images/2nd_Floor.png";
import { Link } from "react-router-dom";
import { MapInteractionCSS } from 'react-map-interaction';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';



const Floor2 = ({val}) => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="basis-3/4 px-4">
          <div className="w-4/5 border border-2 border-gray-300 mx-auto my-0">
          <MapInteractionCSS showControls={true} 
          plusBtnContents={<div className="flex place-items-center justify-center hover:text-white hover:bg-sky-200  bg-gray-50 border-1 rounded-md h-8 w-7 text-xl"><AiOutlinePlus/></div>} 
          minusBtnContents={<div className="flex place-items-center justify-center hover:text-white hover:bg-sky-200  bg-gray-50 border-1 rounded-md h-8 w-7 text-xl"><AiOutlineMinus/></div>}>
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
          <Link to={"/zones/zone_ds"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ffffcc] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone D
            </button>
          </Link>
          <Link to={"/zones/zone_es"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#ffcce6] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone E
            </button>
          </Link>
          <Link to={"/zones/zone_hs"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#99ff99] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone H
            </button>
          </Link>
          <Link to={"/zones/zone_is"}>
            <button
              type="button"
              className="drop-shadow-xl text-black w-4/5 bg-[#66b2ff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone I
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Floor2;
