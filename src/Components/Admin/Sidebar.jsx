import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import StarIcon from '@mui/icons-material/Star';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import PeopleIcon from '@mui/icons-material/People';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReportIcon from '@mui/icons-material/Report';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CircleIcon from '@mui/icons-material/Circle';

export function Sidebar({ isOpen, collapsed }) {
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const toggleExpand = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const MenuItem = ({ icon: Icon, text,  path, hasSubmenu, isExpanded, onClick, submenuItems }) => {
    const isActive = location.pathname === path;
    
    return (
      <div>
        <Link
          to={path}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/10
            ${isActive ? 'bg-[#4c35de]' : ''}`}
          onClick={onClick}
        >
          <Icon className="h-5 w-5" />
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{text}</span>
              {/* {badge && (
                <span className="rounded bg-[#00d0ff] px-2 text-xs">
                  {badge}
                </span>
              )} */}
              {hasSubmenu && (
                isExpanded ? 
                <KeyboardArrowUpIcon className="h-4 w-4" /> : 
                <KeyboardArrowDownIcon className="h-4 w-4" />
              )}
            </>
          )}
        </Link>
        {isExpanded && !collapsed && submenuItems && (
          <div className="ml-4 space-y-1 border-l border-white/20 pl-4">
            {submenuItems.map((subItem, index) => (
              <Link
                key={index}
                to={subItem.path}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/10"
              >
                <CircleIcon className="h-2 w-2" />
                <span>{subItem.text}</span>
                {/* {subItem.badge && (
                  <span className="ml-auto rounded bg-[#00d0ff] px-2 text-xs">
                    {subItem.badge}
                  </span>
                )} */}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const menuItems = [
    { icon: HomeIcon, text: "Dashboard", path: "/Admin/Dashboard" },
    { icon: CategoryIcon, text: "Category", path: "/Admin/Category", badge: "1" },
    { 
      icon: BusinessIcon, 
      text: "Companies", 
      path: "/Admin/Companies", 
      badge: "1",
      hasSubmenu: true,
      key: "companies",
      submenuItems: [
        { text: "All Companies", path: "/Admin/Companies/All" },
        { text: "AllCompany", path: "/Admin/Companies/Allnew" },
        { text: "Approved", path: "/Admin/Companies/Approved" },
        { text: "Pending", path: "/Admin/Companies/Pending", badge: "134" },
        { text: "Rejected", path: "/Admin/Companies/Rejected" }
      ]
    },
    { icon: StarIcon, text: "Review", path: "/Admin/Review" },
    { icon: AdUnitsIcon, text: "Advertisement", path: "/Admin/Advertisement" },
    { 
      icon: PeopleIcon, 
      text: "Manage Users", 
      path: "/Admin/ManageUsers", 
      badge: "1",
      hasSubmenu: true,
      key: "manageUsers",
      submenuItems: [
        { text: "Active Users", path: "/Admin/ManageUsers/Active" },
        { text: "Banned Users", path: "/Admin/ManageUsers/Banned" },
        { text: "Email Unverified", path: "/Admin/ManageUsers/EmailUnverified", badge: "186" },
        { text: "Mobile Unverified", path: "/Admin/ManageUsers/MobileUnverified" },
        { text: "All Users", path: "/Admin/ManageUsers/All" },
        { text: "Send Notification", path: "/Admin/ManageUsers/SendNotification" }
      ]
    },
    { 
      icon: ConfirmationNumberIcon, 
      text: "Support Ticket", 
      path: "/Admin/SupportTicket", 
      badge: "1",
      hasSubmenu: true,
      key: "supportTicket",
      submenuItems: [
        { text: "Pending Ticket", path: "/Admin/SupportTicket/Pending", badge: "20" },
        { text: "Closed Ticket", path: "/Admin/SupportTicket/Closed" },
        { text: "Answered Ticket", path: "/Admin/SupportTicket/Answered" },
        { text: "All Ticket", path: "/Admin/SupportTicket/All" }
      ]
    },
    { 
      icon: AssessmentIcon, 
      text: "Report", 
      path: "/Admin/Report",
      hasSubmenu: true,
      key: "report",
      submenuItems: [
        { text: "Login History", path: "/Admin/Report/LoginHistory" },
        { text: "Notification History", path: "/Admin/Report/NotificationHistory" }
      ]
    },
    { icon: SettingsIcon, text: "System Setting", path: "/Admin/SystemSetting" },
    { 
      icon: AddCircleOutlineIcon, 
      text: "Extra", 
      path: "/Admin/Extra",
      hasSubmenu: true,
      key: "extra",
      submenuItems: [
        { text: "Application", path: "/Admin/Extra/Application" },
        { text: "Server", path: "/Admin/Extra/Server" },
        { text: "Cache", path: "/Admin/Extra/Cache" },
        { text: "Update", path: "/Admin/Extra/Update" }
      ]
    },
    { icon: ReportIcon, text: "Report & Request", path: "/Admin/ReportRequest" }
  ];

  return (
    <aside className={`fixed left-0 top-0 z-40 h-screen transform bg-[#0a0b35] pt-16 transition-all duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      ${collapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex h-full flex-col gap-1 overflow-y-auto px-3 py-4">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            // badge={item.badge}
            path={item.path}
            hasSubmenu={item.hasSubmenu}
            isExpanded={expandedItems[item.key]}
            onClick={(e) => {
              if (item.hasSubmenu) {
                e.preventDefault();
                toggleExpand(item.key);
              }
            }}
            submenuItems={item.submenuItems}
          />
        ))}

        {!collapsed && (
          <div className="mt-auto pt-4 text-center text-sm font-medium text-[#4c35de]">
            RATELAB V3.0
          </div>
        )}
      </div>
    </aside>
  );
}

