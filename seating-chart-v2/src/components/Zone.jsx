import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "./Table";
import D_ZoneChart from "./zone charts/D/D_ZoneChart";
import E_ZoneChart from "./zone charts/E/E_ZoneChart";
import H_ZoneChart from "./zone charts/H/H_ZoneChart";
import I_ZoneChart from "./zone charts/I/I_ZoneChart";
import J_ZoneChart from "./zone charts/J/J_ZoneChart";
import K_ZoneChart from "./zone charts/K/K_ZoneChart";
import L_ZoneChart from "./zone charts/L/L_ZoneChart";
import M_ZoneChart from "./zone charts/M/M_ZoneChart";
import N_ZoneChart from "./zone charts/N/N_ZoneChart";
import Q_ZoneChart from "./zone charts/Q/Q_ZoneChart";
import R_ZoneChart from "./zone charts/R/R_ZoneChart";
import { useGlobalContext } from "./Context";
import Pagination from "@mui/material/Pagination";

const Zone = () => {
  const { data, loading, setActiveSideNav, floor_3_zones, all_zone_size } =
    useGlobalContext();
  const { zone_name } = useParams();
  const [filters, setFilters] = useState({
    occupied: false,
    vacant: false,
    damaged: false,
    filtered: false,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const zone_id_array = zone_name.split("");
  const zone_id = zone_id_array[zone_id_array.length - 2];

  const zone_data = data.zone_data[zone_id];

  // get array of occupied desks per zone
  let occupied_desks = [];
  for (let i = 0; i < zone_data.length; i++) {
    occupied_desks.push(zone_data[i].custom_fields["Workspace"].value);
  }

  // get all desks per zone
  let all_desks = [];
  for (let i = 1; i <= all_zone_size[zone_id]; i++) {
    all_desks.push(zone_id.toUpperCase() + i.toString().padStart(4, "0"));
  }

  // get vacant desks per zone
  const occupiedSet = new Set([...occupied_desks]);
  let vacant_desks = all_desks.filter((desk) => !occupiedSet.has(desk));

  // change vacant data structure
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

  zone_data.push(...newVacant);

  console.log(zone_data);

  // filter data
  const filteredData = zone_data.filter((desk) => {
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
        desk.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "occupied") ||
      (filters.vacant &&
        desk.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "vacant") ||
      (filters.damaged &&
        desk.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "damaged") ||
      (filters.reserved &&
        desk.custom_fields["Workspace-Status"]?.value
          .toLowerCase()
          .includes("reserved"))
    ) {
      return true;
    }

    return false; // Exclude the item from filtered data
  });

  let chartComponent;
  switch (zone_id.toUpperCase()) {
    case "D":
      chartComponent = <D_ZoneChart data={zone_data} />;
      break;
    case "E":
      chartComponent = <E_ZoneChart data={zone_data} />;
      break;
    case "H":
      chartComponent = <H_ZoneChart data={zone_data} />;
      break;
    case "I":
      chartComponent = <I_ZoneChart data={zone_data} />;
      break;
    case "J":
      chartComponent = <J_ZoneChart data={zone_data} />;
      break;
    case "K":
      chartComponent = <K_ZoneChart data={zone_data} />;
      break;
    case "L":
      chartComponent = <L_ZoneChart data={zone_data} />;
      break;
    case "M":
      chartComponent = <M_ZoneChart data={zone_data} />;
      break;
    case "N":
      chartComponent = <N_ZoneChart data={zone_data} />;
      break;
    case "Q":
      chartComponent = <Q_ZoneChart data={zone_data} />;
      break;
    case "R":
      chartComponent = <R_ZoneChart data={zone_data} />;
      break;
  }

  useEffect(() => {
    setActiveSideNav("zones");
  }, []);

  // Pagination Logic
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  let paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="relative">
      <p className="text-2xl font-bold text-center text-gray-600">
        Floor {floor_3_zones.includes(zone_id) ? "3" : "2"} || Zone{" "}
        {zone_id.toUpperCase()}
      </p>

      {/* show seating chart */}
      <div className="mb-12">{chartComponent}</div>

      {/* Filter */}
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
                onChange={() => {
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    vacant: !prevFilters.vacant,
                  }));
                }}
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

export default Zone;
