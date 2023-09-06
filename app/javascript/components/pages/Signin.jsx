import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../Context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signIn = () => {
      try {
        window.location.href = "/users/sign_in";
        // setLoggedIn(false);
        // toast.success("Successfully Signed In");
      } catch (error) {
        toast.error("Error Signing In");
        console.log(error);
      }
    };
    signIn();
  }, []);

  return <div>Signin</div>;
};

export default Signin;
