import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

const Show = () => {
  const { zone, id } = useParams();
  const [data, setData] = useState([]);
  const url = `/${zone}/${id}.json`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const updatedData = {
      desk_id: data.desk_id,
      status: data.status,
      campaign: data.campaign,
    };

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": token,
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Updated resource:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const zones = await response.json();
        console.log(zones);
        setData(zones);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <form>
        <div class="mb-6">
          <label
            for="desk_id"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Desk ID
          </label>
          <input
            type="string"
            id="desk_id"
            value={data.desk_id}
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, desk_id: e.target.value });
            }}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="status"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <select
            id="status"
            value={data.status}
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, status: e.target.value });
            }}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Occupied</option>
            <option>Damaged</option>
            <option>Vacant</option>
          </select>
        </div>
        <div class="mb-6">
          <label
            for="campaign"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Campaign
          </label>
          <input
            type="string"
            id="campaign"
            value={data.campaign}
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, campaign: e.target.value });
            }}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Show;
