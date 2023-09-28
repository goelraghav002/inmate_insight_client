import { Route, Routes } from 'react-router-dom'
import './App.css'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Profile from './pages/profile/Profile'
import PastData from './pages/PastData'
import Home from './pages/home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<Course />} />
      <Route path="/resources" element={<Home />} />
      <Route path="/past-data" element={<PastData />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Home />} />
    </Routes>
  );
}

export default App;
