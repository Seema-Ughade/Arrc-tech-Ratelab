import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Components/Arrc-Ratelab-Review-UI/Layout';
import Footer from './Components/Arrc-Ratelab-Review-UI/Footer/Footer';
import ContactUs from './Components/Arrc-Ratelab-Review-UI/Contact/ContactUs';
import BlogSection from './Components/Arrc-Ratelab-Review-UI/Home/BlogSection';
import Navbar from './Components/Arrc-Ratelab-Review-UI/Navbar/Navbar';
import Companies from './Components/Arrc-Ratelab-Review-UI/Companies/Companies';
import RecentReviews from './Components/Arrc-Ratelab-Review-UI/Home/RecentReviews';
import BlogDetails from './Components/Arrc-Ratelab-Review-UI/Home/BlogDetails';
import TermsOfService from './Components/Arrc-Ratelab-Review-UI/Footer/TermsOfService';
import PrivacyPolicy from './Components/Arrc-Ratelab-Review-UI/Footer/PrivacyPolicy';

//admin
import AdminLayout from './Components/Admin/AdminLayout';
import AdminLoginForm from './Components/Admin/AdminLogin/AdminLoginForm';
import UserRegister from './Components/Admin/UserLogin/UserRegister';
import UserLogin from './Components/Admin/UserLogin/UserLogin';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ui routes */}
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Blog" element={<BlogSection />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/Review" element={<RecentReviews />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        {/* //admin routes*/}

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/Register" element={<UserRegister />} />

        <Route path="/login" element={<AdminLoginForm />} />


        <Route path="/Admin/*" element={<AdminLayout />} />
      </Routes>
      
      {/* Render Footer only for non-admin routes */}
      {!window.location.pathname.startsWith('/Admin') && <Footer />}
    </Router>
  );
}

export default App;
