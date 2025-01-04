import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Category from './category/Categories';
import PendingCompanies from './Companies/PendingCompanies';
import Reviews from './Reviews/Reviews';
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
            {/* <Route path="/Companies/*" element={<PendingCompanies />} /> */}
            <Route path="/Companies/Pending" element={<PendingCompanies />} />
            <Route path="/Review" element={<Reviews />} />
            {/* <Route path="/Advertisement" element={<Advertisement />} />
            <Route path="/ManageUsers/*" element={<ManageUsers />} />
            <Route path="/SupportTicket/*" element={<SupportTicket />} />
            <Route path="/Report/*" element={<Report />} />
            <Route path="/SystemSetting" element={<SystemSetting />} />
            <Route path="/Extra/*" element={<Extra />} />
            <Route path="/ReportRequest" element={<ReportRequest />} /> */}
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

