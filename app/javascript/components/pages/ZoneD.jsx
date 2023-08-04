import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ZoneD = () => {
  const [data, setData] = useState([]);
  const url = "/zone_ds";
  //   const url = "https://api.github.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const zones = await response.json();
        setData(zones);
        console.log(zones);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      <p className="text-3xl font-bold underline">Zone D</p>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <a href={`/zone_ds/${index + 1}`}>
              <p>
                {item.id} <span>{item.status}</span>{" "}
                <span>{item.campaign}</span>
              </p>
              <p>
                <a href={`/zone_ds/${index + 1}/edit`}>Edit</a>
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ZoneD;
