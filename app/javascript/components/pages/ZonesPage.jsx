import React from "react";
import { Link } from "react-router-dom";
import ZoneBox from "../ZoneBox";

const Zones = () => {
  return (
    <div className="py-4 px-8">
      <p className="text-center font-bold mb-4">Zones</p>
      <div className="grid grid-cols-3 gap-6">
        <ZoneBox zone="Zone D" />
        <ZoneBox zone="Zone E" />
        <ZoneBox zone="Zone H" />
        <ZoneBox zone="Zone I" />
        <ZoneBox zone="Zone J" />
        <ZoneBox zone="Zone K" />
        <ZoneBox zone="Zone L" />
        <ZoneBox zone="Zone M" />
        <ZoneBox zone="Zone N" />
        <ZoneBox zone="Zone Q" />
        <ZoneBox zone="Zone R" />
        <ZoneBox zone="All Working Stations" />
      </div>
    </div>
  );
};

export default Zones;
