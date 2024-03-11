import { useEffect, useState } from "react";
import Table from "../Table";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import Loading from "../Loading";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

const AllWorkStations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { floor } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    sorter,
    all_zones,
    floor_2_zones,
    floor_3_zones,
    baseURL,
    all_zone_size,
  } = useGlobalContext();
  const [filters, setFilters] = useState({
    occupied: false,
    vacant: false,
    damaged: false,
    reserved: false,
  });

  const filteredData = data.filter((asset) => {
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
      (filters.occupied &&
        asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "occupied") ||
      (filters.vacant &&
        asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "vacant") ||
      (filters.damaged &&
        asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "damaged") ||
      (filters.reserved &&
        asset.custom_fields["Workspace-Status"]?.value
          .toLowerCase()
          .includes("reserved"))
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
    } else if (floor[0] === "r") {
      setFilters((prevFilters) => ({ ...prevFilters, reserved: true }));
    } else {
      console.log("");
    }
  }, [floor]);

  // check floor zones to be fetched from params
  const floor_zone =
    floor[2] === "2"
      ? floor_2_zones
      : floor[2] === "3"
      ? floor_3_zones
      : all_zones;

  // Pagination Logic
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // change current page
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];

        // fetch data
        const response = await axios.get(baseURL);
        const response_data = response.data;

        for (let i = 0; i < floor_zone.length; i++) {
          const zone_data = response_data.filter(
            (asset) =>
              asset.custom_fields["Building Zone"]?.value
                .slice(-1)
                .toLowerCase() === floor_zone[i]
          );

          // get array of occupied desks per zone
          let occupied_desks = [];
          for (let j = 0; j < zone_data.length; j++) {
            occupied_desks.push(zone_data[j].custom_fields["Workspace"].value);
          }

          // get all desks per zone
          let all_desks = [];
          const zone_id = floor_zone[i];
          for (let j = 1; j <= all_zone_size[zone_id]; j++) {
            all_desks.push(
              zone_id.toUpperCase() + j.toString().padStart(4, "0")
            );
          }

          // get vacant desks per zone
          const occupiedSet = new Set([...occupied_desks]);
          let vacant_desks = all_desks.filter((desk) => !occupiedSet.has(desk));

          // change vacant array data structure
          const newVacant = vacant_desks.map((desk) => {
            // get desk number
            // const id = desk.split("").pop();
            return {
              key: desk,
              id: `v${desk}`,
              custom_fields: {
                "Building Zone": {
                  field: "",
                  value: `Zone ${zone_id.toUpperCase()}`,
                  field_format: "ANY",
                  element: "text",
                },
                Workspace: {
                  field: "_snipeit_workspace_4",
                  value: desk,
                  field_format: "ANY",
                  element: "text",
                },
                "Workspace-Status": {
                  field: "_snipeit_workspace_status_18",
                  value: "Vacant",
                  field_format: "ANY",
                  element: "listbox",
                },
                Campaign: {
                  field: "_snipeit_campaign_17",
                  value: "",
                  field_format: "ANY",
                  element: "listbox",
                },
              },
            };
          });

          // add vacant to zone data
          zone_data.push(...newVacant);

          // sort zone_data
          sorter(zone_data, "asc");
          fetchedData.push(...zone_data);
        }
        // console.log(fetchedData);
        setData((prevData) => [...prevData, ...fetchedData]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-4">
      <p className="text-center font-bold mb-4">
        {floor[2] === "2"
          ? "Floor 2 Workstations"
          : floor[2] === "3"
          ? "Floor 3 Workstations"
          : "All Workstations"}
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

      <Table data={paginatedData} />

      <div className="flex justify-end">
        <div className="my-8">
          <Pagination
            count={totalPages}
            shape="rounded"
            color="primary"
            size="large"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AllWorkStations;
