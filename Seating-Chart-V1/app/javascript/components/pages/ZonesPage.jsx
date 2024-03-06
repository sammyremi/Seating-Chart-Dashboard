import React from "react";
import ZoneBox from "../ZoneBox";
import { useGlobalContext } from "../Context";
import { useEffect } from "react";

const Zones = () => {
  const { setActiveSideNav } = useGlobalContext();
  useEffect(() => {
    setActiveSideNav("zones");
  }, []);

  return (
    <div className="py-4 px-8 mx-auto my-0">
      <p className="text-center font-bold mb-4">Zones</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 justify-items-center">
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
