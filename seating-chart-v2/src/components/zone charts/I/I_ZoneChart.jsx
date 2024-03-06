import Desk from "../../Desk";
import { Link } from "react-router-dom";

const I_ZoneChart = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="ZoneI border-2 m-2 border-slate-400 rounded p-2 mx-auto my-0 w-[800px] grid grid-cols-17 grid-rows-11 gap-2.5 text-center">
        <div className="zoneh grid place-items-center bg-[#e9f9fd] rounded-sm col-start-1 col-end-3 row-start-1 row-end-12">
          {/* Zone H */}
          <Link to={"/zones/zone_hs"}>
            <div>
              <p>Zone H</p>
              <svg
                fill="#000000"
                className="w-7 h-7 text-slate-500"
                viewBox="0 0 24 24"
                id="left-arrow"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="primary"
                  d="M21,12H3M6,9,3,12l3,3"
                  style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                  }}
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        {/* Desk_id: #41-52 */}
        <div className="ocpd1  col-start-2 col-end-8 row-start-1 row-end-3 flex flex-col place-content-center">
          {/* occupied1 */}
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data[45]} style="-scale-x-100" desk_id="I0046" />
            <Desk data={data[44]} style="-scale-x-100" desk_id="I0045" />
            <Desk data={data[43]} style="-scale-x-100" desk_id="I0044" />
            <Desk data={data[42]} style="-scale-x-100" desk_id="I0043" />
            <Desk data={data[41]} style="-scale-x-100" desk_id="I0042" />
            <Desk data={data[40]} style="-scale-x-100" desk_id="I0041" />
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data[46]} desk_id="I0047" />
            <Desk data={data[47]} desk_id="I0048" />
            <Desk data={data[48]} desk_id="I0049" />
            <Desk data={data[49]} desk_id="I0050" />
            <Desk data={data[50]} desk_id="I0051" />
            <Desk data={data[51]} desk_id="I0052" />
          </div>
        </div>
        {/* Desk_id: #33-40 */}
        <div className="ocpd2  col-start-10 col-end-12 row-start-1 row-end-5 flex justify-center">
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[39]} desk_id="I0040" />
            </div>
            <div className="rotate-90">
              <Desk data={data[38]} desk_id="I0039" />
            </div>
            <div className="rotate-90">
              <Desk data={data[37]} desk_id="I0038" />
            </div>
            <div className="rotate-90">
              <Desk data={data[36]} desk_id="I0037" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[32]} desk_id="I0033" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[33]} desk_id="I0034" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[34]} desk_id="I0035" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[35]} desk_id="I0036" />
            </div>
          </div>
        </div>
        {/* Desk_id: #31-32 */}
        <div className="ocpd3  col-start-13 col-end-14 row-start-1 row-end-3 flex flex-col place-items-center">
          {/* occupied3 */}
          <div className="rotate-90">
            <Desk data={data[30]} desk_id="I0031" />
          </div>
          <div className="rotate-90">
            <Desk data={data[31]} desk_id="I0032" />
          </div>
        </div>
        {/* Desk_id: #53-64?? */}
        <div className="ocpd4 col-start-2 col-end-8 row-start-4 row-end-6 flex flex-col place-content-center">
          {/* occupied4 */}
          <div className="flex flex-row -scale-y-100 place-content-end">
            <Desk data={data[52]} style="-scale-x-100" desk_id="I0053" />
            <Desk data={data[53]} style="-scale-x-100" desk_id="I0054" />
            <Desk data={data[54]} style="-scale-x-100" desk_id="I0055" />
            <Desk data={data[55]} style="-scale-x-100" desk_id="I0056" />
            <Desk data={data[56]} style="-scale-x-100" desk_id="I0057" />
            <Desk data={data[57]} style="-scale-x-100" desk_id="I0058" />
          </div>
          <div className="flex flex-row place-content-end">
            <Desk data={data[63]} desk_id="I0064" />
            <Desk data={data[62]} desk_id="I0063" />
            <Desk data={data[61]} desk_id="I0062" />
            <Desk data={data[60]} desk_id="I0061" />
            <Desk data={data[59]} desk_id="I0060" />
            <Desk data={data[58]} desk_id="I0059" />
          </div>
        </div>
        {/* Desk_id: #27-30 */}
        <div className="ocpd5  col-start-13 col-end-14 row-start-4 row-end-8 flex flex-col place-items-center">
          <div className="rotate-90">
            <Desk data={data[29]} desk_id="I0030" />
          </div>
          <div className="rotate-90">
            <Desk data={data[28]} desk_id="I0029" />
          </div>
          <div className="rotate-90">
            <Desk data={data[27]} desk_id="I0028" />
          </div>
          <div className="rotate-90">
            <Desk data={data[26]} desk_id="I0027" />
          </div>
        </div>
        {/* Desk_id: #9-20 */}
        <div className="ocpd6  col-start-10 col-end-12 row-start-6 row-end-12 flex justify-center">
          {/* occupied6 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[8]} desk_id="I0009" />
            </div>
            <div className="rotate-90">
              <Desk data={data[9]} desk_id="I0010" />
            </div>
            <div className="rotate-90">
              <Desk data={data[10]} desk_id="I0011" />
            </div>
            <div className="rotate-90">
              <Desk data={data[11]} desk_id="I0012" />
            </div>
            <div className="rotate-90">
              <Desk data={data[12]} desk_id="I0013" />
            </div>
            <div className="rotate-90">
              <Desk data={data[13]} desk_id="I0014" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[14]} desk_id="I0015" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[15]} desk_id="I0016" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[16]} desk_id="I0017" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[17]} desk_id="I0018" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[18]} desk_id="I0019" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[19]} desk_id="I0020" />
            </div>
          </div>
        </div>
        {/* Desk_id: #65-70 */}
        <div className="ocpd7  col-start-3 col-end-5 row-start-7 row-end-10 flex justify-center">
          {/* occupied7 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[66]} desk_id="I0067" />
            </div>
            <div className="rotate-90">
              <Desk data={data[65]} desk_id="I0066" />
            </div>
            <div className="rotate-90">
              <Desk data={data[64]} desk_id="I0065" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[67]} desk_id="I0068" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[68]} desk_id="I0069" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[69]} desk_id="I0070" />
            </div>
          </div>
        </div>
        {/* Desk_id: #71-73 */}
        <div className="ocpd10  col-start-5 col-end-6 row-start-7 row-end-10 flex flex-col place-items-center">
          {/* ocp10 */}
          <div className="rotate-90">
            <Desk data={data[72]} desk_id="I0073" />
          </div>
          <div className="rotate-90">
            <Desk data={data[71]} desk_id="I0072" />
          </div>
          <div className="rotate-90">
            <Desk data={data[70]} desk_id="I0071" />
          </div>
        </div>
        {/* Desk_id: #1-8 */}
        <div className="ocpd8  col-start-7 col-end-9 row-start-7 row-end-11 flex justify-center">
          {/* occupied8 */}
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[0]} desk_id="I0001" />
            </div>
            <div className="rotate-90">
              <Desk data={data[1]} desk_id="I0002" />
            </div>
            <div className="rotate-90">
              <Desk data={data[2]} desk_id="I0003" />
            </div>
            <div className="rotate-90">
              <Desk data={data[3]} desk_id="I0004" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[7]} desk_id="I0008" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[6]} desk_id="I0007" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[5]} desk_id="I0006" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[4]} desk_id="I0005" />
            </div>
          </div>
        </div>
        {/* Desk_id: #21-26 */}
        <div className="ocpd9  col-start-13 col-end-15 row-start-9 row-end-12 flex justify-center">
          <div className="flex flex-col">
            <div className="rotate-90">
              <Desk data={data[22]} desk_id="I0023" />
            </div>
            <div className="rotate-90">
              <Desk data={data[21]} desk_id="I0022" />
            </div>
            <div className="rotate-90">
              <Desk data={data[20]} desk_id="I0021" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-rotate-90">
              <Desk data={data[23]} desk_id="I0024" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[24]} desk_id="I0025" />
            </div>
            <div className="-rotate-90">
              <Desk data={data[25]} desk_id="I0026" />
            </div>
          </div>
        </div>
        <div className="restroom1 rounded-sm grid place-content-center bg-gray-300 col-start-14 col-end-16 row-start-1 row-end-3">
          Restroom 1
        </div>
        <div className="server rounded-sm grid place-content-center bg-gray-300 col-start-14 col-end-16 row-start-4 row-end-6">
          Server
        </div>
        <div className="restroom2 rounded-sm grid place-content-center bg-gray-300 col-start-14 col-end-16 row-start-6 row-end-8">
          Restroom 2
        </div>
        <div className="Door flex self-end mb-[-7px] ml-4 col-start-8 col-end-9 row-start-11 row-end-12">
          {/* door */}
          <svg
            className="w-7 h-7 text-slate-500"
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>door</title>
            <path d="M30 28.75h-2.779v-26.75c-0-0.69-0.56-1.25-1.25-1.25h-19.971c-0.69 0-1.25 0.56-1.25 1.25v0 26.75h-2.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM7.25 28.75v-25.5h17.471v25.5zM21.48 14.84c-0.138-0.057-0.299-0.089-0.467-0.089-0.349 0-0.665 0.141-0.894 0.37l0-0c-0.232 0.222-0.377 0.534-0.379 0.88v0c0.004 0.174 0.041 0.338 0.103 0.489l-0.003-0.009c0.066 0.157 0.161 0.291 0.279 0.4l0.001 0.001c0.219 0.234 0.529 0.38 0.874 0.38 0.002 0 0.005 0 0.007-0h-0c0.174-0.005 0.339-0.041 0.489-0.104l-0.009 0.003c0.3-0.143 0.537-0.379 0.676-0.671l0.004-0.009c0.058-0.142 0.094-0.306 0.1-0.477l0-0.002c-0.002-0.346-0.148-0.658-0.38-0.879l-0-0c-0.109-0.119-0.241-0.214-0.391-0.278l-0.007-0.003z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default I_ZoneChart;
