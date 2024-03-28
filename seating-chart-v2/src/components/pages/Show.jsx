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
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWY4YWI3OTYxZjcxZGU3MDNlM2I1NWZmM2U2MmQyYTYzNDk5OWVlODMzODM2YzJjNDg1N2U4MGIwNDMyYTZkNGIwYjczMWZlYTBlZGE3ZTgiLCJpYXQiOjE3MDg0MzAyMDYuOTA0OTcxLCJuYmYiOjE3MDg0MzAyMDYuOTA0OTczLCJleHAiOjIxODE4MTU4MDYuODc5MjE0LCJzdWIiOiIyMDYiLCJzY29wZXMiOltdfQ.BC2S1QqF_L9m0wv3VJAfH5XsqJ-Ycw01LX01TOj8g8_kqBq6Q9SPMIyH2JrvNTJjnPuVRbsJfjTRLMxr3fKOAzFlb0l_IsHEnZPGMWi2YN5XJY6l6USWRjb1JPmQKEtefsqoskyN5AzbkBQLxHlkel3hHJlkLKwNvhdEjgkCG6Ll23y2Rc9jwT9vb80n5QDj-dCBRd7-4MKjJgUXhU3asIAqPp9ykfolNlwIWSas-iwK3GjQmAVVCsuQrMoeFuOSV5_cstGs2_GW-ManeDpdup7Zf9Qxk-u_yh3SIEqLIWZW_iTy5Txlpp0Sz8PqMXZ_EsirumH3lMxAhbNEO7IFGKfYer-ni6dvW9EkrAn0OX4Rx636wIJ-vamrjo6_snbbPyr4eibfWRPD13pZenMF96Gv3UBD5qJ831HdIMG9kb3kS04PRYI8RTPu0l5rAiyvDe81kMykHOzBhcsMbMWkpVT1mA33ARD3bglKfckvtSV95rcK9bF0bo-nHsPeQt9r5FZ2R1djl9jaS_VXYK0bOpJVdSh7vDwqmIAmU-g13NZJmC92dTE5nrbgFsvZ_hrg6tYfzA5ftzTPh2jHm70C3QbL1gc1q2n2O55ZU7fXAgyVd_CA8KHS2ySbfJkCagdVC4h1NIhm3XfdAxNs0k8Eho2x4aQcujJUm0AjluykDs8"; // Replace "your_token_here" with your actual token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(url, config);
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
        const status = workspace_id == "J0016" ? "damaged" : "Vacant";
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
