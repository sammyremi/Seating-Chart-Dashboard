import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "../Loading";
import DeskSVG from "../DeskSVG";

const Show = () => {
  const { zone, id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `/${zone}/${id}.json`;
  const {
    setRefresh,
    refresh,
    setActiveSideNav,
    acceptedDevReserved,
    acceptedItReserved,
    acceptedOpsReserved,
  } = useGlobalContext();

  let zone_name = zone.slice(0, -1);
  // console.log(zone_name.charAt(5));
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const updatedData = {
      desk_id: data.desk_id,
      status: data.status,
      campaign: data.campaign,
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": token,
        },
        body: JSON.stringify(updatedData),
      });
      console.log(JSON.stringify(updatedData));
      setRefresh(!refresh);
      toast.success(`${data.desk_id} updated successfully.`);
    } catch (error) {
      toast.error("Network response was not ok");
      console.log(error);
    }
  };

  // get desk details
  useEffect(() => {
    setActiveSideNav("zones");
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const zones = await response.json();
        console.log(zones);
        setData(zones);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    // back to home
    <div>
      <svg
        onClick={() => {
          navigate(`/zones/${zone_name}s`);
        }}
        className="cursor-pointer"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="#00AEEF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 18h3.75a5.25 5.25 0 100-10.5H5M7.5 4L4 7.5 7.5 11"
        />
      </svg>

      <div
        style={{
          textAlign: "center",
          fontSize: "24px",
          color: "#006F99",
          paddingBottom: "20px",
        }}
      >
        <p>{zone_name.toUpperCase()}</p>
      </div>

      <div className="mt-10 mb-2 flex items-center justify-center">
        <DeskSVG status={data.status} width={"w-32"} height={"w-40"} />
      </div>

      <form>
        <div>
          <label
            htmlFor="desk_id"
            className="block text-sm font-medium text-sky-400"
          ></label>
          <input
            type="string"
            id="desk_id"
            value={data.desk_id}
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, desk_id: e.target.value });
            }}
            className="mb-5 bg-gray-50 border border-sky-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 mx-auto focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="status"
            value={
              acceptedItReserved.includes(data.status.toLowerCase())
                ? "Reserved IT"
                : acceptedOpsReserved.includes(data.status.toLowerCase())
                ? "Reserved Ops"
                : acceptedDevReserved.includes(data.status.toLowerCase())
                ? "Reserved Dev"
                : data.status.toLowerCase() === "occupied"
                ? "Occupied"
                : data.status.toLowerCase() === "vacant"
                ? "Vacant"
                : data.status.toLowerCase() === "damaged"
                ? "Damaged"
                : ""
            }
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, status: e.target.value.toLowerCase() });
            }}
            className="mb-5 bg-gray-50 border border-sky-300 text-gray-500 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-1/3 p-2.5 mx-auto focus:outline-none "
          >
            <option>Select status...</option>
            <option>Occupied</option>
            <option>Damaged</option>
            <option>Vacant</option>
            <option>Reserved IT</option>
            <option>Reserved Ops</option>
            <option>Reserved Dev</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="campaign"
            className="block mb-2 text-sm font-medium text-gray-500"
          ></label>
          <input
            type="string"
            id="campaign"
            value={data.campaign}
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, campaign: e.target.value });
            }}
            className="mb-5 bg-gray-50 border border-sky-300 text-gray-500 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-1/3 p-2.5 mx-auto focus:outline-none"
            required
          />
        </div>
        <div className="text-center pt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-sky-300 hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Show;
