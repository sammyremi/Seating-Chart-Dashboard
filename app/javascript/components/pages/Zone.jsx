import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../Table";
import D_ZoneChart from "../zone charts/D/D_ZoneChart";
import E_ZoneChart from "../zone charts/E/E_ZoneChart";
import H_ZoneChart from "../zone charts/H/H_ZoneChart";
import I_ZoneChart from "../zone charts/I/I_ZoneChart";
import J_ZoneChart from "../zone charts/J/J_ZoneChart";
import K_ZoneChart from "../zone charts/K/K_ZoneChart";
import L_ZoneChart from "../zone charts/L/L_ZoneChart";
import M_ZoneChart from "../zone charts/M/M_ZoneChart";
import N_ZoneChart from "../zone charts/N/N_ZoneChart";
import Q_ZoneChart from "../zone charts/Q/Q_ZoneChart";
import R_ZoneChart from "../zone charts/R/R_ZoneChart";

const Zone = () => {
  const { zone_name } = useParams();
  console.log(zone_name);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    occupied: false,
    vacant: false,
    damaged: false,
    filtered: false,
  });

  const filteredData = data.filter((desk) => {
    // No filters selected, show all
    if (
      !filters.occupied &&
      !filters.vacant &&
      !filters.damaged &&
      !filters.reserved
    ) {
      return true;
    }

    // Include filtered item in the filtered data
    if (
      (filters.occupied && desk.status === "Occupied") ||
      (filters.vacant && desk.status === "Vacant") ||
      (filters.damaged && desk.status === "Damaged") ||
      (filters.reserved && desk.status === "Reserved (IT)") ||
      (filters.reserved && desk.status === "Reserved (Dev)") ||
      (filters.reserved && desk.status === "Reserved (Ops)")
    ) {
      return true;
    }

    return false; // Exclude the item from filtered data
  });

  const url = `/${zone_name}`;
  const zone_id_array = zone_name.split("");
  const zone_id = zone_id_array[zone_id_array.length - 2];

  let chartComponent;
  switch (zone_id.toUpperCase()) {
    case "D":
      chartComponent = <D_ZoneChart data={data} />;
      break;
    case "E":
      chartComponent = <E_ZoneChart data={data} />;
      break;
    case "H":
      chartComponent = <H_ZoneChart data={data} />;
      break;
    case "I":
      chartComponent = <I_ZoneChart data={data} />;
      break;
    case "J":
      chartComponent = <J_ZoneChart data={data} />;
      break;
    case "K":
      chartComponent = <K_ZoneChart data={data} />;
      break;
    case "L":
      chartComponent = <L_ZoneChart data={data} />;
      break;
    case "M":
      chartComponent = <M_ZoneChart data={data} />;
      break;
    case "N":
      chartComponent = <N_ZoneChart data={data} />;
      break;
    case "Q":
      chartComponent = <Q_ZoneChart data={data} />;
      break;
    case "R":
      chartComponent = <R_ZoneChart data={data} />;
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const zones = await response.json();
        setData(zones);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="">
      <p className="text-3xl font-bold text-center text-gray-600">
        Zone {zone_id.toUpperCase()}
      </p>
      <div className="mb-12">{chartComponent}</div>
      <div className="flex justify-end text-gray-600">
        <div className="flex flex-col place-items-center">
          <i className=" font-bold">Filter Result</i>
          <fieldset className="flex gap-2">
            <div className="flex items-center mb-4">
              <input
                id="checkbox-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                checked={filters.vacant}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    vacant: !prevFilters.vacant,
                  }))
                }
              />
              <label
                htmlFor="checkbox-1"
                className="ml-1 text-xs font-medium text-gray-900"
              >
                Vacant
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                checked={filters.occupied}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    occupied: !prevFilters.occupied,
                  }))
                }
              />
              <label
                htmlFor="checkbox-2"
                className="ml-1 text-xs font-medium text-gray-900"
              >
                Occupied
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checkbox-3"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                checked={filters.damaged}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    damaged: !prevFilters.damaged,
                  }))
                }
              />
              <label
                htmlFor="checkbox-3"
                className="ml-1 text-xs font-medium text-gray-900"
              >
                Damaged
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checkbox-3"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                checked={filters.reserved}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    reserved: !prevFilters.reserved,
                  }))
                }
              />
              <label
                htmlFor="checkbox-3"
                className="ml-1 text-xs font-medium text-gray-900"
              >
                Reserved
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <Table data={filteredData} />
    </div>
  );
};

export default Zone;
