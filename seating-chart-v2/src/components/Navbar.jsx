import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import logo from "../images/newlogo.png";
import axios from "axios";

const zones = ["d", "e", "h", "i", "j", "k", "l", "m", "n", "q", "r"];

const Navbar = () => {
  const { setSearchedDesk, baseURL } = useGlobalContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const searchfieldRef = useRef(null);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setSearchedDesk(e.target.value);
    setShow(true);
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

        // fetch data
        const response = await axios.get(baseURL);
        const response_data = response.data;

        for (let i = 0; i < zones.length; i++) {
          const zone_data = response_data.filter(
            (asset) =>
              asset.custom_fields["Building Zone"]?.value
                .slice(-1)
                .toLowerCase() === zones[i]
          );
          fetchedData.push(...zone_data);
        }
        // console.log(fetchedData);
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
        key: `${desk.custom_fields["Workspace"]?.value.toLowerCase()}`,
        value: desk.custom_fields["Workspace"]?.value,
        id: desk?.id,
      });
    });
  }

  const font = {
    fontFamily: "'Josefin Sans', sans-serif",
  };

  return (
    <nav className="drop-shadow-md z-40 fixed w-full top-0 bg-[#E9F9FD]">
      <div className="mx-auto sm:px-6 lg:px-10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>

            <div className="ml-24">
              <h1
                style={font}
                className="text-[#066DA5] font-bold text-3xl mt-2"
              >
                DeskScape
              </h1>
            </div>
          </div>

          {/* controls search result display right-24*/}
          {query && show ? (
            <div className="absolute top-12 right-1 mt-4 bg-white rounded-lg w-[230px] max-h-52 overflow-auto flex flex-col">
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
                    className="py-2 px-4 border-slate-300 text-gray-700 hover:bg-sky-100"
                    key={index}
                  >
                    <Link
                      to={`/zones/zone_${desk.key.charAt(0).toLowerCase()}s`}
                      onClick={() => {
                        setShow(false);
                        setSearchedDesk(desk.value);
                        setQuery(desk.value);
                      }}
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
            <div className="flex " ref={searchfieldRef}>
              <form className="flex items-center">
                <div className="relative w-60 outline-sky-700 pl-2 ">
                  <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search Desk_ID"
                    className="bg-gray-50 border outline-sky-300 border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded  block w-full py-1 px-2.5"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      setQuery("");
                      setSearchedDesk("");
                    }}
                    className=" absolute inset-y-0 right-0 flex items-center pr-1 bg-sky-200 hover:bg-sky-300 rounded-r"
                  >
                    <svg
                      className="w-7 h-7 text-gray-500 hover:text-gray-900 pl-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 8L16 16"
                        stroke="#757575"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 8L8 16"
                        stroke="#757575"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
