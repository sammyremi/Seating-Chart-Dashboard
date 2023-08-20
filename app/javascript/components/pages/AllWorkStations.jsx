import React, { useEffect, useState } from "react";
import Table from "../Table";

const zones = ["d", "h", "j", "l", "n", "r"];

const AllWorkStations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="pt-4 ">
      <p className="text-center font-bold mb-4">All Workstations</p>

      <i className="relative left-[809px] font-thin mb-4">Filter Result</i>

      <fieldset className="flex gap-2 relative left-[729px]">
        <div class="flex items-center mb-4">
          <input
            checked
            id="checkbox-1"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox-1"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Vacant
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="checkbox-2"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox-2"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Occupied
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="checkbox-3"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox-3"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Damaged
          </label>
        </div>
      </fieldset>

      <Table data={data} />
    </div>
  );
};

export default AllWorkStations;
