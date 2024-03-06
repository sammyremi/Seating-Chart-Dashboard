import DeskSVG from "./DeskSVG";

const Desk_icon = ({ status, searchedDesk }) => {
  return (
    <div
      className={`border-x-2 border-t-2 border-slate-400 pt-1 px-1.5 ${
        searchedDesk ? "bg-lime-300 font-bold" : "bg-white"
      } `}
    >
      <DeskSVG status={status} />
    </div>
  );
};

export default Desk_icon;
