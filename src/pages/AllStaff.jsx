// import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import TableList from "../components/table/TableList";
import { Link } from "react-router-dom";

const AllStaff = () => {
  const { activeMenu } = useSelector((state) => state.activeMenu);

  return (
    <div className="relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300">
      <div className="flex relative mr-4">{activeMenu && <Sidebar />}</div>

      <div className="flex-1 flex flex-col">
        <Navbar title={"Staff List"} />

        <div className="flex flex-wrap justify-center md:justify-start py-4">
          <div className="flex justify-end w-full">
            <Link to="new">
              <button className="m-4 px-6 py-3 bg-[#F8F8F9] rounded-full">
                Create Staff
              </button>
            </Link>
          </div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default AllStaff;
