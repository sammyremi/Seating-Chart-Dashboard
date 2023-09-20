import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

// floor zones
const floor_2_zones = ["d", "e", "h", "i"];
const floor_3_zones = ["j", "k", "l", "m", "n", "q", "r"];

// create custom hook
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [current_user, setCurrent_user] = useState("");
  const [activeSideNav, setActiveSideNav] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchedDesk, setSearchedDesk] = useState("");
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

  const acceptedItReserved = ["reserved (it)", "reserved it"];
  const acceptedDevReserved = ["reserved (dev)", "reserved dev"];
  const acceptedOpsReserved = ["reserved (ops)", "reserved ops"];

  useEffect(() => {
    // Access the DOM element with the "app" ID
    const appElement = document.getElementById("app");

    // Get "current user"
    const user_details = appElement.getAttribute("data-auth");

    if (user_details !== null) {
      // convert from JSON to object
      setCurrent_user(JSON.parse(user_details));
    } else {
      console.log("User details is null");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const f2fetchedData = [];
        const f3fetchedData = [];

        // fetch floor 2 data
        for (let i = 0; i < floor_2_zones.length; i++) {
          const response = await fetch(`/zone_${floor_2_zones[i]}s`);
          const zone_data = await response.json();
          f2fetchedData.push(...zone_data);

          // get occupied, vacant, damaged and reserved data in each floor 2 zones
          let occupied = zone_data.filter(
            (desk) => desk.status.toLowerCase() === "occupied"
          );
          let damaged = zone_data.filter(
            (desk) => desk.status.toLowerCase() === "damaged"
          );
          let vacant = zone_data.filter(
            (desk) => desk.status.toLowerCase() === "vacant"
          );
          let reserved = zone_data.filter((desk) =>
            desk.status.toLowerCase().includes("reserved")
          );

          // set floor 2 zones data
          setData((prevData) => ({
            ...prevData,
            zone_data: {
              ...prevData.zone_data,
              [floor_2_zones[i]]: zone_data,
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
                  total: zone_data.length,
                },
              },
            },
          }));
        }
        // get occupied, vacant, damaged and reserved data in floor 2
        let occupied = f2fetchedData.filter(
          (desk) => desk.status.toLowerCase() === "occupied"
        );
        let damaged = f2fetchedData.filter(
          (desk) => desk.status.toLowerCase() === "damaged"
        );
        let vacant = f2fetchedData.filter(
          (desk) => desk.status.toLowerCase() === "vacant"
        );
        let reserved = f2fetchedData.filter((desk) =>
          desk.status.toLowerCase().includes("reserved")
        );

        // set floor 2 data length
        setData((prevData) => ({
          ...prevData,
          floor_2: {
            ...prevData.floor_2,
            occupied: occupied.length,
            vacant: vacant.length,
            damaged: damaged.length,
            reserved: reserved.length,
          },
        }));

        // fetch floor 3 data
        for (let i = 0; i < floor_3_zones.length; i++) {
          const response = await fetch(`/zone_${floor_3_zones[i]}s`);
          const zone_data = await response.json();
          f3fetchedData.push(...zone_data);

          // get occupied, vacant, damaged and reserved data in each floor 3 zones
          let occupied = zone_data.filter(
            (desk) => desk.status.toLowerCase() === "occupied"
          );
          let damaged = zone_data.filter(
            (desk) => desk.status.toLowerCase() === "damaged"
          );
          let vacant = zone_data.filter(
            (desk) => desk.status.toLowerCase() === "vacant"
          );
          let reserved = zone_data.filter((desk) =>
            desk.status.toLowerCase().includes("reserved")
          );

          // set floor 3 zones data
          setData((prevData) => ({
            ...prevData,
            zone_data: {
              ...prevData.zone_data,
              [floor_3_zones[i]]: zone_data,
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
                  total: zone_data.length,
                },
              },
            },
          }));
        }

        // get occupied, vacant, damaged and reserved data in floor 3
        occupied = f3fetchedData.filter(
          (desk) => desk.status.toLowerCase() === "occupied"
        );
        damaged = f3fetchedData.filter(
          (desk) => desk.status.toLowerCase() === "damaged"
        );
        vacant = f3fetchedData.filter(
          (desk) => desk.status.toLowerCase() === "vacant"
        );
        reserved = f3fetchedData.filter((desk) =>
          desk.status.toLowerCase().includes("reserved")
        );

        // set floor 3 data
        setData((prevData) => ({
          ...prevData,
          floor_3: {
            ...prevData.floor_3,
            occupied: occupied.length,
            vacant: vacant.length,
            damaged: damaged.length,
            reserved: reserved.length,
          },
        }));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <GlobalContext.Provider
      value={{
        data,
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
