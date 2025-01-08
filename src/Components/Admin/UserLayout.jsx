
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserNavbar from '../UserLogin/UserNavbar';
import UserSidebar from '../UserLogin/UserSidebar';
import UserDashboard from '../UserLogin/UserDashboard';
import ProfileSection from '../UserLogin/Profile/ProfileSection';
import ReviewsSection from '../UserLogin/Reviews/ReviewsSection';
import OpenTicketForm from '../UserLogin/tickets/OpenTicketForm';
import ChangePasswordForm from '../UserLogin/Profile/ChangePasswordForm';
import AddCompany from '../UserLogin/AddCompany/AddCompany';
import CompanyList from '../UserLogin/AddCompany/CompanyList';
import SupportTicket from '../UserLogin/tickets/SupportTicket';

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Image */}
      <div
        className="h-80 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://script.viserlab.com/ratelab/assets/images/frontend/breadcrumb/6354d380899a21666503552.jpg')`
        }}
      />

      <div className="container mx-auto px-4">
        <div className="relative -mt-24 flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <UserSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <UserNavbar />
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <Routes>
                <Route path="/" element={<ProfileSection />} />
                <Route path="/profile" element={<ProfileSection />} />
                <Route path="/reviews" element={<ReviewsSection />} />
                <Route path="/ticket/new" element={<OpenTicketForm />} />
                <Route path="/ticket" element={<SupportTicket />} />
                <Route path="/change-password" element={<ChangePasswordForm />} />
                <Route path="/company/create" element={<AddCompany />} />
                <Route path="/company/all" element={<CompanyList />} />

              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;

