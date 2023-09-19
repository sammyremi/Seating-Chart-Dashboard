import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DeskSVG from "./DeskSVG";

const Table = ({ data }) => {
  const { current_user } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-lg text-gray-700 bg-[#E9F9FD] border-b-2">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Desk ID
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Campaign
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((desk, index) => {
            const { desk_id, status, campaign, id } = desk;
            const first_char = desk_id.charAt(0).toLowerCase();
            return (
              <tr key={`${first_char}_${id}`} className="border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                >
                  <div className="flex flex-col justify-center place-items-center">
                    <DeskSVG status={status} />

                    <p className="flex-1 whitespace-nowrap">{desk_id}</p>
                  </div>
                </th>
                <td className="px-6 py-4 text-slate-50 text-center">
                  <span
                    className={`${
                      status.toLowerCase() === "vacant"
                        ? "bg-green-600"
                        : status.toLowerCase() === "reserved (it)"
                        ? "bg-blue-600"
                        : status.toLowerCase() === "reserved (ops)"
                        ? "bg-purple-400"
                        : status.toLowerCase() === "reserved (dev)"
                        ? "bg-amber-800"
                        : status.toLowerCase() === "occupied"
                        ? "bg-[#FFA500]"
                        : status.toLowerCase() === "damaged"
                        ? "bg-red-600"
                        : "bg-gray-900"
                    } rounded px-2 py-1`}
                  >
                    {status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">{campaign}</td>
                <td
                  className="px-6 py-4 text-sky-700 font-medium text-center"
                  onClick={() => {
                    if (current_user?.admin !== undefined) {
                      navigate(`/edit/zone_${first_char}s/${id}`);
                    } else {
                      toast.error("Login as Admin to Edit");
                    }
                  }}
                >
                  <Link>EDIT</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
