import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from 'react-hot-toast';
import PropTypes from "prop-types";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Insights from "./pages/Insights";
import AllStaff from './pages/AllStaff'
import Login from "./pages/Login";
import CreateStaff from "./pages/newStaff/CreateStaff";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isUserLoggedIn } from "./actions";

const RequireAuth = ({ children }) => {
  const user = window.localStorage.getItem("token");
  return user ? children : <Navigate to="/login" />;
};

RequireAuth.propTypes = {
  children: PropTypes.object.isRequired,
};

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <div>
      <Toaster />
      <Routes>
        
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/courses"
          element={
            <RequireAuth>
              <Courses />
            </RequireAuth>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <RequireAuth>
              <Course />
            </RequireAuth>
          }
        />
        <Route
          path="/insights"
          element={
            <RequireAuth>
              <Insights />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/all-staff"
          element={
            <RequireAuth>
              <AllStaff />
            </RequireAuth>
          }
        />
        <Route
          path="/all-staff/new"
          element={
            <RequireAuth>
              <CreateStaff />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
