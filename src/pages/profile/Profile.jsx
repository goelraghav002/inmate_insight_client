// import React from 'react'
import {
    profile1,
    crown,
    flag,
    medal,
    trophy,
    support,
    member,
    camera,
  } from "./imports";

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

const user = {
  name: 'Akshansh',
  cprogress: '08',
 ccomplete: '23',
};


const Profile = () => {
  return (
      <div className='relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300'>
          <div className='  flex relative mr-4'>
              <Sidebar />
          </div>

          <div className='flex-1 flex flex-col'>
              <Navbar className=""/>
         
         
              <div className="flex flex-row  mlg:flex-col">
              <div className="mx-4 my-4 rounded-lg flex flex-col max-w-md bg-white shadow-[0_0px_6px_3px_rgba(0,0,0,0.2)] p-8">
                {/* profile div */}
                <div className="flex flex-col items-center">
                  {/* profile , name , pic vip */}
                  <div>
                    <img src={profile1} className="w-24 h-24 rounded-full" />
                  </div>
                  <p className=" cursor-default py-2">
       {user.name}
                
                  </p>
                  <button className=" text-white bg-amber-600 hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1 text-center mr-2 my-2.5 dark:bg-amber-600 dark:hover:bg-amber-600 dark:focus:ring-amber-600 ">
                    VIP
                  </button>
                </div>
        
                <div className="mx-6 mt-3 flex flex-row  space-x-3 justify-between">
                  <div className="flex flex-col items-center ">
                    <button className="rounded-full text-2xl w-16 h-16 bg-indigo-200 text-indigo-400 font-extrabold ">
                    {user.cprogress}
                    </button>
                    <p className="font-semibold">Course in progress</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="rounded-full text-2xl w-16 h-16 bg-green-100 text-green-400 font-extrabold ">
                 {user.ccomplete}
                    </button>
                    <p className="font-semibold">Course Complete</p>
                  </div>
        
                  {/* course in progress  course complete */}
                </div>
        
                <div>
                  <p className="  cursor-default font-semibold text-2xl pt-8 ">Last Achievement</p>
                  <div className="space-x-2 flex flex-row justify-between flex-wrap ">
                    <div className="w-20 h-20 mt-2 ">
                      <img className="p-2 rounded-full bg-rose-100" src={crown}></img>
                    </div>
                    <div className="w-20 h-20 mt-2 rounded-full bg-rose-100 ">
                      <img className="mx-2 px-1 w-16 p-2 " src={trophy}></img>
                    </div>
                    <div className="w-20 mt-2 h-20 ">
                      <img
                        className="w-20 h-20 p-2 rounded-full bg-rose-100"
                        src={flag}
                      ></img>
                    </div>
                    <div className="w-20 mt-2 h-20 ">
                      <img
                        className="w-20 h-20 p-2 rounded-full bg-rose-100"
                        src={medal}
                      ></img>
                    </div>
                  </div>
                  {/* Achivements */}
                </div>
        
                <div>
                  <p className="font-semibold text-2xl py-10">Support</p>
                  <div className="flex flex-col justify-between ">
                    <div className=" cursor-pointer flex flex-row mb-4">
                      <div className="w-12 h-12 ">
                        <img
                          className=" p-2 rounded-full bg-sky-100"
                          src={member}
                        ></img>
                      </div>
                      <p className="font-medium pl-4 self-center">Become a member</p>
                    </div>
        
                    <div className=" cursor-pointer flex flex-row ">
                      <div className="w-12 h-12 ">
                        <img
                          className="bg-indigo-200  p-2 rounded-full "
                          src={support}
                        ></img>
                      </div>
                      <p className="font-medium pl-4 self-center">Support</p>
                    </div>
                    {/* <div className="flex flex-row pb-4">
                      <div className="w-12 h-12 ">
                        <img className="p-2 rounded-full bg-rose-100" src={member}></img>
                      </div>
                        <p className="font-medium pl-4 self-center">Invite friend</p>
                    </div> */}
                  </div>
                </div>
              </div>
              <form className=" flex-auto mr-6">
                <div className="   mx-4 my-4  w-full rounded-lg flex flex-col min-w-min bg-white shadow-[0_0px_6px_3px_rgba(0,0,0,0.2)] p-8">
                  <div className="mb-10">
                    <p className="font-semibold text-xl ">Profile Setting</p>
                  </div>
                  <div className=" relative w-[6.8rem] h-[6.9rem] ">
                    
                    <img src={profile1}  className="w-24 h-24  rounded-full absolute" />
                    <img src={camera} className="   border-none  p-1 rounded-full bottom-0 right-2 w-12 cursor-pointer absolute "/>
                  </div>
                  <div className="space-y-6 mt-4 flex flex-col">
                    <div className="flex   flex-row  space-x-3 justify-between">
                      <div className=" w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                        <label
                          className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                          htmlFor="full_name"
                        >
                          Full Name
                        </label>
                        <input
                          className=" font-semibold placeholder-black appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="full_name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
        
                      <div className="w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                        <label
                          className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                          htmlFor="email"
                        >
                          Email-address
                        </label>
                        <input
                          className="font-semibold placeholder-black appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
        
                    <div className="flex flex-col rounded-lg border border-slate-300 ">
                      <label
                        className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                        htmlFor="Address"
                      >
                        Address
                      </label>
                      <input
                        className="font-semibold placeholder-black appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="Address"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
        
                    <div className="flex flex-row  space-x-3 justify-between">
                      <div className="w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                        <label
                          className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          className="font-semibold placeholder-black appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="city"
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
                          className="font-semibold placeholder-black appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="state"
                          type="text"
                          placeholder="state"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row  space-x-3 justify-between">
                      <div className="w-1/2  flex flex-col rounded-lg border border-slate-300 ">
                        <label
                          className=" pl-4 uppercase tracking-wide text-gray-400 text-xs font-semibold my-2.5"
                          htmlFor="zip_code"
                        >
                          Zip-Code
                        </label>
                        <input
                          className="font-semibold placeholder-black appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="zip_code"
                          type="text"
                          placeholder="zip-code"
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
                          className="font-semibold placeholder-black appearance-none border-none rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="phone_number"
                          type="number"
                          placeholder="phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8  w-full sapce-x-10  flex flex-row   justify-between">
                    <button
                      className="w-1/2 mr-[20px] py-3 text-white font-semibold bg-[#4ec490] transition-shadow rounded-lg py-1 px-6 hover:shadow-[4px_6px_7px_4px_rgba(78,196,144,0.14)]"
                      type="submit"
                      id="save"
                    >
                      Save Profile
                    </button>
                    <button
                      className=" w-1/2 font-semibold border-green-400 text-green-400 border-[1.6px] rounded-lg py-1 px-6"
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
  )
}

export default Profile
