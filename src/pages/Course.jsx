// import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { courses } from "../constants";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Course = () => {
  const course = courses[useParams().id - 1];
  const course_details = course.details;
  const [currentLecture, setCurrentLecture] = useState(null);

  const timeConvert = (n) => {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours > 0 ? rhours + " hour " + rminutes + " minute(s)" : rminutes + " minute(s)";
  }

  const handleLectureClick = (link) => {
    console.log(link);
    setCurrentLecture(link);
  };

  return (
    <div className="relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300">
      <div className="hidden sm:flex relative mr-4">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <Navbar title={course.title} />

        <div className="flex justify-between py-4">
          <div className="">
            {currentLecture && (
              <div>
                <iframe
                  src={currentLecture.link}
                  width={840}
                  height={473}
                  title="YouTube video player"
                  className="rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                ></iframe>

                <div>
                  <p>
                    <h1 className="text-2xl m-4"><strong>{currentLecture.title}</strong></h1>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div className="flex items-center flex-col sticky px-8 pb-8 bg-[#F8F8F9] h-[83vh] rounded-3xl w-56 lg:w-96 md:w-72 overflow-y-scroll">
              <div className="font-bold text-3xl tracking-wide sticky pt-10 pb-5 top-0 flex w-full h-full justify-center bg-[#F8F8F9] z-10">
                <h2>Course Content</h2>
              </div>

              <div className="w-full mt-3">
                {/* <h3 className="font-bold mb-6 text-lg">Useful Links</h3> */}
                {course_details.map((course_detail, index) => (
                  <div
                    onClick={() => handleLectureClick(course_detail)}
                    className="flex flex-col my-4 py-3 px-5 rounded-lg bg-slate-100 cursor-pointer"
                    key={index}
                  >
                    <p>
                      <strong>Lecture {index + 1}:</strong>{" "}
                      {course_detail.title}
                    </p>
                    <p>
                      <strong>{timeConvert(course_detail.duration)}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
