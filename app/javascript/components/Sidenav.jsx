import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import { current_user } from "./App";

const Sidenav = () => {
  const [active, setActive] = useState("");
  const { loggedIn, setLoggedIn } = useGlobalContext();

  // useEffect(() => {
  //   if (current_user?.email) {
  //     setLoggedIn(true);
  //   }
  //   // forceUpdate();
  // }, [loggedIn]);
  // console.log(current_user);
  console.log(loggedIn);

  return (
    <aside className="fixed top-16 left-0 w-1/6 h-screen" aria-label="Sidebar">
      <div className="h-full xl:px-3 py-6 xl:pl-5 overflow-y-auto">
        <ul className="xl:space-y-12 lg:space-y-6 mt-16 lg:text-base font-medium xl:text-xl">
          <li>
            <Link
              to="/"
              className={`flex items-center p-2 lg:pl-4 text-sky-700 xl:rounded-lg hover:bg-sky-100 ${
                active === "dashboard" ? "bg-sky-300" : ""
              }`}
              onClick={() => {
                setActive("dashboard");
              }}
            >
              <svg
                className="w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/floor_map"
              className={`flex items-center p-2 lg:pl-4 text-sky-700 xl:rounded-lg hover:bg-sky-100 ${
                active === "floor" ? "bg-sky-300" : ""
              }`}
              onClick={() => {
                setActive("floor");
              }}
            >
              <svg
                className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M255.991,213.339c35.355,0,64-28.645,64-64s-28.645-64-64-64s-64,28.645-64,64S220.636,213.339,255.991,213.339z
    		 M255.991,128.006c11.791,0,21.333,9.542,21.333,21.333s-9.542,21.333-21.333,21.333c-11.791,0-21.333-9.542-21.333-21.333
    		S244.2,128.006,255.991,128.006z"
                      />
                      <path
                        d="M228.229,397.518l8.681,17.362c7.863,15.726,30.305,15.723,38.164-0.004l18.389-36.8
    		c18.466-36.902,35.939-66.021,75.763-128.619l1.036-1.629c5.852-9.199,8.681-13.651,12.042-18.961
    		c14.956-23.623,23.02-50.992,23.02-79.527c0-89.032-77.35-158.521-166.786-148.343c-66.548,7.591-121.188,60.835-130.398,127.125
    		c-5.511,39.683,4.604,78.394,27.526,109.517C166.5,279.435,190.243,321.574,228.229,397.518z M150.402,133.992
    		c6.528-46.989,45.76-85.218,92.967-90.603c64.055-7.29,119.289,42.33,119.289,105.951c0,20.39-5.735,39.855-16.403,56.706
    		c-3.34,5.276-6.155,9.708-11.991,18.88l-1.036,1.629c-40.148,63.109-58.184,93.122-77.28,131.152
    		c-33.196-65.363-56.271-105.169-85.935-145.383C153.636,190.087,146.437,162.538,150.402,133.992z"
                      />
                      <path
                        d="M388.88,313.04c-11.464-2.719-22.961,4.371-25.68,15.835c-2.719,11.464,4.371,22.962,15.835,25.68
    		c57.212,13.567,90.298,35.274,90.298,50.773c0,29.478-94.949,64-213.333,64c-118.398,0-213.333-34.518-213.333-64
    		c0-15.508,33.053-37.209,90.236-50.773c11.464-2.719,18.553-14.217,15.834-25.681c-2.719-11.464-14.217-18.553-25.681-15.833
    		C48.205,330.796,0,362.445,0,405.329c0,64.804,115.134,106.667,256,106.667c140.853,0,256-41.865,256-106.667
    		C512,362.444,463.765,330.798,388.88,313.04z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Floor Map</span>
            </Link>
          </li>
          <li>
            <Link
              to="/zones"
              className={`flex items-center p-2 lg:pl-4 text-sky-700 xl:rounded-lg hover:bg-sky-100 ${
                active === "zones" ? "bg-sky-300" : ""
              }`}
              onClick={() => {
                setActive("zones");
              }}
            >
              <svg
                fill="currentColor"
                className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
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
              <span className="flex-1 ml-3 whitespace-nowrap">Zones</span>
            </Link>
          </li>
          <li>
            <a
              href="/admin"
              className={`flex items-center p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                active === "admin" ? "bg-sky-300" : ""
              }`}
              onClick={() => {
                setActive("admin");
              }}
            >
              <svg
                fill="currentColor"
                className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                aria-hidden="true"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
            </a>
          </li>
          <li>
            <Link
              to={loggedIn ? `/sign_out` : `/sign_in`}
              // href={loggedIn ? `/users/sign_out` : `/users/sign_in`}
              className={`flex items-center p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                active === "log" ? "bg-sky-300" : ""
              }`}
              onClick={() => {
                setActive("log");
              }}
            >
              <svg
                fill="currentColor"
                className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                aria-hidden="true"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M228.576 26.213v207.32h54.848V26.214h-54.848zm-28.518 45.744C108.44 96.58 41 180.215 41 279.605c0 118.74 96.258 215 215 215 118.74 0 215-96.26 215-215 0-99.39-67.44-183.025-159.057-207.647v50.47c64.6 22.994 110.85 84.684 110.85 157.177 0 92.117-74.676 166.794-166.793 166.794-92.118 0-166.794-74.678-166.794-166.795 0-72.494 46.25-134.183 110.852-157.178v-50.47z"
                  />
                </g>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                {loggedIn ? `Logout` : `Login`}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidenav;
