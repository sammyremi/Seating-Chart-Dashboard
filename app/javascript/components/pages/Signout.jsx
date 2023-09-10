import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const signout = () => {
      try {
        fetch("/users/sign_out");
        setTimeout(() => {
          navigate("/");
          location.reload();
        }, 50);
      } catch (error) {
        toast.error("Error Logging you out");
        console.log(error);
      }
    };
    signout();
  }, []);
  return <div></div>;
};

export default Signout;
