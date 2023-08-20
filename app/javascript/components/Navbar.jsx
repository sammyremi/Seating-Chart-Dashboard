import React, { useState, useEffect, useRef} from "react";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here using the searchText state
    console.log("Searching for:", searchText);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
            {/* Search bar */}
            <div className="flex mr-20">
              <form onSubmit={handleSearchSubmit} className="mr-2">
                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  className="px-2 py-1 rounded-lg border border-gray-300 focus:outline-none w-36"
                />
              </form>
              <button
                onClick={handleSearchSubmit}
                className="bg-sky-300 text-white px-2 py-1 rounded-lg focus:outline-none"
              >
                Search
              </button>
            </div>
            
            {/* Profile dropdown */}
            <div className="relative" ref={dropdownRef}>

              <div>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="mr-16 relative flex rounded-full bg-sky-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" fill="#1C274C"/>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {/* ... dropdown content ... */}
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100" role="menuitem">Edit Account</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100" role="menuitem">Sign Out</a>
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
