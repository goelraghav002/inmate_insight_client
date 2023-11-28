// import React from 'react';

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navlinks, navlinksadmin } from "../constants";

import { signout } from '../actions/auth.actions'

const Sidebar = () => {
  const admin = window.localStorage.getItem("isAdmin");
	const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signout());
  };

  return (
    <div className="flex z-[5] items-center flex-col fixed sm:sticky p-8 bg-[#F8F8F9] h-[95vh] rounded-3xl w-56 lg:w-80 md:w-64 top-4">
      <div className="font-bold text-3xl m-2 tracking-wide hidden sm:flex">
        <h2>Inmate Insight</h2>
      </div>
      <div className="w-[90%] h-[1px] bg-[#505050] my-6 mx-auto rounded-full" />

      <div className="w-full mt-5">
        <h3 className="font-bold mb-6 text-lg">Useful Links</h3>
        {navlinks.map((link, index) => (
          <NavLink key={index} to={link.link}>
            <div
              key={link.name}
              className="flex justify-start items-center gap-4 my-8 mx-2"
            >
              <span className="opacity-60 font-semibold">{link.name}</span>
            </div>
          </NavLink>
        ))}
        {admin === "true"
          ? navlinksadmin.map((link, index) => (
              <NavLink key={index} to={link.link}>
                <div
                  key={link.name}
                  className="flex justify-start items-center gap-4 my-8 mx-2"
                >
                  <span className="opacity-60 font-semibold">{link.name}</span>
                </div>
              </NavLink>
            ))
          : ""}

        <div className="flex justify-start items-center gap-4 my-8 mx-2 cursor-pointer" onClick={handleLogout}>
          <span className="opacity-60 font-semibold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
