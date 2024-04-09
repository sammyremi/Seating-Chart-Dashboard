/* eslint-disable react/prop-types */
import DeskSVG from "./DeskSVG";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Table = ({ data }) => {
  const acceptedItReserved = ["reserved (it)", "reserved it"];
  const acceptedDevReserved = ["reserved (dev)", "reserved dev"];
  const acceptedOpsReserved = ["reserved (ops)", "reserved ops"];
  const navigate = useNavigate();
  const { sorter } = useGlobalContext();

  sorter(data, "asc");

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
          </tr>
        </thead>
        <tbody>
          {data.map((desk) => {
            const id = desk.id;
            const status = desk.custom_fields["Workspace Status"]?.value;
            const campaign = desk.custom_fields["Campaign"]?.value;
            const desk_id = desk.custom_fields["Workspace"]?.value;

            const first_char = desk_id.charAt(0).toLowerCase();
            return (
              <tr
                key={`${first_char}_${id}`}
                className="border-b hover:bg-sky-100 "
                // show desk id
                onClick={() => {
                  navigate(`/zone_${first_char}s/${id}/${desk_id}`);
                }}
              >
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
                        : acceptedItReserved.includes(status.toLowerCase())
                        ? "bg-blue-600"
                        : acceptedOpsReserved.includes(status.toLowerCase())
                        ? "bg-purple-400"
                        : acceptedDevReserved.includes(status.toLowerCase())
                        ? "bg-amber-800"
                        : status.toLowerCase() === "occupied"
                        ? "bg-[#FFA500]"
                        : status.toLowerCase() === "damaged"
                        ? "bg-red-600"
                        : "bg-gray-900"
                    } rounded px-2 py-1`}
                  >
                    {/* capitalize status */}
                    {[
                      status[0].toUpperCase(),
                      ...status.slice(1).toLowerCase(),
                    ].join("")}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">{campaign}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
