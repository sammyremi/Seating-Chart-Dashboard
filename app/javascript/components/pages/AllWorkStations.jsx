import React, { useEffect, useState } from "react";
import Table from "../Table";

const zones = ["d", "e", "h", "i", "j", "k", "l", "m", "n", "q", "r"];

const AllWorkStations = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];

        for (let i = 0; i < zones.length; i++) {
          const response = await fetch(`/zone_${zones[i]}s`);
          const zone_data = await response.json();
          fetchedData.push(...zone_data);
        }
        setData((prevData) => [...prevData, ...fetchedData]);
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
    <div className="pt-4">
      <p className="text-center font-bold mb-4">All Workstations</p>
      <div className="absolute top-20 text-center right-4">
        <i className=" font-bold mb-4">Filter Result</i>
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
              className="ml-2 text-sm font-medium text-gray-900"
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
              className="ml-2 text-sm font-medium text-gray-900"
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
              className="ml-2 text-sm font-medium text-gray-900"
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
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Reserved
            </label>
          </div>
        </fieldset>
      </div>

      <Table data={filteredData} />
    </div>
  );
};

export default AllWorkStations;
