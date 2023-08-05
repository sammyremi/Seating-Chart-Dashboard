import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../Table";

const Zone = () => {
  const { zone_name } = useParams();
  const [data, setData] = useState([]);
  const url = `/${zone_name}`;

  const zone_id_array = zone_name.split("");
  const zone_id = zone_id_array[zone_id_array.length - 2];

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
      <Table data={data} />
    </div>
  );
};

export default Zone;
