import React from 'react';

import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
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

import ProtectedRoute from './Components/Admin/ProtectedRoute'
import UserLayout from './Components/Admin/UserLayout';
import ReviewPage from './Components/Arrc-Ratelab-Review-UI/Companies/ReviewPage';
const App = () => {
  const location = useLocation();  // useLocation hook to track the current route

  return (<>
      <Navbar />
      <Routes>
        {/* ui routes */}
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Blog" element={<BlogSection />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/company/:id" element={<ReviewPage />} />

        <Route path="/Review" element={<RecentReviews />} />
        <Route path="/BlogDetails/:id" element={<BlogDetails />} />
        
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        {/* //admin routes*/}

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/Register" element={<UserRegister />} />

        <Route path="/login" element={<AdminLoginForm />} />


        {/* <Route path="/Admin/*" element={<AdminLayout />} /> */}
        <Route
          path="/Admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/*"
          element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* Render Footer only for non-admin routes */}
      {!location.pathname.startsWith('/Admin') && <Footer />}
      </>
  );
}

// export default App;
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
