import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../Context";
import Loading from "../Loading";
import DeskSVG from "../DeskSVG";

const Show = () => {
  const { zone, id, desk_id: workspace_id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setActiveSideNav, baseURL } = useGlobalContext();

  const url = `${baseURL}/${id}`;

  let zone_name = zone.slice(0, -1);
  const navigate = useNavigate();

  // get desk details
  useEffect(() => {
    setActiveSideNav("zones");
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        const desk_id = response.data.custom_fields.Workspace.value;
        const status = response.data.custom_fields["Workspace-Status"]?.value;
        const campaign = response.data.custom_fields.Campaign.value;
        setData({ id, desk_id, status, campaign });
        setLoading(false);
      } catch (error) {
        // id not found; workspace vacant.
        console.log(error);
        const desk_id = workspace_id;
        const status = "Vacant";
        const campaign = undefined;
        setData({ id, desk_id, status, campaign });
        setLoading(false);
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
            className="block text-sm font-medium text-sky-700 w-1/3 p-3.5 mx-auto h-1.5 pl-0"
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
            className="mb-3 mt-2 bg-gray-50 border border-sky-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 mx-auto focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-sky-700 w-1/3 p-3.5 mx-auto h-1.5 pl-0"
          >
            Status
          </label>
          <input
            type="string"
            id="status"
            value={data.status}
            onChange={(e) => {
              console.log(e.target.value);
              setData({ ...data, campaign: e.target.value });
            }}
            className="mb-3  mt-2 bg-gray-50 border border-sky-300 text-gray-500 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-1/3 p-2.5 mx-auto focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="campaign"
            className="block text-sm font-medium text-sky-700 w-1/3 p-3.5 mx-auto h-1.5 pl-0"
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
            className="mb-3 mt-2 bg-gray-50 border border-sky-300 text-gray-500 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-1/3 p-2.5 mx-auto focus:outline-none"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Show;
