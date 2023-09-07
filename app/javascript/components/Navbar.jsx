import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const zones = ["d", "e", "h", "i", "j", "k", "l", "m", "n", "q", "r"];

const Navbar = () => {
  const { current_user } = useGlobalContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const searchfieldRef = useRef(null);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setShow(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const closeSearchField = (event) => {
    if (
      searchfieldRef.current &&
      !searchfieldRef.current.contains(event.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    window.addEventListener("click", closeSearchField);
    return () => {
      window.removeEventListener("click", closeDropdown);
      window.removeEventListener("click", closeSearchField);
    };
  }, []);

  // fetch data for search
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [];

        for (let i = 0; i < zones.length; i++) {
          const response = await fetch(`/zone_${zones[i]}s`);
          const zone_data = await response.json();
          fetchedData.push(...zone_data);
        }
        setData((prevData) => [...prevData, ...fetchedData]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const searchData = [];
  if (data) {
    data.map((desk) => {
      searchData.push({
        key: `${desk.desk_id.toLowerCase()}`,
        value: desk.desk_id,
        id: desk.id,
      });
    });
  }

  return (
    <nav className="drop-shadow-md z-40 fixed w-full top-0 bg-[#E9F9FD]">
      <div className="mx-auto sm:px-6 lg:px-10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://www.outsourceglobal.com/logo.png"
                alt="Your Company"
              />
            </div>
          </div>

          {/* controls search result display right-24*/}
          {query && show ? (
            <div className="absolute top-12 right-24 mt-4 mr-4 bg-white rounded-lg w-[230px] max-h-52 overflow-auto flex flex-col">
              {searchData
                .filter((desk) => {
                  if (query === "") {
                    return;
                  } else if (
                    desk.key.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return desk;
                  }
                })
                .map((desk, index) => (
                  <div
                    className="py-2 px-4 border-slate-300 text-gray-700 hover:bg-sky-200"
                    key={index}
                  >
                    <Link
                      to={
                        current_user?.admin
                          ? `/edit/zone_${desk.key.charAt(0).toLowerCase()}s/${
                              desk.id
                            }`
                          : `/zones/zone_${desk.key.charAt(0).toLowerCase()}s`
                      }
                      onClick={() => setShow(false)}
                    >
                      <p>{desk.value}</p>
                    </Link>
                  </div>
                ))}
            </div>
          ) : (
            ""
          )}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Search bar */}
            <div className="flex mr-16" ref={searchfieldRef}>
              <form class="flex items-center">
                <div class="relative w-60 outline-sky-700 pl-2 ">
                  <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search Desk_ID"
                    class="bg-gray-50 border outline-sky-300 border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-full block w-full py-1 px-2.5"
                  />
                  <button
                    type="button"
                    onClick={(e) => setQuery("")}
                    class="absolute inset-y-0 right-0 flex items-center pr-1 bg-sky-200 hover:bg-sky-300 rounded-r-full"
                  >
                    <svg
                      class="w-7 h-7 text-gray-500 hover:text-gray-900"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 8L16 16"
                        stroke="#757575"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 8L8 16"
                        stroke="#757575"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Profile dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="mr-2 relative flex rounded-full bg-sky-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                      fill="#1C274C"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {/* ... dropdown content ... */}
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-200 transition duration-500 ease-in-out delay-100"
                        role="menuitem"
                      >
                        Edit Account
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-200 transition duration-500 ease-in-out delay-100"
                        role="menuitem"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
