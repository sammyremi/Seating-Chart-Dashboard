import React from "react";
import Desk_icon from "./Desk_icon";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { toast } from "react-toastify";

const Desk = ({ data, style }) => {
  const navigate = useNavigate();
  const { current_user } = useGlobalContext();
  const { status, desk_id, id } = data;
  const first_char = desk_id.charAt(0).toLowerCase();
  return (
    <div
      className="mb-[-6px] cursor-pointer"
      onClick={() => {
        if (current_user?.admin !== undefined) {
          navigate(`/edit/zone_${first_char}s/${id}`);
        } else {
          toast.error("Login as Admin to Edit");
        }
      }}
    >
      {/* <Link
        to={
          current_user?.admin !== undefined
            ? `/edit/zone_${first_char}s/${id}`
            : ""
        }
      > */}
      <Desk_icon status={status} />
      <p
        className={`${style} text-xs font-mono text-slate-500 text-center tracking-wide`}
      >
        {desk_id}
      </p>
      {/* </Link> */}
    </div>
  );
};

export default Desk;
