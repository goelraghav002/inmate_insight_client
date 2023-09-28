import { Route, Routes } from 'react-router-dom'
import './App.css'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Insights from './pages/Insights'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<Course />} />
      <Route path="/resources" element={<Home />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Home />} />
    </Routes>
  );
}

export default App;
