// import React from 'react';
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {

  const timeConvert = (n) => {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours > 0 ? rhours + " hour " + rminutes + " minute(s)" : rminutes + " minute(s)";
  }

  return (
    <div className="flex flex-col w-[268px] h-[360px] bg-[#F8F8F9] rounded-xl p-4 m-4 mr-0 shadow-lg hover:shadow-[2px_1px_15px_3px_rgba(0,0,0,0.1)] hover:scale-105 transition ease-out duration-700 ">
      <div className="rounded-xl w-full h-36 flex items-center justify-center">
        <img
          src={course?.thumbnail_url}
          alt=""
          className="w-full h-full rounded-xl"
        />
      </div>

      <div className="flex flex-col h-full justify-between px-2 py-2">
        <h2 className="font-bold text-2xl my-2">{course.title}</h2>
        <div className="">
          <p className="text-xs">
            By: <span>{course.course_by}</span>
          </p>
          <div className="flex text-xs w-full">
            <p className="my-1">{course.total_lecture} Lectures</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p className="my-1">{timeConvert(course.duration)}</p>
          </div>
          <p className="text-xs">
            <span>
              {Math.floor(
                (course.completed_lecture / course.total_lecture) * 100
              )}
              % completed
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object,
};

export default CourseCard;
