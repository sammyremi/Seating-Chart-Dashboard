import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

// floor zones
const floor_2_zones = ["d", "e", "h", "i"];
const floor_3_zones = ["j", "k", "l", "m", "n", "q", "r"];

// create custom hook
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [loading, setLoading] = useState(true);
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
          zone_data: [],
        },
        e: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
        h: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
        i: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
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
          zone_data: [],
        },
        k: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
        l: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
        m: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
        n: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
        q: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
        r: {
          total: "",
          occupied: "",
          damaged: "",
          vacant: "",
          reserved: "",
          zone_data: [],
        },
      },
    },
  });

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

          // set floor 2 zones data
          setData((prevData) => ({
            ...prevData,
            floor_2: {
              ...prevData.floor_2,
              zones: {
                ...prevData.floor_2.zones,
                [floor_2_zones[i]]: {
                  ...prevData.floor_2.zones[floor_2_zones[i]],
                  occupied: occupied.length,
                  vacant: vacant.length,
                  damaged: damaged.length,
                  total: zone_data.length,
                  zone_data: zone_data,
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

        // set floor 2 data
        setData((prevData) => ({
          ...prevData,
          floor_2: {
            ...prevData.floor_2,
            occupied: occupied.length,
            vacant: vacant.length,
            damaged: damaged.length,
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

          // set floor 3 zones data
          setData((prevData) => ({
            ...prevData,
            floor_3: {
              ...prevData.floor_3,
              zones: {
                ...prevData.floor_3.zones,
                [floor_3_zones[i]]: {
                  ...prevData.floor_3.zones[floor_3_zones[i]],
                  occupied: occupied.length,
                  vacant: vacant.length,
                  damaged: damaged.length,
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

        // set floor 3 data
        setData((prevData) => ({
          ...prevData,
          floor_3: {
            ...prevData.floor_3,
            occupied: occupied.length,
            vacant: vacant.length,
            damaged: damaged.length,
          },
        }));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ data, setData, loading, setLoading }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
