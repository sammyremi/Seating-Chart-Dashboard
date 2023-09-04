import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const floor_2_zones = ["d", "e", "h", "i"];
const floor_3_zones = ["j", "k", "l", "m", "n", "q", "r"];

const Home = () => {
  const [data, setData] = useState({
    "floor_2": {
        "occupied": '',
        "damaged": '',
        "vacant": '',
        "reserved": '',
        "zones": {
          "d": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "e": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "h": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "i": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
        }
    },
    "floor_3": {
        "occupied": '',
        "damaged": '',
        "vacant": '',
        "reserved": '',
        "zones": {
          "j": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "k": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "l": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "m": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "n": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "q": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
          "r": {
            "total": '',
            "occupied": '',
            "damaged": '',
            "vacant": '',
            "reserved": '',
          },
        }
    },
});
  const [f2data, setf2Data] = useState([])
  const [f3data, setf3Data] = useState([])
  const [loading, setLoading] = useState(true);

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
          let occupied = zone_data.filter((desk) => desk.status.toLowerCase() === 'occupied')
          let damaged = zone_data.filter((desk) => desk.status.toLowerCase() === 'damaged')
          let vacant = zone_data.filter((desk) => desk.status.toLowerCase() === 'vacant')

          // set floor 2 zones data
          setData((prevData,) => ({...prevData, 
            "floor_2": {...prevData.floor_2, 
              "zones": {...prevData.floor_2.zones, 
                [floor_2_zones[i]]: {...prevData.floor_2.zones[floor_2_zones[i]], 
                  "occupied": occupied.length,
                  "vacant": vacant.length, 
                  "damaged": damaged.length,
                  "total": zone_data.length,
                }}
            }
          }))
        }
        // get occupied, vacant, damaged and reserved data in floor 2
        let occupied = f2fetchedData.filter((desk) => desk.status.toLowerCase() === 'occupied')
        let damaged = f2fetchedData.filter((desk) => desk.status.toLowerCase() === 'damaged')
        let vacant = f2fetchedData.filter((desk) => desk.status.toLowerCase() === 'vacant')

        // set floor 2 data
        setData((prevData) => ({...prevData, 
          "floor_2": {...prevData.floor_2, "occupied": occupied.length,"vacant": vacant.length, "damaged": damaged.length}
        }))
        
        // fetch floor 3 data
        for (let i = 0; i < floor_3_zones.length; i++) {
          const response = await fetch(`/zone_${floor_3_zones[i]}s`);
          const zone_data = await response.json();
          f3fetchedData.push(...zone_data);

          // get occupied, vacant, damaged and reserved data in each floor 3 zones
          let occupied = zone_data.filter((desk) => desk.status.toLowerCase() === 'occupied')
          let damaged = zone_data.filter((desk) => desk.status.toLowerCase() === 'damaged')
          let vacant = zone_data.filter((desk) => desk.status.toLowerCase() === 'vacant')

          // set floor 3 zones data
          setData((prevData,) => ({...prevData, 
            "floor_3": {...prevData.floor_3, 
              "zones": {...prevData.floor_3.zones, 
                [floor_3_zones[i]]: {...prevData.floor_3.zones[floor_3_zones[i]], 
                  "occupied": occupied.length,
                  "vacant": vacant.length, 
                  "damaged": damaged.length,
                  "total": zone_data.length,
                }}
            }
          }))
        }

        // get occupied, vacant, damaged and reserved data in floor 3
         occupied = f3fetchedData.filter((desk) => desk.status.toLowerCase() === 'occupied')
         damaged = f3fetchedData.filter((desk) => desk.status.toLowerCase() === 'damaged')
         vacant = f3fetchedData.filter((desk) => desk.status.toLowerCase() === 'vacant')

        // set floor 3 data
        setData((prevData) => ({...prevData, 
          "floor_3": {...prevData.floor_3, "occupied": occupied.length,"vacant": vacant.length, "damaged": damaged.length}
        }))

        setf2Data((prevData) => [...prevData, ...f2fetchedData]);
        setf3Data((prevData) => [...prevData, ...f3fetchedData]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Chart data and options
  const floor2data = {
    labels: ["", "Zone D", "Zone E", "Zone H", "Zone I","", ""],
    datasets: [
      {
        label: "Damaged",
        data: [, data.floor_2.zones.d.damaged, data.floor_2.zones.e.damaged, data.floor_2.zones.h.damaged, data.floor_2.zones.i.damaged,, ],
        backgroundColor: "#dc2626",
        barPercentage: 1, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
      {
        label: "Vacant",
        data: [, data.floor_2.zones.d.vacant, data.floor_2.zones.e.vacant, data.floor_2.zones.h.vacant, data.floor_2.zones.i.vacant,, ],
        backgroundColor: "#4ade80",
        barPercentage: 1, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
      {
        label: "Occupied",
        data: [, data.floor_2.zones.d.occupied, data.floor_2.zones.e.occupied, data.floor_2.zones.h.occupied, data.floor_2.zones.i.occupied,, ],
        backgroundColor: "#ffa500",
        barPercentage: 1, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
    ],
  };
  const floor3data = {
    labels: [
      "Zone J",
      "Zone K",
      "Zone L",
      "Zone M",
      "Zone N",
      "Zone Q",
      "Zone R",
    ],
    datasets: [
     
      {
        label: "Damaged",
        data: [data.floor_3.zones.j.damaged, data.floor_3.zones.k.damaged, data.floor_3.zones.l.damaged, data.floor_3.zones.m.damaged, data.floor_3.zones.n.damaged, data.floor_3.zones.q.damaged, data.floor_3.zones.r.damaged],
        backgroundColor: "#dc2626",
        barPercentage: 1.0, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
      {
        label: "Vacant",
        data: [data.floor_3.zones.j.vacant, data.floor_3.zones.k.vacant, data.floor_3.zones.l.vacant, data.floor_3.zones.m.vacant, data.floor_3.zones.n.vacant, data.floor_3.zones.q.vacant, data.floor_3.zones.r.vacant],
        backgroundColor: "#4ade80",
        barPercentage: 1.0, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
      {
        label: "Occupied",
        data: [data.floor_3.zones.j.occupied, data.floor_3.zones.k.occupied, data.floor_3.zones.l.occupied, data.floor_3.zones.m.occupied, data.floor_3.zones.n.occupied, data.floor_3.zones.q.occupied, data.floor_3.zones.r.occupied],
        backgroundColor: "#FFA500",
        barPercentage: 1.0, // Set the width of the bars to 100% of the available space
        categoryPercentage: 0.8, // Set the spacing between bars to 0%
        base: -3,
      },
    ],
  };

  const chart_options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "center",
        labels: {
          font: {
            size: 13,
          },
          boxWidth: 20, 
        },
      },
      datalabels: {
        display: true,
        color: 'black',
        anchor: 'end',
        align: 'top',
        offset: -6,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: -3,
        ticks: { 
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    // animation: false,

  };

  


  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full py-2">
      {/* Floor 2 */}
      <div className="text-center">
        <div className="">
          <p className="text-base">Floor 2</p>
          <div className="flex justify-center gap-x-6 mb-4">
            <Link to={"/workstations/of2"}>
              <div className="flex flex-col place-content-center bg-sky-200 h-12 p-4 rounded w-28 drop-shadow-md">
                <div className="flex justify-center gap-x-2 font-bold text-sky-700">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -7.72 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M99.89,96.65c2.9,0,5.25,0.5,5.25,1.12c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12 C94.63,97.16,96.98,96.65,99.89,96.65L99.89,96.65z M33.47,0h52.4c0.83,0,1.51,0.68,1.51,1.5v31.18c0,0.83-0.68,1.51-1.51,1.51 h-52.4c-0.83,0-1.51-0.68-1.51-1.51V1.51C31.96,0.68,32.64,0,33.47,0L33.47,0L33.47,0z M52.84,36.27H66.5 c0.03,2.23,0.9,4.24,3.21,5.86h50.52c0.73,0,1.39,0.3,1.87,0.77c0.48,0.48,0.78,1.14,0.78,1.87v7.86c0,0.73-0.3,1.39-0.78,1.87 c-0.48,0.48-1.14,0.78-1.87,0.78h-0.17v50.28c0,0.51-0.21,0.98-0.55,1.31l-0.01,0.01c-0.34,0.34-0.8,0.55-1.31,0.55H82.07 c-0.51,0-0.98-0.21-1.32-0.55c-0.06-0.06-0.12-0.13-0.17-0.2c-0.24-0.31-0.38-0.7-0.38-1.12V55.28H22.39v50.28 c0,0.52-0.21,0.98-0.55,1.32c-0.34,0.34-0.81,0.55-1.32,0.55h-8.86c-0.51,0-0.97-0.21-1.31-0.55l0,0l0,0l0,0 c-0.34-0.34-0.55-0.8-0.55-1.31V55.28H2.64c-0.73,0-1.39-0.3-1.87-0.78C0.3,54.02,0,53.36,0,52.63v-7.86c0-0.73,0.3-1.39,0.78-1.87 c0.48-0.48,1.14-0.77,1.87-0.77h46.94C51.49,40.65,52.85,38.85,52.84,36.27L52.84,36.27L52.84,36.27z M59.67,29.11 c1.07,0,1.93,0.87,1.93,1.93c0,1.07-0.87,1.93-1.93,1.93c-1.07,0-1.94-0.87-1.94-1.93C57.74,29.98,58.6,29.11,59.67,29.11 L59.67,29.11z M36.49,2.84h46.35c0.73,0,1.33,0.6,1.33,1.33v22.4c0,0.73-0.6,1.33-1.33,1.33H36.49c-0.73,0-1.33-0.6-1.33-1.33V4.17 C35.16,3.44,35.76,2.84,36.49,2.84L36.49,2.84L36.49,2.84z M83.28,69.49h33.7v-14.2h-33.7V69.49L83.28,69.49z M116.99,72.56h-33.7 v14.48h33.7V72.56L116.99,72.56z M116.99,90.13h-33.7v14.22h33.7V90.13L116.99,90.13z M119.8,45.2H3.08v6.99H119.8V45.2L119.8,45.2 z M19.31,55.28h-6.44v49.06h6.44V55.28L19.31,55.28z M99.89,61.12c2.9,0,5.25,0.47,5.25,1.06s-2.35,1.06-5.25,1.06 c-2.9,0-5.25-0.48-5.25-1.06S96.98,61.12,99.89,61.12L99.89,61.12z M99.89,78.86c2.9,0,5.25,0.5,5.25,1.12 c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12C94.63,79.36,96.98,78.86,99.89,78.86L99.89,78.86z"
                      />
                    </g>
                  </svg>
                  <span>{data.floor_2.occupied}</span>
                </div>
                <p className="text-xs">Occupied</p>
              </div>
            </Link>         
            <Link to={"/workstations/vf2"}>
              <div className="flex flex-col place-content-center bg-sky-200 h-12 p-4 rounded w-28 drop-shadow-md">
                <div className="flex justify-center gap-x-2 font-bold text-sky-700">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 ml-2 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -24.88 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M97.13,61.06c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,61.06,97.13,61.06L97.13,61.06z M25.08,14.73v56.31c0,0.58-0.24,1.1-0.61,1.48c-0.38,0.38-0.9,0.61-1.48,0.61h-9.92 c-0.57,0-1.09-0.23-1.47-0.61l0,0l0,0l0,0c-0.38-0.38-0.61-0.9-0.61-1.47V14.73H2.96c-0.82,0-1.56-0.33-2.09-0.87 C0.33,13.32,0,12.58,0,11.77V2.96C0,2.14,0.33,1.4,0.87,0.87S2.14,0,2.96,0h116.96c0.82,0,1.56,0.33,2.09,0.87s0.87,1.28,0.87,2.09 v8.81c0,0.82-0.33,1.56-0.87,2.09c-0.54,0.54-1.28,0.87-2.09,0.87h-0.19v56.31c0,0.57-0.24,1.09-0.61,1.47l-0.01,0.01 c-0.38,0.38-0.9,0.61-1.47,0.61H77.18c-0.58,0-1.1-0.23-1.48-0.61c-0.07-0.07-0.13-0.14-0.19-0.22c-0.27-0.35-0.43-0.79-0.43-1.26 V14.73H25.08L25.08,14.73z M78.54,30.64h37.74V14.73H78.54V30.64L78.54,30.64z M116.28,34.09H78.54V50.3h37.74V34.09L116.28,34.09z M116.28,53.75H78.54v15.93h37.74V53.75L116.28,53.75z M119.43,3.45H3.45v7.83h115.98V3.45L119.43,3.45z M21.63,14.73h-7.21v54.94 h7.21V14.73L21.63,14.73z M97.13,21.27c3.25,0,5.88,0.53,5.88,1.19s-2.63,1.19-5.88,1.19c-3.25,0-5.88-0.53-5.88-1.19 S93.88,21.27,97.13,21.27L97.13,21.27z M97.13,41.13c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,41.13,97.13,41.13L97.13,41.13z"
                      />
                    </g>
                  </svg>
                  <span>{data.floor_2.vacant}</span>
                </div>
                <span className="text-xs">Vacant</span>
              </div>
            </Link>     
            <Link to={"/workstations/df2"}>
              <div className="flex flex-col place-content-center bg-sky-200 h-12 p-4 rounded w-28 drop-shadow-md">
                <div className="flex justify-center gap-x-2 font-bold text-sky-700">
                  <svg
                    className="flex-shrink-0 ml-2 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 0 54 36"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0444 0.705566H48.9428C51.3359 0.705566 53.25 2.61963 53.25 5.01275V30.9215C53.25 33.3146 51.3359 35.2965 48.9428 35.2965H18.0444L0.75 18.0021L18.0444 0.705566ZM39.4425 28.5962L43.3384 24.7681L36.5025 17.9999L43.3384 11.2318L39.4425 7.33588L32.6744 14.104L25.9741 7.33588L22.0781 11.164L28.8463 17.9999L22.0781 24.7003L25.9741 28.5284L32.7422 21.8281L39.4425 28.5962Z"
                      fill="#03626E"
                    />
                  </svg>
                  <span>{data.floor_2.damaged}</span>
                </div>
                <p className="text-xs">Damaged</p>
              </div>
            </Link>
            
          </div>
        </div>
        <div className="flex gap-x-4">
          {/* Totals */}
        <div 
        // className="text-gray-500 mt-1 ml-1 absolute w-20 text-xs top-56"
        className="w-20 text-xs text-gray-500"
        >
          <p className="font-bold mb-2 text-sm">Total</p>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone D</p>
            <p className="inline-block text-right w-1/4">{data.floor_2.zones.d.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone E</p>
            <p className="inline-block text-right w-1/4">{data.floor_2.zones.e.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone H</p>
            <p className="inline-block text-right w-1/4">{data.floor_2.zones.h.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone I</p>
            <p className="inline-block text-right w-1/4">{data.floor_2.zones.i.total}</p>
          </article>
        </div>
        {/* Barchart */}
        <div className="basis-10/12">
          <Bar height={200} width={100} data={floor2data} options={chart_options}></Bar>
        </div>
        </div>
      </div>

      {/* Floor 3 */}
      <div className="text-center">
        <div className="">
          <p className="text-base">Floor 3</p>
          <div className="flex justify-center gap-x-6 mb-4">
            <Link to={"/workstations/of3"}>
              <div className="flex flex-col place-content-center bg-sky-200 h-12 p-4 rounded w-28 drop-shadow-md">
                <div className="flex justify-center gap-2 font-bold text-sky-700">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -7.72 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M99.89,96.65c2.9,0,5.25,0.5,5.25,1.12c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12 C94.63,97.16,96.98,96.65,99.89,96.65L99.89,96.65z M33.47,0h52.4c0.83,0,1.51,0.68,1.51,1.5v31.18c0,0.83-0.68,1.51-1.51,1.51 h-52.4c-0.83,0-1.51-0.68-1.51-1.51V1.51C31.96,0.68,32.64,0,33.47,0L33.47,0L33.47,0z M52.84,36.27H66.5 c0.03,2.23,0.9,4.24,3.21,5.86h50.52c0.73,0,1.39,0.3,1.87,0.77c0.48,0.48,0.78,1.14,0.78,1.87v7.86c0,0.73-0.3,1.39-0.78,1.87 c-0.48,0.48-1.14,0.78-1.87,0.78h-0.17v50.28c0,0.51-0.21,0.98-0.55,1.31l-0.01,0.01c-0.34,0.34-0.8,0.55-1.31,0.55H82.07 c-0.51,0-0.98-0.21-1.32-0.55c-0.06-0.06-0.12-0.13-0.17-0.2c-0.24-0.31-0.38-0.7-0.38-1.12V55.28H22.39v50.28 c0,0.52-0.21,0.98-0.55,1.32c-0.34,0.34-0.81,0.55-1.32,0.55h-8.86c-0.51,0-0.97-0.21-1.31-0.55l0,0l0,0l0,0 c-0.34-0.34-0.55-0.8-0.55-1.31V55.28H2.64c-0.73,0-1.39-0.3-1.87-0.78C0.3,54.02,0,53.36,0,52.63v-7.86c0-0.73,0.3-1.39,0.78-1.87 c0.48-0.48,1.14-0.77,1.87-0.77h46.94C51.49,40.65,52.85,38.85,52.84,36.27L52.84,36.27L52.84,36.27z M59.67,29.11 c1.07,0,1.93,0.87,1.93,1.93c0,1.07-0.87,1.93-1.93,1.93c-1.07,0-1.94-0.87-1.94-1.93C57.74,29.98,58.6,29.11,59.67,29.11 L59.67,29.11z M36.49,2.84h46.35c0.73,0,1.33,0.6,1.33,1.33v22.4c0,0.73-0.6,1.33-1.33,1.33H36.49c-0.73,0-1.33-0.6-1.33-1.33V4.17 C35.16,3.44,35.76,2.84,36.49,2.84L36.49,2.84L36.49,2.84z M83.28,69.49h33.7v-14.2h-33.7V69.49L83.28,69.49z M116.99,72.56h-33.7 v14.48h33.7V72.56L116.99,72.56z M116.99,90.13h-33.7v14.22h33.7V90.13L116.99,90.13z M119.8,45.2H3.08v6.99H119.8V45.2L119.8,45.2 z M19.31,55.28h-6.44v49.06h6.44V55.28L19.31,55.28z M99.89,61.12c2.9,0,5.25,0.47,5.25,1.06s-2.35,1.06-5.25,1.06 c-2.9,0-5.25-0.48-5.25-1.06S96.98,61.12,99.89,61.12L99.89,61.12z M99.89,78.86c2.9,0,5.25,0.5,5.25,1.12 c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12C94.63,79.36,96.98,78.86,99.89,78.86L99.89,78.86z"
                      />
                    </g>
                  </svg>
                  <span>{data.floor_3.occupied}</span>
                </div>
                <p className="text-xs">Occupied</p>
              </div>
            </Link>
            <Link to={"workstations/vf3"}>
              <div className="flex flex-col place-content-center bg-sky-200 h-12 p-4 rounded w-28 drop-shadow-md">
                <div className="flex justify-center gap-2 font-bold text-sky-700">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 ml-2 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -24.88 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M97.13,61.06c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,61.06,97.13,61.06L97.13,61.06z M25.08,14.73v56.31c0,0.58-0.24,1.1-0.61,1.48c-0.38,0.38-0.9,0.61-1.48,0.61h-9.92 c-0.57,0-1.09-0.23-1.47-0.61l0,0l0,0l0,0c-0.38-0.38-0.61-0.9-0.61-1.47V14.73H2.96c-0.82,0-1.56-0.33-2.09-0.87 C0.33,13.32,0,12.58,0,11.77V2.96C0,2.14,0.33,1.4,0.87,0.87S2.14,0,2.96,0h116.96c0.82,0,1.56,0.33,2.09,0.87s0.87,1.28,0.87,2.09 v8.81c0,0.82-0.33,1.56-0.87,2.09c-0.54,0.54-1.28,0.87-2.09,0.87h-0.19v56.31c0,0.57-0.24,1.09-0.61,1.47l-0.01,0.01 c-0.38,0.38-0.9,0.61-1.47,0.61H77.18c-0.58,0-1.1-0.23-1.48-0.61c-0.07-0.07-0.13-0.14-0.19-0.22c-0.27-0.35-0.43-0.79-0.43-1.26 V14.73H25.08L25.08,14.73z M78.54,30.64h37.74V14.73H78.54V30.64L78.54,30.64z M116.28,34.09H78.54V50.3h37.74V34.09L116.28,34.09z M116.28,53.75H78.54v15.93h37.74V53.75L116.28,53.75z M119.43,3.45H3.45v7.83h115.98V3.45L119.43,3.45z M21.63,14.73h-7.21v54.94 h7.21V14.73L21.63,14.73z M97.13,21.27c3.25,0,5.88,0.53,5.88,1.19s-2.63,1.19-5.88,1.19c-3.25,0-5.88-0.53-5.88-1.19 S93.88,21.27,97.13,21.27L97.13,21.27z M97.13,41.13c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,41.13,97.13,41.13L97.13,41.13z"
                      />
                    </g>
                  </svg>
                  <span>{data.floor_3.vacant}</span>
                </div>
                <p className="text-xs">Vacant</p>
              </div>
            </Link>
            <Link to={"workstations/df3"}>
              <div className="flex flex-col place-content-center bg-sky-200 h-12 p-4 rounded w-28 drop-shadow-md">
                <div className="flex justify-center gap-2 font-bold text-sky-700">
                  <svg
                    className="flex-shrink-0 ml-2 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 0 54 36"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0444 0.705566H48.9428C51.3359 0.705566 53.25 2.61963 53.25 5.01275V30.9215C53.25 33.3146 51.3359 35.2965 48.9428 35.2965H18.0444L0.75 18.0021L18.0444 0.705566ZM39.4425 28.5962L43.3384 24.7681L36.5025 17.9999L43.3384 11.2318L39.4425 7.33588L32.6744 14.104L25.9741 7.33588L22.0781 11.164L28.8463 17.9999L22.0781 24.7003L25.9741 28.5284L32.7422 21.8281L39.4425 28.5962Z"
                      fill="#03626E"
                    />
                  </svg>
                  <span>{data.floor_3.damaged}</span>
                </div>
                <p className="text-xs mt-0">Damaged</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex gap-x-4">
          {/* Totals */}
        <div className="w-20 text-xs text-gray-500">
          <p className="font-bold mb-2 text-sm">Total</p>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone J</p>
            <p className="inline-block text-right w-1/4">{data.floor_3.zones.j.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone K</p>
            <p className="inline-block text-right w-1/4">{data.floor_3.zones.k.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone L</p>
            <p className="inline-block text-right w-1/4">{data.floor_3.zones.l.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone M</p>
            <p className="inline-block text-right w-1/4">{data.floor_3.zones.m.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone N</p>
            <p className="inline-block text-right w-1/4">{data.floor_3.zones.n.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone Q</p>
            <p className="inline-block text-right w-1/4">{data.floor_3.zones.q.total}</p>
          </article>
          <article className="">
            <p className="inline-block text-left w-3/4">Zone R</p>
            <p className="inline-block text-right w-1/4">{data.floor_3.zones.r.total}</p>
          </article>
        </div>
          {/* Barchart */}
        <div className="basis-10/12">
          <Bar height={200} width={100} data={floor3data} options={chart_options}></Bar>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
