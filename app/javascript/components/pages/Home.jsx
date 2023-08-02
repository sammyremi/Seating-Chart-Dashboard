import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <p className="text-3xl font-bold underline">Home Page</p>
      <Link to="/about">About page</Link>
    </div>
  );
};

export default Home;
