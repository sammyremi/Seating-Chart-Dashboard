import React from "react";
import { Link } from "react-router-dom";

const AllWorkStations = () => {
  return (
    <div className="pt-4 ">
      <p className="text-center font-bold mb-4">All Workstations</p>

      <i className="relative left-[809px] font-thin mb-4">Filter Result</i>

      <fieldset className="flex gap-2 relative left-[729px]">
        <div class="flex items-center mb-4">
          <input
            checked
            id="checkbox-1"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox-1"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Vacant
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="checkbox-2"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox-2"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Occupied
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="checkbox-3"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            for="checkbox-3"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Damaged
          </label>
        </div>
      </fieldset>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-lg text-gray-700 bg-[#E9F9FD] border-b-2">
            <tr>
              <th scope="col" class="px-6 py-3">
                Desk ID
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Campaign
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex flex-col justify-center">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 ml-2 w-7 h-7 text-yellow-400 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -24.88 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        class="st0"
                        d="M97.13,61.06c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,61.06,97.13,61.06L97.13,61.06z M25.08,14.73v56.31c0,0.58-0.24,1.1-0.61,1.48c-0.38,0.38-0.9,0.61-1.48,0.61h-9.92 c-0.57,0-1.09-0.23-1.47-0.61l0,0l0,0l0,0c-0.38-0.38-0.61-0.9-0.61-1.47V14.73H2.96c-0.82,0-1.56-0.33-2.09-0.87 C0.33,13.32,0,12.58,0,11.77V2.96C0,2.14,0.33,1.4,0.87,0.87S2.14,0,2.96,0h116.96c0.82,0,1.56,0.33,2.09,0.87s0.87,1.28,0.87,2.09 v8.81c0,0.82-0.33,1.56-0.87,2.09c-0.54,0.54-1.28,0.87-2.09,0.87h-0.19v56.31c0,0.57-0.24,1.09-0.61,1.47l-0.01,0.01 c-0.38,0.38-0.9,0.61-1.47,0.61H77.18c-0.58,0-1.1-0.23-1.48-0.61c-0.07-0.07-0.13-0.14-0.19-0.22c-0.27-0.35-0.43-0.79-0.43-1.26 V14.73H25.08L25.08,14.73z M78.54,30.64h37.74V14.73H78.54V30.64L78.54,30.64z M116.28,34.09H78.54V50.3h37.74V34.09L116.28,34.09z M116.28,53.75H78.54v15.93h37.74V53.75L116.28,53.75z M119.43,3.45H3.45v7.83h115.98V3.45L119.43,3.45z M21.63,14.73h-7.21v54.94 h7.21V14.73L21.63,14.73z M97.13,21.27c3.25,0,5.88,0.53,5.88,1.19s-2.63,1.19-5.88,1.19c-3.25,0-5.88-0.53-5.88-1.19 S93.88,21.27,97.13,21.27L97.13,21.27z M97.13,41.13c3.25,0,5.88,0.56,5.88,1.25s-2.63,1.25-5.88,1.25c-3.25,0-5.88-0.56-5.88-1.25 S93.88,41.13,97.13,41.13L97.13,41.13z"
                      />
                    </g>
                  </svg>
                  <p className="flex-1 whitespace-nowrap">Qooo1</p>
                </div>
              </th>
              <td class="px-6 py-4">
                <span className="bg-yellow-300 rounded px-2 py-1">Vacant</span>
              </td>
              <td class="px-6 py-4">CS</td>
              <td class="px-6 py-4 text-sky-700 font-medium">
                <Link>EDIT</Link>
              </td>
            </tr>
            <tr class="border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex flex-col justify-center">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 ml-2 w-7 h-7 text-red-400 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -7.72 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M99.89,96.65c2.9,0,5.25,0.5,5.25,1.12c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12 C94.63,97.16,96.98,96.65,99.89,96.65L99.89,96.65z M33.47,0h52.4c0.83,0,1.51,0.68,1.51,1.5v31.18c0,0.83-0.68,1.51-1.51,1.51 h-52.4c-0.83,0-1.51-0.68-1.51-1.51V1.51C31.96,0.68,32.64,0,33.47,0L33.47,0L33.47,0z M52.84,36.27H66.5 c0.03,2.23,0.9,4.24,3.21,5.86h50.52c0.73,0,1.39,0.3,1.87,0.77c0.48,0.48,0.78,1.14,0.78,1.87v7.86c0,0.73-0.3,1.39-0.78,1.87 c-0.48,0.48-1.14,0.78-1.87,0.78h-0.17v50.28c0,0.51-0.21,0.98-0.55,1.31l-0.01,0.01c-0.34,0.34-0.8,0.55-1.31,0.55H82.07 c-0.51,0-0.98-0.21-1.32-0.55c-0.06-0.06-0.12-0.13-0.17-0.2c-0.24-0.31-0.38-0.7-0.38-1.12V55.28H22.39v50.28 c0,0.52-0.21,0.98-0.55,1.32c-0.34,0.34-0.81,0.55-1.32,0.55h-8.86c-0.51,0-0.97-0.21-1.31-0.55l0,0l0,0l0,0 c-0.34-0.34-0.55-0.8-0.55-1.31V55.28H2.64c-0.73,0-1.39-0.3-1.87-0.78C0.3,54.02,0,53.36,0,52.63v-7.86c0-0.73,0.3-1.39,0.78-1.87 c0.48-0.48,1.14-0.77,1.87-0.77h46.94C51.49,40.65,52.85,38.85,52.84,36.27L52.84,36.27L52.84,36.27z M59.67,29.11 c1.07,0,1.93,0.87,1.93,1.93c0,1.07-0.87,1.93-1.93,1.93c-1.07,0-1.94-0.87-1.94-1.93C57.74,29.98,58.6,29.11,59.67,29.11 L59.67,29.11z M36.49,2.84h46.35c0.73,0,1.33,0.6,1.33,1.33v22.4c0,0.73-0.6,1.33-1.33,1.33H36.49c-0.73,0-1.33-0.6-1.33-1.33V4.17 C35.16,3.44,35.76,2.84,36.49,2.84L36.49,2.84L36.49,2.84z M83.28,69.49h33.7v-14.2h-33.7V69.49L83.28,69.49z M116.99,72.56h-33.7 v14.48h33.7V72.56L116.99,72.56z M116.99,90.13h-33.7v14.22h33.7V90.13L116.99,90.13z M119.8,45.2H3.08v6.99H119.8V45.2L119.8,45.2 z M19.31,55.28h-6.44v49.06h6.44V55.28L19.31,55.28z M99.89,61.12c2.9,0,5.25,0.47,5.25,1.06s-2.35,1.06-5.25,1.06 c-2.9,0-5.25-0.48-5.25-1.06S96.98,61.12,99.89,61.12L99.89,61.12z M99.89,78.86c2.9,0,5.25,0.5,5.25,1.12 c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12C94.63,79.36,96.98,78.86,99.89,78.86L99.89,78.86z"
                      />
                    </g>
                  </svg>
                  <p className="flex-1 whitespace-nowrap">Qooo2</p>
                </div>
              </th>
              <td class="px-6 py-4">
                <span className="bg-red-300 rounded px-2 py-1">Damaged</span>
              </td>
              <td class="px-6 py-4">Canvassing</td>
              <td class="px-6 py-4 text-sky-700 font-medium">
                <Link>EDIT</Link>
              </td>
            </tr>
            <tr class="border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex flex-col justify-center">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 ml-2 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -7.72 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M99.89,96.65c2.9,0,5.25,0.5,5.25,1.12c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12 C94.63,97.16,96.98,96.65,99.89,96.65L99.89,96.65z M33.47,0h52.4c0.83,0,1.51,0.68,1.51,1.5v31.18c0,0.83-0.68,1.51-1.51,1.51 h-52.4c-0.83,0-1.51-0.68-1.51-1.51V1.51C31.96,0.68,32.64,0,33.47,0L33.47,0L33.47,0z M52.84,36.27H66.5 c0.03,2.23,0.9,4.24,3.21,5.86h50.52c0.73,0,1.39,0.3,1.87,0.77c0.48,0.48,0.78,1.14,0.78,1.87v7.86c0,0.73-0.3,1.39-0.78,1.87 c-0.48,0.48-1.14,0.78-1.87,0.78h-0.17v50.28c0,0.51-0.21,0.98-0.55,1.31l-0.01,0.01c-0.34,0.34-0.8,0.55-1.31,0.55H82.07 c-0.51,0-0.98-0.21-1.32-0.55c-0.06-0.06-0.12-0.13-0.17-0.2c-0.24-0.31-0.38-0.7-0.38-1.12V55.28H22.39v50.28 c0,0.52-0.21,0.98-0.55,1.32c-0.34,0.34-0.81,0.55-1.32,0.55h-8.86c-0.51,0-0.97-0.21-1.31-0.55l0,0l0,0l0,0 c-0.34-0.34-0.55-0.8-0.55-1.31V55.28H2.64c-0.73,0-1.39-0.3-1.87-0.78C0.3,54.02,0,53.36,0,52.63v-7.86c0-0.73,0.3-1.39,0.78-1.87 c0.48-0.48,1.14-0.77,1.87-0.77h46.94C51.49,40.65,52.85,38.85,52.84,36.27L52.84,36.27L52.84,36.27z M59.67,29.11 c1.07,0,1.93,0.87,1.93,1.93c0,1.07-0.87,1.93-1.93,1.93c-1.07,0-1.94-0.87-1.94-1.93C57.74,29.98,58.6,29.11,59.67,29.11 L59.67,29.11z M36.49,2.84h46.35c0.73,0,1.33,0.6,1.33,1.33v22.4c0,0.73-0.6,1.33-1.33,1.33H36.49c-0.73,0-1.33-0.6-1.33-1.33V4.17 C35.16,3.44,35.76,2.84,36.49,2.84L36.49,2.84L36.49,2.84z M83.28,69.49h33.7v-14.2h-33.7V69.49L83.28,69.49z M116.99,72.56h-33.7 v14.48h33.7V72.56L116.99,72.56z M116.99,90.13h-33.7v14.22h33.7V90.13L116.99,90.13z M119.8,45.2H3.08v6.99H119.8V45.2L119.8,45.2 z M19.31,55.28h-6.44v49.06h6.44V55.28L19.31,55.28z M99.89,61.12c2.9,0,5.25,0.47,5.25,1.06s-2.35,1.06-5.25,1.06 c-2.9,0-5.25-0.48-5.25-1.06S96.98,61.12,99.89,61.12L99.89,61.12z M99.89,78.86c2.9,0,5.25,0.5,5.25,1.12 c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12C94.63,79.36,96.98,78.86,99.89,78.86L99.89,78.86z"
                      />
                    </g>
                  </svg>
                  <p className="flex-1 whitespace-nowrap">Qooo3</p>
                </div>
              </th>
              <td class="px-6 py-4">
                <span className="bg-sky-200 rounded px-2 py-1">Occupied</span>
              </td>
              <td class="px-6 py-4">CS</td>
              <td class="px-6 py-4 text-sky-700 font-medium">
                <Link>EDIT</Link>
              </td>
            </tr>
            <tr class="border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex flex-col justify-center">
                  <svg
                    fill="currentColor"
                    className="flex-shrink-0 ml-2 w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                    aria-hidden="true"
                    viewBox="0 -7.72 122.88 122.88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M99.89,96.65c2.9,0,5.25,0.5,5.25,1.12c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12 C94.63,97.16,96.98,96.65,99.89,96.65L99.89,96.65z M33.47,0h52.4c0.83,0,1.51,0.68,1.51,1.5v31.18c0,0.83-0.68,1.51-1.51,1.51 h-52.4c-0.83,0-1.51-0.68-1.51-1.51V1.51C31.96,0.68,32.64,0,33.47,0L33.47,0L33.47,0z M52.84,36.27H66.5 c0.03,2.23,0.9,4.24,3.21,5.86h50.52c0.73,0,1.39,0.3,1.87,0.77c0.48,0.48,0.78,1.14,0.78,1.87v7.86c0,0.73-0.3,1.39-0.78,1.87 c-0.48,0.48-1.14,0.78-1.87,0.78h-0.17v50.28c0,0.51-0.21,0.98-0.55,1.31l-0.01,0.01c-0.34,0.34-0.8,0.55-1.31,0.55H82.07 c-0.51,0-0.98-0.21-1.32-0.55c-0.06-0.06-0.12-0.13-0.17-0.2c-0.24-0.31-0.38-0.7-0.38-1.12V55.28H22.39v50.28 c0,0.52-0.21,0.98-0.55,1.32c-0.34,0.34-0.81,0.55-1.32,0.55h-8.86c-0.51,0-0.97-0.21-1.31-0.55l0,0l0,0l0,0 c-0.34-0.34-0.55-0.8-0.55-1.31V55.28H2.64c-0.73,0-1.39-0.3-1.87-0.78C0.3,54.02,0,53.36,0,52.63v-7.86c0-0.73,0.3-1.39,0.78-1.87 c0.48-0.48,1.14-0.77,1.87-0.77h46.94C51.49,40.65,52.85,38.85,52.84,36.27L52.84,36.27L52.84,36.27z M59.67,29.11 c1.07,0,1.93,0.87,1.93,1.93c0,1.07-0.87,1.93-1.93,1.93c-1.07,0-1.94-0.87-1.94-1.93C57.74,29.98,58.6,29.11,59.67,29.11 L59.67,29.11z M36.49,2.84h46.35c0.73,0,1.33,0.6,1.33,1.33v22.4c0,0.73-0.6,1.33-1.33,1.33H36.49c-0.73,0-1.33-0.6-1.33-1.33V4.17 C35.16,3.44,35.76,2.84,36.49,2.84L36.49,2.84L36.49,2.84z M83.28,69.49h33.7v-14.2h-33.7V69.49L83.28,69.49z M116.99,72.56h-33.7 v14.48h33.7V72.56L116.99,72.56z M116.99,90.13h-33.7v14.22h33.7V90.13L116.99,90.13z M119.8,45.2H3.08v6.99H119.8V45.2L119.8,45.2 z M19.31,55.28h-6.44v49.06h6.44V55.28L19.31,55.28z M99.89,61.12c2.9,0,5.25,0.47,5.25,1.06s-2.35,1.06-5.25,1.06 c-2.9,0-5.25-0.48-5.25-1.06S96.98,61.12,99.89,61.12L99.89,61.12z M99.89,78.86c2.9,0,5.25,0.5,5.25,1.12 c0,0.62-2.35,1.12-5.25,1.12c-2.9,0-5.25-0.5-5.25-1.12C94.63,79.36,96.98,78.86,99.89,78.86L99.89,78.86z"
                      />
                    </g>
                  </svg>
                  <p className="flex-1 whitespace-nowrap">Qooo1</p>
                </div>
              </th>
              <td class="px-6 py-4">
                <span className="bg-sky-200 rounded px-2 py-1">Occupied</span>
              </td>
              <td class="px-6 py-4">CS</td>
              <td class="px-6 py-4 text-sky-700 font-medium">
                <Link>EDIT</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllWorkStations;

// <div>
//   <div className="absolute top-[252px] left-[422px] box-border h-[815px] overflow-hidden flex flex-col py-0 px-[19px] items-start justify-start gap-[6px] text-center text-2xl text-blue font-actor border-[0.5px] border-solid border-black">
//     <div className="self-stretch relative bg-deepskyblue-500 box-border h-[77px] overflow-hidden shrink-0 text-left text-7xl text-black border-b-[0.5px] border-solid border-black">
//       <div className="absolute top-[20px] left-[56px]">Desk ID</div>
//       <div className="absolute top-[20px] left-[374px]">Status</div>
//       <div className="absolute top-[20px] left-[696px]">Campaign</div>
//       <div className="absolute top-[20px] left-[976px]">Actions</div>
//     </div>
//     <div className="relative bg-deepskyblue-700 box-border w-[1206px] h-[110px] overflow-hidden shrink-0 border-b-[0.5px] border-solid border-black">
//       <div className="absolute top-[16px] left-[35px] flex flex-col items-center justify-start text-left text-7xl text-black">
//         <img
//           className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
//           alt=""
//           src="/zones.svg"
//         />
//         <div className="relative">Q0001</div>
//       </div>
//       <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_262px)] rounded-13xl bg-deepskyblue-600 w-36 h-12 overflow-hidden flex flex-row py-[5px] px-[38px] box-border items-center justify-center font-khula">
//         <div className="relative opacity-[0.7]">Occupied</div>
//       </div>
//       <div className="absolute top-[35px] left-[995px] text-5xl font-khula">
//         EDIT
//       </div>
//       <div className="absolute top-[50px] left-[737px] text-deepskyblue-100">
//         CS
//       </div>
//     </div>

//     <div className="relative bg-deepskyblue-700 box-border w-[1206px] h-[110px] overflow-hidden shrink-0 border-b-[0.5px] border-solid border-black">
//       <div className="absolute top-[16px] left-[35px] flex flex-col items-center justify-start text-left text-7xl text-black">
//         <img
//           className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
//           alt=""
//           src="/zones.svg"
//         />
//         <div className="relative">Q0001</div>
//       </div>
//       <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_262px)] rounded-13xl bg-deepskyblue-600 w-36 h-12 overflow-hidden flex flex-row py-[5px] px-[38px] box-border items-center justify-center font-khula">
//         <div className="relative opacity-[0.7]">Occupied</div>
//       </div>
//       <div className="absolute top-[35px] left-[995px] text-5xl font-khula">
//         EDIT
//       </div>
//       <div className="absolute top-[50px] left-[737px] text-deepskyblue-100">
//         CS
//       </div>
//     </div>

//     <div className="relative bg-deepskyblue-700 box-border w-[1206px] h-[110px] overflow-hidden shrink-0 border-b-[0.5px] border-solid border-black">
//       <div className="absolute top-[18px] left-[35px] flex flex-col items-center justify-start text-left text-7xl text-black">
//         <img
//           className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
//           alt=""
//           src="/zones1.svg"
//         />
//         <div className="relative">R0001</div>
//       </div>
//       <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_262px)] rounded-13xl bg-deepskyblue-600 w-36 h-12 overflow-hidden flex flex-row py-[5px] px-[38px] box-border items-center justify-center font-khula">
//         <div className="relative opacity-[0.7]">Occupied</div>
//       </div>
//       <div className="absolute top-[35px] left-[995px] text-5xl font-khula">
//         EDIT
//       </div>
//       <div className="absolute top-[49px] left-[679px] text-deepskyblue-100">
//         Canvassing
//       </div>
//     </div>
//   </div>
//   <div className="absolute top-[196px] left-[1506px] w-[171px] h-10 flex flex-row items-center justify-start gap-[10px]">
//     <FormControlLabel
//       className="relative"
//       label=""
//       labelPlacement="end"
//       control={<Radio color="primary" />}
//     />
//     <label className="cursor-pointer relative italic">Damaged</label>
//   </div>
//   <div className="absolute top-[196px] left-[1360px] w-[136px] h-10 flex flex-row items-center justify-start gap-[10px]">
//     <FormControlLabel
//       className="relative"
//       label=""
//       labelPlacement="end"
//       control={<Radio color="primary" />}
//     />
//     <label className="cursor-pointer relative italic">Vacant</label>
//   </div>
//   <div className="absolute top-[193px] left-[1180px] w-[170px] h-[46px] flex flex-row items-center justify-start gap-[10px]">
//     <FormControlLabel
//       className="relative"
//       label=""
//       labelPlacement="end"
//       control={<Radio color="primary" size="medium" />}
//     />
//     <label className="cursor-pointer relative italic">occupied</label>
//   </div>
//   <i className="absolute top-[159px] left-[1379px] font-thin">
//     Filter Result
//   </i>
//   <div className="absolute top-[123px] left-[864px] text-13xl font-alata">
//     All Occupied Workstations
//   </div>
// </div>
