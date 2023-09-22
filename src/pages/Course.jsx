// import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { courses } from '../constants'
import { useParams } from 'react-router-dom';

const Course = () => {
  const course = courses[useParams().id - 1];
  const course_details = course.details;

  console.log(course_details)

  return (
    <div className="relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300">
      <div className="hidden sm:flex relative mr-4">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <Navbar title={course.title} />

        <div className="flex justify-between py-4">

          <div className=''>
            {/* <iframe src="https://www.youtube.com/embed/ThsdqPck-LA?si=Ou1Z26nopozDoTvZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe> */}
          </div>

          <div className=''>
            <div className='flex items-center flex-col sticky px-8 pb-8 bg-[#F8F8F9] h-[83vh] rounded-3xl w-56 lg:w-96 md:w-72 overflow-y-scroll'>
              <div className='font-bold text-3xl tracking-wide sticky pt-10 pb-5 top-0 flex w-full h-full justify-center bg-[#F8F8F9] z-10'>
                <h2>Course Content</h2>
              </div>

              <div className="w-full mt-3">
                {/* <h3 className="font-bold mb-6 text-lg">Useful Links</h3> */}
                {course_details.map((course_detail, index) => (
                  <div className="flex justify-start items-center my-4 py-3 px-5 rounded-lg bg-slate-100" key={index}>
                    <p><strong>Lecture {index+1}:</strong> {course_detail.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
