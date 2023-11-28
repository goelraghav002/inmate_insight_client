// import Navbar from '../components/Navbar';
import "./Home.css";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { CourseCard, courses } from "./imports";

import { Link } from "react-router-dom";
const Home = () => {
  const auth = useSelector((state) => state.auth);
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
              <span className="text-4xl">{auth.user.name}</span>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
