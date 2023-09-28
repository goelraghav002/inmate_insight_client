// import Navbar from '../components/Navbar';
import "./Home.css";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { CourseCard, courses } from "./imports";

import { Link } from "react-router-dom";
const Home = () => {
  const { activeMenu } = useSelector((state) => state.activeMenu);

  return (
    <div className="relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300">
      <div className="flex relative mr-4">{activeMenu && <Sidebar />}</div>

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className=" mt-4  rounded-lg  ">
          <div>
            <h1 className=" mt-10 ml-10 text-2xl font-bold">
              <span>Welcome Back!</span> <br />{" "}
              <span className="text-4xl">AKSHANSH</span>
            </h1>
          </div>

          <div>
            <h4 className="mt-10 text-2xl ml-10 font-bold  ">
              Ongoing Courses
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start py-4">
              {/* <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard /> */}

              {courses.map((course, index) => (
                <Link key={index} to={`courses/${course.id}`}>
                  <CourseCard className="mr-1 " key={index} course={course} />
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-10">
            <h3 className="mt-10 text-2xl font-bold">INSIGHTS</h3>
            <div className="insight_content my-2 transition duration-700 ease-out hover:scale-105  bg-white  rounded-lg shadow-[0_0px_6px_3px_rgba(0,0,0,0.2)] ">
              <p className="mx-4 ">
                Mental health work with adults in contact with criminal justice
                system is not new. It is therefore surprising that bespoke
                mental health training for the range of practitioners and
                clinical problems is rare and piecemeal. Both the patterns of
                morbidity, with high rates of comorbidity and the multi-agency
                contexts in which mental health care is delivered make the
                acquisition and application of mental health skills and
                knowledge skills important.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
