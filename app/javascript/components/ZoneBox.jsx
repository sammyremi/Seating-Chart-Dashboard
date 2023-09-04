import React from "react";
import { Link } from "react-router-dom";

const ZoneBox = ({ zone }) => {
  const zone_link = zone.split(" ")[1].toLowerCase();
  return (
    <Link
      to={zone_link === "working" ? "/workstations/all" : `zone_${zone_link}s`}
    >
      <div className="flex items-center justify-center w-64 h-28 bg-sky-400 rounded-md text-slate-50 font-bold tracking-wide">
        <p>{zone}</p>
      </div>
    </Link>
  );
};

export default ZoneBox;
