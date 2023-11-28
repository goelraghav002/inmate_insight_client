// import React from 'react'
import // profile1,
// crown,
// flag,
// medal,
// trophy,
// support,
// member,
// camera,
"./imports";
import toast from "react-hot-toast";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "../../helpers/axios";

// const user = {
//   name: "Akshansh",
//   cprogress: "08",
//   ccomplete: "23",
// };

const CreateStaff = () => {
  const { activeMenu } = useSelector((state) => state.activeMenu);

  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState(null);

  const createStaff = async () => {
    const res = await axios
      .post("/user/signup", {
        name,
        contactNumber,
        email,
        password,
        address,
        city,
        state
      })
      .catch((err) => setError(err.response));
    if (res?.status === 201) {
      const data = await res.data;
      return data;
    } else {
      return error;
    }
  };

  const handleAddStaff = (e) => {
    e.preventDefault()
    createStaff().then((data) =>
      data?.status === 400
        ? toast.error(data.data.message)
        : toast.success(data.message)
    );
  }

  return (
    <div className="max-w-screen relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300">
      <div className="  flex relative mr-4">{activeMenu && <Sidebar />}</div>

      <div className="flex-1 flex flex-col">
        <Navbar title="Profile" className="md:justify-center" />

        <div className="flex  max-full flex-col mt-5 md:flex-row ">
          <form className="flex-auto md:mr-6" onSubmit={handleAddStaff}>
            <div className=" my-4 md:my-0 h-full max-w-5xl md:w-full  lg:ml-4  rounded-lg flex flex-col p-4 bg-white shadow-[0_0px_6px_3px_rgba(0,0,0,0.2)] ">
              <div className="mb-10">
                <p className="font-semibold text-xl ">
                  Create New Staff Profile
                </p>
              </div>

              <div className="md:space-y-6  space-y-2 mt-4 flex flex-col">
                <div className="flex  flex-wrap flex-row  space-x-0 justify-between">
                  <div className="w-1/2 flex flex-col rounded-lg border border-slate-300 ">
                    <label
                      className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                      htmlFor="full_name"
                    >
                      Full Name
                    </label>
                    <input
                      className=" font-semibold appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="full_name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                    <label
                      className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                      htmlFor="phone_number"
                    >
                      Phone Number
                    </label>
                    <input
                      className="font-semibold appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="phone_number"
                      type="text"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="phone"
                    />
                  </div>
                </div>
                <div className="flex  flex-wrap flex-row  space-x-0 justify-between">
                  <div className=" w-1/2 flex flex-col rounded-lg border border-slate-300 ">
                    <label
                      className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="font-semibold appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                    <label
                      className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="font-semibold appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="******"
                    />
                  </div>
                </div>

                <div className="flex flex-col rounded-lg border border-slate-300 ">
                  <label
                    className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="font-semibold appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="flex  flex-wrap flex-row  space-x-0 justify-between">
                  <div className="w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                    <label
                      className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      className="font-semibold appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      placeholder="city"
                    />
                  </div>
                  <div className="w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                    <label
                      className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                      htmlFor="state"
                    >
                      State/Province
                    </label>
                    <input
                      className="font-semibold appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      placeholder="state"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8  w-full   flex  flex-row   justify-between">
                <button
                  className="m-2 w-1/2 py-3 text-white font-semibold bg-[#4ec490] transition-shadow rounded-lg hover:shadow-[4px_6px_7px_4px_rgba(78,196,144,0.14)]"
                  type="submit"
                  id="save"
                >
                  Save Profile
                </button>
                <button
                  className="m-2  w-1/2 font-semibold border-green-400 text-green-400 border-[1.6px] rounded-lg py-1 "
                  type="reset"
                  id="cancel"
                >
                  Cancel
                </button>
              </div>

              {/* Profile Setting */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStaff;
