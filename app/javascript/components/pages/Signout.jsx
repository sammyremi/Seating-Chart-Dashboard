import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../Context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useGlobalContext();
  useEffect(() => {
    const signout = () => {
      try {
        fetch("/users/sign_out");
        setLoggedIn(false);
        toast.success("Successfully Logged out");
        navigate("/");
      } catch (error) {
        toast.error("Error Logging you out");
        console.log(error);
      }
    };
    signout();
  }, []);
  return <div>Signout</div>;
};

export default Signout;
