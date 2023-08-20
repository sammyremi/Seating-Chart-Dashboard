import React from "react";
import floor from "../../images/3rd_Floor.png";
import { Link } from "react-router-dom";

const Floor3 = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="basis-3/4 px-4">
          <img className="h-5/6 w-full bg-sky-100" src={floor} alt="pic" />
        </div>
        <div className="basis-1/4 px-4 text-center h-fit">
          <Link to={"/zones"}>
            <button
              type="button"
              class="mb-16 drop-shadow-xl text-black w-full bg-[#E9F9FD] rounded hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2"
            >
              Zones
            </button>
          </Link>
          <Link to={"/zones/zone_js"}>
            <button
              type="button"
              class="drop-shadow-xl text-black w-4/5 bg-[#ffcc99] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone J
            </button>
          </Link>
          <Link to={"/zones/zone_ks"}>
            <button
              type="button"
              class="drop-shadow-xl text-black w-4/5 bg-[#66b2ff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone K
            </button>
          </Link>
          <Link to={"/zones/zone_ls"}>
            <button
              type="button"
              class="drop-shadow-xl text-black w-4/5 bg-[#ff66b3] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone L
            </button>
          </Link>
          <Link to={"/zones/zone_ms"}>
            <button
              type="button"
              class="drop-shadow-xl text-black w-4/5 bg-[#ff9999] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone M
            </button>
          </Link>
          <Link to={"/zones/zone_ns"}>
            <button
              type="button"
              class="drop-shadow-xl text-black w-4/5 bg-[#ccccff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone N
            </button>
          </Link>
          <Link to={"/zones/zone_qs"}>
            <button
              type="button"
              class="drop-shadow-xl text-black w-4/5 bg-[#ffff00] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
            >
              Zone Q
            </button>
          </Link>
          <Link to={"/zones/zone_rs"}>
            <button
              type="button"
              class="drop-shadow-xl text-black w-4/5 bg-[#66ffff] hover:bg-blue-100 font-medium text-md px-5 py-2.5 mr-2 mb-4 rounded"
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
