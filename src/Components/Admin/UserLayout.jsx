import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import UserDashboard from '../../Components/UserLogin/UserDashboard';
import UserProfile from '../../Components/UserLogin/UserProfile';
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
// import Layout from './Components/Arrc-Ratelab-Review-UI/Layout';
import Layout from '../Arrc-Ratelab-Review-UI/Layout';
import Footer from '../Arrc-Ratelab-Review-UI/Footer/Footer';

const UserLayout = () => {
  return (
    // <div className="flex">
    //   <aside className="w-64 bg-gray-800 text-white p-4">
    //     <nav>
    //       <ul>
    //         <li><Link to="/dashboard">Dashboard</Link></li>
    //         <li><Link to="/user/profile">Profile</Link></li>
    //       </ul>
    //     </nav>
    //   </aside>
    //   <main className="flex-1 p-4">
    //     <Routes>
    //       <Route path="/dashboard" element={<UserDashboard />} />
    //       <Route path="/profile" element={<UserProfile />} />
    //     </Routes>
    //   </main>
    // </div>






    <Router>
    <Navbar />
    <Routes>
      {/* ui routes */}
      <Route path="/" element={<Layout />} />

      <Route path="/user/dashboard" element={<UserDashboard />} />
             <Route path="/profile" element={<UserProfile />} />

    </Routes>

     <Footer />
  </Router>

  );
};

export default UserLayout;