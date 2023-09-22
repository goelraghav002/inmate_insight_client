// import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col w-64 h-72 bg-[#F8F8F9] rounded-xl p-4 m-4">
      <div className="rounded-xl w-full h-36 flex items-center justify-center">
        <img src="https://i.ytimg.com/vi/_DVVNOGYtmU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQHe5HFyk-csRHStg7kSJ38aHPfw" alt="" className="w-full h-full rounded-xl" />
      </div>

      <div className="flex flex-col px-2 py-2">
        <h2 className="font-bold text-2xl my-2">{course.title}</h2>
        <p className="text-xs">By: <span>{course.course_by}</span></p>
        <div className="flex text-xs w-full">
          <p className="my-1">{course.total_lecture} Lectures</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="my-1">{course.duration} Hours</p>
        </div>
        <p className="text-xs"><span>{Math.floor(course.completed_lecture / course.total_lecture * 100)}% completed</span></p>
      </div>
    </div>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object,
};

export default CourseCard
