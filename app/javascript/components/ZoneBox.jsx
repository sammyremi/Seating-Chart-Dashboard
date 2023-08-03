import React from "react";
import { Link } from "react-router-dom";

const ZoneBox = ({ zone }) => {
  const zone_link = zone.split(" ")[1];
  return (
    <Link
      to={zone_link === "Working" ? "/all-workstations" : `zone-${zone_link}`}
    >
      <div className="flex items-center justify-center w-96 bg-sky-400 rounded-md text-slate-50 font-bold h-40 tracking-wide">
        <p>{zone}</p>
      </div>
    </Link>
  );
};

export default ZoneBox;
