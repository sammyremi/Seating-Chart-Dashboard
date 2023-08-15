import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../Table";
import D_ZoneChart from "../zone charts/D/D_ZoneChart";
import E_ZoneChart from "../zone charts/E/E_ZoneChart";
import H_ZoneChart from "../zone charts/H/H_ZoneChart";
import I_ZoneChart from "../zone charts/I/I_ZoneChart";
import J_ZoneChart from "../zone charts/J/J_ZoneChart";
import K_ZoneChart from "../zone charts/K/K_ZoneChart";
import L_ZoneChart from "../zone charts/L/L_ZoneChart";
import M_ZoneChart from "../zone charts/M/M_ZoneChart";
import N_ZoneChart from "../zone charts/N/N_ZoneChart";
import Q_ZoneChart from "../zone charts/Q/Q_ZoneChart";
import R_ZoneChart from "../zone charts/R/R_ZoneChart";

const Zone = () => {
  const { zone_name } = useParams();
  const [data, setData] = useState([]);
  const url = `/${zone_name}`;

  const zone_id_array = zone_name.split("");
  const zone_id = zone_id_array[zone_id_array.length - 2];

  let chartComponent;
  switch (zone_id.toUpperCase()) {
    case "D":
      chartComponent = <D_ZoneChart />;
      break;
    case "E":
      chartComponent = <E_ZoneChart />;
      break;
    case "H":
      chartComponent = <H_ZoneChart />;
      break;
    case "I":
      chartComponent = <I_ZoneChart />;
      break;
    case "J":
      chartComponent = <J_ZoneChart />;
      break;
    case "K":
      chartComponent = <K_ZoneChart />;
      break;
    case "L":
      chartComponent = <L_ZoneChart />;
      break;
    case "M":
      chartComponent = <M_ZoneChart />;
      break;
    case "N":
      chartComponent = <N_ZoneChart />;
      break;
    case "Q":
      chartComponent = <Q_ZoneChart />;
      break;
    case "R":
      chartComponent = <R_ZoneChart />;
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const zones = await response.json();
        setData(zones);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      <p className="text-3xl font-bold underline">
        Zone {zone_id.toUpperCase()}
      </p>
      {chartComponent}
      <Table data={data} />
    </div>
  );
};

export default Zone;
