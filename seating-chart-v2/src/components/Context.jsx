import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

// create custom hook
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [current_user, setCurrent_user] = useState("");
  const [activeSideNav, setActiveSideNav] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchedDesk, setSearchedDesk] = useState("");
  const baseURL = "http://it-assets.outsource.ng/api/v1/hardware";
  const [data, setData] = useState({
    floor_2: {
      occupied: "",
      damaged: "",
      vacant: "",
      reserved: "",
      zones: {
        d: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        e: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        h: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        i: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
      },
    },
    floor_3: {
      occupied: "",
      damaged: "",
      vacant: "",
      reserved: "",
      zones: {
        j: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        k: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        l: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        m: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        n: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        q: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
        r: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
        },
      },
    },
    zone_data: {
      d: [],
      e: [],
      h: [],
      i: [],
      j: [],
      k: [],
      l: [],
      m: [],
      n: [],
      q: [],
      r: [],
    },
  });

  // floor zones
  const floor_2_zones = ["d", "e", "h", "i"];
  const floor_2_zones_size = [76, 44, 36, 73];
  const floor_3_zones = ["j", "k", "l", "m", "n", "q", "r"];
  const floor_3_zones_size = [19, 24, 38, 25, 44, 94, 55];
  const all_zones = ["d", "e", "h", "i", "j", "k", "l", "m", "n", "q", "r"];
  const all_zone_size = {
    d: 76,
    e: 44,
    h: 36,
    i: 73,
    j: 19,
    k: 24,
    l: 38,
    m: 25,
    n: 44,
    q: 94,
    r: 55,
  };
  const zones_d = {
    d: [],
    e: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    q: [],
    r: [],
  };
  const acceptedItReserved = ["reserved (it)", "reserved it"];
  const acceptedDevReserved = ["reserved (dev)", "reserved dev"];
  const acceptedOpsReserved = ["reserved (ops)", "reserved ops"];

  // sorting function
  const sorter = (array, order) => {
    // Custom comparison function for sorting by workspace value
    function compareByWorkspace(a, b) {
      const workspaceA = a.custom_fields.Workspace.value;
      const workspaceB = b.custom_fields.Workspace.value;
      if (order == "desc") {
        return workspaceA > workspaceB ? -1 : workspaceA < workspaceB ? 1 : 0;
      }
      if (order == "asc") {
        return workspaceA < workspaceB ? -1 : workspaceA > workspaceB ? 1 : 0;
      }
    }

    array.sort(compareByWorkspace);
  };

  // get vacant workspace function
  const getVacant = (zone_data, floor_zone, i) => {
    // get array of occupied desks per zone
    let occupied_desks = [];
    for (let j = 0; j < zone_data.length; j++) {
      occupied_desks.push(zone_data[j].custom_fields["Workspace"].value);
    }

    // get all desks per zone
    let all_desks = [];
    const zone_id = floor_zone[i];
    for (let j = 1; j <= all_zone_size[zone_id]; j++) {
      all_desks.push(zone_id.toUpperCase() + j.toString().padStart(4, "0"));
    }

    // get vacant desks per zone
    const occupiedSet = new Set([...occupied_desks]);
    let vacant_desks = all_desks.filter((desk) => !occupiedSet.has(desk));

    // change vacant array data structure
    const newVacant = vacant_desks.map((desk) => {
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

    return zone_data;
  };

  // data fetching function
  const getData = async () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWY4YWI3OTYxZjcxZGU3MDNlM2I1NWZmM2U2MmQyYTYzNDk5OWVlODMzODM2YzJjNDg1N2U4MGIwNDMyYTZkNGIwYjczMWZlYTBlZGE3ZTgiLCJpYXQiOjE3MDg0MzAyMDYuOTA0OTcxLCJuYmYiOjE3MDg0MzAyMDYuOTA0OTczLCJleHAiOjIxODE4MTU4MDYuODc5MjE0LCJzdWIiOiIyMDYiLCJzY29wZXMiOltdfQ.BC2S1QqF_L9m0wv3VJAfH5XsqJ-Ycw01LX01TOj8g8_kqBq6Q9SPMIyH2JrvNTJjnPuVRbsJfjTRLMxr3fKOAzFlb0l_IsHEnZPGMWi2YN5XJY6l6USWRjb1JPmQKEtefsqoskyN5AzbkBQLxHlkel3hHJlkLKwNvhdEjgkCG6Ll23y2Rc9jwT9vb80n5QDj-dCBRd7-4MKjJgUXhU3asIAqPp9ykfolNlwIWSas-iwK3GjQmAVVCsuQrMoeFuOSV5_cstGs2_GW-ManeDpdup7Zf9Qxk-u_yh3SIEqLIWZW_iTy5Txlpp0Sz8PqMXZ_EsirumH3lMxAhbNEO7IFGKfYer-ni6dvW9EkrAn0OX4Rx636wIJ-vamrjo6_snbbPyr4eibfWRPD13pZenMF96Gv3UBD5qJ831HdIMG9kb3kS04PRYI8RTPu0l5rAiyvDe81kMykHOzBhcsMbMWkpVT1mA33ARD3bglKfckvtSV95rcK9bF0bo-nHsPeQt9r5FZ2R1djl9jaS_VXYK0bOpJVdSh7vDwqmIAmU-g13NZJmC92dTE5nrbgFsvZ_hrg6tYfzA5ftzTPh2jHm70C3QbL1gc1q2n2O55ZU7fXAgyVd_CA8KHS2ySbfJkCagdVC4h1NIhm3XfdAxNs0k8Eho2x4aQcujJUm0AjluykDs8"; // Replace "your_token_here" with your actual token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(baseURL, config);

    const response_data = response.data.rows;

    console.log(response_data);


    const fetchData = async () => {
      const f2fetchedData = [];
      const f3fetchedData = [];
      let f2vacant = 0;
      let f3vacant = 0;

      //get all the zones data
      for (let i = 0; i < all_zones.length; i++) {
        const zone_data = response_data.filter(
          (asset) =>
            asset.custom_fields["Building Zone"]?.value
              .slice(-1)
              .toLowerCase() === all_zones[i]
        );
        // console.log(zone_data);
        zones_d[all_zones[i]] = zone_data;
      }

      // get floor 2 data
      for (let i = 0; i < floor_2_zones.length; i++) {
        const floor_data = response_data.filter(
          (asset) =>
            asset.custom_fields["Building Zone"]?.value
              .slice(-1)
              .toLowerCase() === floor_2_zones[i]
        );

        // get occupied, vacant, damaged and reserved data in each floor 2 zone
        let occupied = floor_data.filter(
          (asset) =>
            asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
            "occupied"
        );
        let damaged = floor_data.filter(
          (asset) =>
            asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
            "damaged"
        );
        let reserved = floor_data.filter((asset) =>
          asset.custom_fields["Workspace-Status"]?.value
            .toLowerCase()
            .includes("reserved")
        );

        //sort floor_data in asc order
        sorter(floor_data, "asc");

        // set floor 2 zones data
        setData((prevData) => ({
          ...prevData,
          zone_data: {
            ...prevData.zone_data,
            // each zone gets its data
            [floor_2_zones[i]]: floor_data,
          },
          floor_2: {
            ...prevData.floor_2,
            zones: {
              ...prevData.floor_2.zones,
              [floor_2_zones[i]]: {
                ...prevData.floor_2.zones[floor_2_zones[i]],
                occupied: occupied.length,
                damaged: damaged.length,
                reserved: reserved.length,
                vacant:
                  floor_2_zones_size[i] -
                  (occupied.length + damaged.length + reserved.length),
                total: floor_2_zones_size[i],
              },
            },
          },
        }));

        // sum all floor_2 vacant zones
        f2vacant +=
          floor_2_zones_size[i] -
          (occupied.length + damaged.length + reserved.length);

        f2fetchedData.push(...floor_data);
      }

      // get occupied, vacant, damaged and reserved data in all floor 2 zones
      let occupied_2 = f2fetchedData.filter(
        (asset) =>
          asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "occupied"
      );
      let damaged_2 = f2fetchedData.filter(
        (asset) =>
          asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "damaged"
      );
      let reserved_2 = f2fetchedData.filter((asset) =>
        asset.custom_fields["Workspace-Status"]?.value
          .toLowerCase()
          .includes("reserved")
      );
      let vacant_2 = f2vacant;

      // set floor 2 data length
      setData((prevData) => ({
        ...prevData,
        floor_2: {
          ...prevData.floor_2,
          occupied: occupied_2.length,
          damaged: damaged_2.length,
          reserved: reserved_2.length,
          vacant: vacant_2,response
        },
      }));

      // get floor 3 data
      for (let i = 0; i < floor_3_zones.length; i++) {
        const floor_data = response_data.filter(
          (asset) =>
            asset.custom_fields["Building Zone"]?.value
              .slice(-1)
              .toLowerCase() === floor_3_zones[i]
        );

        // get occupied, vacant, damaged and reserved data in each floor 3 zone
        let occupied = floor_data.filter(
          (asset) =>
            asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
            "occupied"
        );
        let damaged = floor_data.filter(
          (asset) =>
            asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
            "damaged"
        );
        let reserved = floor_data.filter((asset) =>
          asset.custom_fields["Workspace-Status"]?.value
            .toLowerCase()
            .includes("reserved")
        );

        // set floor 3 zones data
        setData((prevData) => ({
          ...prevData,
          zone_data: {
            ...prevData.zone_data,
            [floor_3_zones[i]]: floor_data,
          },
          floor_3: {
            ...prevData.floor_3,
            zones: {
              ...prevData.floor_3.zones,
              [floor_3_zones[i]]: {
                ...prevData.floor_3.zones[floor_3_zones[i]],
                occupied: occupied.length,
                damaged: damaged.length,
                reserved: reserved.length,
                vacant:
                  floor_3_zones_size[i] -
                  (occupied.length + damaged.length + reserved.length),
                total: floor_3_zones_size[i],
              },
            },
          },
        }));

        // get all floor_3 vacant zones
        f3vacant +=
          floor_3_zones_size[i] -
          (occupied.length + damaged.length + reserved.length);

        f3fetchedData.push(...floor_data);
      }

      // get occupied, vacant, damaged and reserved data in floor 3 zones
      let occupied_3 = f3fetchedData.filter(
        (asset) =>
          asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "occupied"
      );
      let damaged_3 = f3fetchedData.filter(
        (asset) =>
          asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "damaged"
      );
      let vacant_3 = f3vacant;
      let reserved_3 = f3fetchedData.filter((asset) =>
        asset.custom_fields["Workspace-Status"]?.value
          .toLowerCase()
          .includes("reserved")
      );

      // set floor 3 data
      setData((prevData) => ({
        ...prevData,
        floor_3: {
          ...prevData.floor_3,
          occupied: occupied_3.length,
          damaged: damaged_3.length,
          reserved: reserved_3.length,
          vacant: vacant_3,
        },
      }));
    };
    setLoading(false);
    fetchData();

    return response.data;
  };

  // useQuery
  const {
    isLoading,
    isFetching,
    data: rq_data,
  } = useQuery({
    queryKey: ["snipeit_data"],
    queryFn: getData,
    refetchInterval: 1000 * 60,
  });

  return (
    <GlobalContext.Provider
      value={{
        getVacant,
        all_zone_size,
        sorter,
        isLoading,
        isFetching,
        baseURL,
        zones_d,
        all_zones,
        data,
        rq_data,
        getData,
        setData,
        loading,
        setLoading,
        setRefresh,
        refresh,
        current_user,
        setCurrent_user,
        activeSideNav,
        setActiveSideNav,
        showSidebar,
        setShowSidebar,
        floor_2_zones,
        floor_3_zones,
        searchedDesk,
        setSearchedDesk,
        acceptedDevReserved,
        acceptedItReserved,
        acceptedOpsReserved,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
