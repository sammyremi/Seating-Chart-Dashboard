import React from "react";
import Desk_icon from "./Desk_icon";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { toast } from "react-toastify";

const Desk = ({ data, style }) => {
  const navigate = useNavigate();
  const { current_user, searchedDesk } = useGlobalContext();
  const { status, desk_id, id } = data;
  const first_char = desk_id.charAt(0).toLowerCase();
  return (
    <div
      className="desk mb-[-6px] cursor-pointer hover:font-bold"
      onClick={() => {
        if (current_user?.admin !== undefined) {
          navigate(`/edit/zone_${first_char}s/${id}`);
        } else {
          toast.error("Login as Admin to Edit");
        }
      }}
    >
      {searchedDesk === desk_id ? (
        <Desk_icon status={status} searchedDesk={true} />
      ) : (
        <Desk_icon status={status} />
      )}
      <p
        className={`${style} text-xs font-sans text-slate-500 text-center tracking-wide`}
      >
        {desk_id}
      </p>
    </div>
  );
};

export default Desk;
