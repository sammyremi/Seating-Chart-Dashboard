import React from "react";
import Desk_icon from "./Desk_icon";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Desk = ({ data, style }) => {
  const { current_user } = useGlobalContext();
  const { status, desk_id, id } = data;
  const first_char = desk_id.charAt(0).toLowerCase();
  return (
    <div className="mb-[-6px]">
      <Link
        to={
          current_user?.admin !== undefined
            ? `/edit/zone_${first_char}s/${id}`
            : ""
        }
      >
        <Desk_icon status={status} />
        <p
          className={`${style} text-xs font-mono text-slate-500 text-center tracking-wide`}
        >
          {desk_id}
        </p>
      </Link>
    </div>
  );
};

export default Desk;
