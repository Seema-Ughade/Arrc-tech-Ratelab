import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Category from './category/Categories';
import PendingCompanies from './Companies/PendingCompanies';
import Reviews from './Reviews/Reviews';
import AdvertisementList from './AdvertisementList/AdvertisementList';
import AllCompanyManagement from './Companies/AllCompanyManagement';
import ApprovedCompanies from './Companies/ApprovedCompanies';
import RejectedCompanies from './Companies/RejectedCompanies';
import ActiveUsers from './Manage Users/ActiveUsers';
import BannedUsers from './Manage Users/BannedUsers';
import EmailUnverifiedUsers from './Manage Users/EmailUnverifiedUsers';
import AllUsers from './Manage Users/AllUsers';
import MobileUnverifiedUsers from './Manage Users/MobileUnverifiedUsers';
import NotificationForm from './Manage Users/NotificationForm';
import TicketList from './Supports Tickets/TicketList';
import TicketReply from './Supports Tickets/TicketReply';
import TicketManagement from './Supports Tickets/TicketManagement';
import ClosedTickets from './Supports Tickets/ClosedTickets';
import AnsweredTickets from './Supports Tickets/AnsweredTickets';
import ApplicationInfo from './Extra/ApplicationInfo';
import ServerInfo from './Extra/ServerInfo';
import ClearCache from './Extra/ClearCache';
import Systemupdates from './Extra/Systemupdates';
import NotificationHistory from './Reports/NotificationHistory';
import UserLoginHistory from './Reports/UserLoginHistory';
import ReportRequest from './ReportRequest';
// import Advertisement from './Advertisement/Advertisement';
// import ManageUsers from './ManageUsers/ManageUsers';
// import SupportTicket from './SupportTicket/SupportTicket';
// import Report from './Report/Report';
// import SystemSetting from './SystemSetting/SystemSetting';
// import Extra from './Extra/Extra';
// import ReportRequest from './ReportRequest/ReportRequest';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        onLogout={handleLogout}
        toggleSidebarCollapse={toggleSidebarCollapse}
      /> */}

      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onLogout={handleLogout}
        collapsed={sidebarCollapsed}  // Corrected prop name
        toggleSidebarCollapse={toggleSidebarCollapse}
      />
      <Sidebar isOpen={sidebarOpen} collapsed={sidebarCollapsed} />
      <main className={`pt-16 transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64'}`}>
        <div className="px-4 py-6">
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Category" element={<Category />} />

            <Route path="/Companies/All" element={<AllCompanyManagement />} />
            <Route path="/Companies/Approved" element={<ApprovedCompanies />} />
            <Route path="/Companies/Pending" element={<PendingCompanies />} />
            <Route path="/Companies/Rejected" element={<RejectedCompanies />} />

            <Route path="/Review" element={<Reviews />} />

            <Route path="/Advertisement" element={<AdvertisementList />} />

            <Route path="/ManageUsers/Active" element={<ActiveUsers />} />
            <Route path="/ManageUsers/Banned" element={<BannedUsers />} />
            <Route path="/ManageUsers/EmailUnverified" element={<EmailUnverifiedUsers />} />
            <Route path="/ManageUsers/All" element={<AllUsers />} />

            <Route path="/ManageUsers/MobileUnverified" element={<MobileUnverifiedUsers />} />
            <Route path="/ManageUsers/SendNotification" element={<NotificationForm />} />
            <Route path="/SupportTicket/Pending" element={<TicketManagement />} />
            <Route path="/SupportTicket/All" element={<TicketList />} />
            <Route path="/SupportTicket/Closed" element={<ClosedTickets />} />
            <Route path="/SupportTicket/Answered" element={<AnsweredTickets />} />
            <Route path="/Extra/Application" element={<ApplicationInfo />} />
            <Route path="/Extra/Server" element={<ServerInfo />} />
            <Route path="/Extra/Cache" element={<ClearCache />} />
            <Route path="/Extra/Update" element={<Systemupdates />} />

            <Route path="/Report/LoginHistory" element={<UserLoginHistory />} />
            <Route path="/Report/NotificationHistory" element={<NotificationHistory />} />
            <Route path="/ReportRequest" element={<ReportRequest />} />
          </Routes>
        </div>
      </main>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

