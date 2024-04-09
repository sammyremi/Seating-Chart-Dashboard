/* eslint-disable react/prop-types */
import Desk_icon from "./Desk_icon";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Desk = ({ data, style, desk_id }) => {
  const navigate = useNavigate();
  const { searchedDesk } = useGlobalContext();

  const filtered_data = data.filter(
    (desk) => desk?.custom_fields["Workspace"]?.value === desk_id
  );

  const workspace_data = filtered_data[0];

  // check if data_id is undefined for vacant workspaces
  const data_id = workspace_data?.id == undefined ? "000" : workspace_data?.id;
  const status = workspace_data?.custom_fields["Workspace Status"]?.value;
  const data_desk_id = workspace_data?.custom_fields["Workspace"]?.value;

  const first_char = desk_id?.charAt(0).toLowerCase();
  return (
    <div
      className="desk mb-[-6px] cursor-pointer hover:font-bold"
      onClick={() => {
        navigate(`/zone_${first_char}s/${data_id}/${desk_id}`);
      }}
    >
      {data_desk_id === desk_id && searchedDesk === desk_id ? (
          <Desk_icon status={status} searchedDesk={true} />
        ) : desk_id === "J0016" ? (
          <Desk_icon status="damaged" />
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
