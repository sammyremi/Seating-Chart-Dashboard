import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const baseURL = "http://localhost:3000/rows";
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
  const floor_3_zones = ["j", "k", "l", "m", "n", "q", "r"];
  const all_zones = ["d", "e", "h", "i", "j", "k", "l", "m", "n", "q", "r"];
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

  // sorter function
  const sorter = (array, order) => {
    let sortedArray = [];

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

    sortedArray = array.sort(compareByWorkspace);

    // console.log(sortedArray);
  };

  const acceptedItReserved = ["reserved (it)", "reserved it"];
  const acceptedDevReserved = ["reserved (dev)", "reserved dev"];
  const acceptedOpsReserved = ["reserved (ops)", "reserved ops"];

  const getData = async () => {
    const response = await axios.get(baseURL);
    const response_data = response.data;

    const fetchData = async () => {
      const f2fetchedData = [];
      const f3fetchedData = [];

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
        // console.log(floor_data);

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
        let vacant = floor_data.filter(
          (asset) =>
            asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
            "vacant"
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
                vacant: vacant.length,
                damaged: damaged.length,
                reserved: reserved.length,
                total: floor_data.length,
              },
            },
          },
        }));

        f2fetchedData.push(...floor_data);
      }

      // get occupied, vacant, damaged and reserved data in floor 2 zones
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
      let vacant_2 = f2fetchedData.filter(
        (asset) =>
          asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "vacant"
      );
      let reserved_2 = f2fetchedData.filter((asset) =>
        asset.custom_fields["Workspace-Status"]?.value
          .toLowerCase()
          .includes("reserved")
      );

      // set floor 2 data length
      setData((prevData) => ({
        ...prevData,
        floor_2: {
          ...prevData.floor_2,
          occupied: occupied_2.length,
          vacant: vacant_2.length,
          damaged: damaged_2.length,
          reserved: reserved_2.length,
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
        let vacant = floor_data.filter(
          (asset) =>
            asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
            "vacant"
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
                vacant: vacant.length,
                damaged: damaged.length,
                reserved: reserved.length,
                total: floor_data.length,
              },
            },
          },
        }));
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
      let vacant_3 = f3fetchedData.filter(
        (asset) =>
          asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
          "vacant"
      );
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
          vacant: vacant_3.length,
          damaged: damaged_3.length,
          reserved: reserved_3.length,
        },
      }));
    };
    setLoading(false);
    fetchData();

    return response.data;
  };

  const {
    isLoading,
    isFetching,
    data: rq_data,
  } = useQuery({
    queryKey: ["snipeit_data"],
    queryFn: getData,
    refetchInterval: 1000 * 60,
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const f2fetchedData = [];
  //     const f3fetchedData = [];
  //     // fetch data
  //     const response = await axios.get(baseURL);
  //     const response_data = response.data;
  //     //get all the zones data
  //     for (let i = 0; i < all_zones.length; i++) {
  //       const zone_data = response_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Building Zone"]?.value
  //             .slice(-1)
  //             .toLowerCase() === all_zones[i]
  //       );
  //       zones_d[all_zones[i]] = zone_data;
  //     }
  //     // get floor 2 data
  //     for (let i = 0; i < floor_2_zones.length; i++) {
  //       const floor_data = response_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Building Zone"]?.value
  //             .slice(-1)
  //             .toLowerCase() === floor_2_zones[i]
  //       );
  //       console.log(floor_data);
  //       // get occupied, vacant, damaged and reserved data in each floor 2 zone
  //       let occupied = floor_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //           "occupied"
  //       );
  //       let damaged = floor_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //           "damaged"
  //       );
  //       let vacant = floor_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //           "vacant"
  //       );
  //       let reserved = floor_data.filter((asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value
  //           .toLowerCase()
  //           .includes("reserved")
  //       );
  //       //sort floor_data in asc order
  //       sorter(floor_data, "asc");
  //       // set floor 2 zones data
  //       setData((prevData) => ({
  //         ...prevData,
  //         zone_data: {
  //           ...prevData.zone_data,
  //           // each zone gets its data
  //           [floor_2_zones[i]]: floor_data,
  //         },
  //         floor_2: {
  //           ...prevData.floor_2,
  //           zones: {
  //             ...prevData.floor_2.zones,
  //             [floor_2_zones[i]]: {
  //               ...prevData.floor_2.zones[floor_2_zones[i]],
  //               occupied: occupied.length,
  //               vacant: vacant.length,
  //               damaged: damaged.length,
  //               reserved: reserved.length,
  //               total: floor_data.length,
  //             },
  //           },
  //         },
  //       }));
  //       f2fetchedData.push(...floor_data);
  //     }
  //     // get occupied, vacant, damaged and reserved data in floor 2 zones
  //     let occupied_2 = f2fetchedData.filter(
  //       (asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //         "occupied"
  //     );
  //     let damaged_2 = f2fetchedData.filter(
  //       (asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //         "damaged"
  //     );
  //     let vacant_2 = f2fetchedData.filter(
  //       (asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //         "vacant"
  //     );
  //     let reserved_2 = f2fetchedData.filter((asset) =>
  //       asset.custom_fields["Workspace-Status"]?.value
  //         .toLowerCase()
  //         .includes("reserved")
  //     );
  //     // set floor 2 data length
  //     setData((prevData) => ({
  //       ...prevData,
  //       floor_2: {
  //         ...prevData.floor_2,
  //         occupied: occupied_2.length,
  //         vacant: vacant_2.length,
  //         damaged: damaged_2.length,
  //         reserved: reserved_2.length,
  //       },
  //     }));
  //     // get floor 3 data
  //     for (let i = 0; i < floor_3_zones.length; i++) {
  //       const floor_data = response_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Building Zone"]?.value
  //             .slice(-1)
  //             .toLowerCase() === floor_3_zones[i]
  //       );
  //       // get occupied, vacant, damaged and reserved data in each floor 3 zone
  //       let occupied = floor_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //           "occupied"
  //       );
  //       let damaged = floor_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //           "damaged"
  //       );
  //       let vacant = floor_data.filter(
  //         (asset) =>
  //           asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //           "vacant"
  //       );
  //       let reserved = floor_data.filter((asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value
  //           .toLowerCase()
  //           .includes("reserved")
  //       );
  //       // set floor 3 zones data
  //       setData((prevData) => ({
  //         ...prevData,
  //         zone_data: {
  //           ...prevData.zone_data,
  //           [floor_3_zones[i]]: floor_data,
  //         },
  //         floor_3: {
  //           ...prevData.floor_3,
  //           zones: {
  //             ...prevData.floor_3.zones,
  //             [floor_3_zones[i]]: {
  //               ...prevData.floor_3.zones[floor_3_zones[i]],
  //               occupied: occupied.length,
  //               vacant: vacant.length,
  //               damaged: damaged.length,
  //               reserved: reserved.length,
  //               total: floor_data.length,
  //             },
  //           },
  //         },
  //       }));
  //       f3fetchedData.push(...floor_data);
  //     }
  //     // get occupied, vacant, damaged and reserved data in floor 3 zones
  //     let occupied_3 = f3fetchedData.filter(
  //       (asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //         "occupied"
  //     );
  //     let damaged_3 = f3fetchedData.filter(
  //       (asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //         "damaged"
  //     );
  //     let vacant_3 = f3fetchedData.filter(
  //       (asset) =>
  //         asset.custom_fields["Workspace-Status"]?.value.toLowerCase() ===
  //         "vacant"
  //     );
  //     let reserved_3 = f3fetchedData.filter((asset) =>
  //       asset.custom_fields["Workspace-Status"]?.value
  //         .toLowerCase()
  //         .includes("reserved")
  //     );
  //     // set floor 3 data
  //     setData((prevData) => ({
  //       ...prevData,
  //       floor_3: {
  //         ...prevData.floor_3,
  //         occupied: occupied_3.length,
  //         vacant: vacant_3.length,
  //         damaged: damaged_3.length,
  //         reserved: reserved_3.length,
  //       },
  //     }));
  //   };
  //   setLoading(false);
  //   fetchData();
  // }, [isFetching]);

  return (
    <GlobalContext.Provider
      value={{
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
