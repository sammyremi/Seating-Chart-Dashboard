import React, { useEffect, useState } from "react";
import Table from "../Table";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import Loading from "../Loading";


const zones = ["d", "e", "h", "i", "j", "k", "l", "m", "n", "q", "r"];
const floor_2_zones = ["d", "e", "h", "i"];
const floor_3_zones = ["j", "k", "l", "m", "n", "q", "r"];

const AllWorkStations = () => {
  const {} = useGlobalContext()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    occupied: false,
    vacant: false,
    damaged: false,
    // filtered: false,
  });
  const { floor } = useParams();

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

  // check for occupied, damaged or vacant from params
  useEffect(() => {
    if (floor[0] === "o") {
      setFilters((prevFilters) => ({ ...prevFilters, occupied: true }));
    } else if (floor[0] === "v") {
      setFilters((prevFilters) => ({ ...prevFilters, vacant: true }));
    } else if (floor[0] === "d") {
      setFilters((prevFilters) => ({ ...prevFilters, damaged: true }));
    } else {
      console.log("nothing to show");
    }
  }, [floor]);

  // check floor zones to be fetched from params
  const zone_array =
    floor[2] === "2" ? floor_2_zones : floor[2] === "3" ? floor_3_zones : zones;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];

        for (let i = 0; i < zone_array.length; i++) {
          const response = await fetch(`/zone_${zone_array[i]}s`);
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
      <Loading/>
    );
  }

  return (
    <div className="pt-4">
      <p className="text-center font-bold mb-4">
        {floor[2] === "2" ? "Floor 2 Workstations": floor[2] === "3" ? "Floor 3 Workstations" : "All Workstations"}
        </p>
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
