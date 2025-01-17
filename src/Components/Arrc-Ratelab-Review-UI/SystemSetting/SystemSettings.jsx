import React, { useState } from 'react';
import { FaSearch, FaCog, FaImage, FaBell, FaGlobe, FaColumns, FaList, FaUsers, 
         FaLanguage, FaPuzzlePiece, FaShieldAlt, FaRobot, FaCookie, FaCode, 
         FaSitemap, FaFileAlt } from 'react-icons/fa';

const SystemSettings = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const settingsCards = [
    {
      icon: FaCog,
      title: "General Setting",
      description: "Configure the fundamental information of the site.",
      bgIcon: FaCog,
      path: "/Admin/general-settings"
    },
    {
      icon: FaImage,
      title: "Logo and Favicon",
      description: "Upload your logo and favicon here.",
      bgIcon: FaImage,
      path: "/Admin/logo-favicon"
    },
    // {
    //   icon: FaCog,
    //   title: "System Configuration",
    //   description: "Control all of the basic modules of the system.",
    //   bgIcon: FaCog,
    //   path: "/Admin/system-config"
    // },
    // {
    //   icon: FaBell,
    //   title: "Notification Setting",
    //   description: "Control and configure overall notification elements of the system.",
    //   bgIcon: FaBell,
    //   path: "/Admin/notifications"
    // },
    {
      icon: FaGlobe,
      title: "SEO Configuration",
      description: "Configure proper meta title, meta description, meta keywords, etc to make the system SEO-friendly.",
      bgIcon: FaGlobe,
      path: "/Admin/seo"
    },
    {
      icon: FaColumns,
      title: "Manage Frontend",
      description: "Control all of the frontend contents of the system.",
      bgIcon: FaColumns,
      path: "/Admin/frontend"
    },
    {
      icon: FaList,
      title: "Manage Pages",
      description: "Control dynamic and static pages of the system.",
      bgIcon: FaList,
      path: "/Admin/pages"
    },
    {
      icon: FaUsers,
      title: "Social Login Setting",
      description: "Provide the required information here to use the login system by social media.",
      bgIcon: FaUsers,
      path: "/Admin/social-login"
    },
    // {
    //   icon: FaLanguage,
    //   title: "Language",
    //   description: "Configure your required languages and keywords to localize the system.",
    //   bgIcon: FaLanguage,
    //   path: "/Admin/language"
    // },
    // {
    //   icon: FaPuzzlePiece,
    //   title: "Extensions",
    //   description: "Manage extensions of the system here to extend some extra features of the system.",
    //   bgIcon: FaPuzzlePiece,
    //   path: "/Admin/extensions"
    // },
    {
      icon: FaShieldAlt,
      title: "Policy Pages",
      description: "Configure your policy and terms of the system here.",
      bgIcon: FaShieldAlt,
      path: "/Admin/policy"
    },
    // {
    //   icon: FaRobot,
    //   title: "Maintenance Mode",
    //   description: "Enable or disable the maintenance mode of the system when required.",
    //   bgIcon: FaRobot,
    //   path: "/Admin/maintenance"
    // },
    {
      icon: FaCookie,
      title: "GDPR Cookie",
      description: "Set GDPR Cookie policy if required. It will ask visitor of the system to accept if enabled.",
      bgIcon: FaCookie,
      path: "/Admin/gdpr"
    },
    {
      icon: FaCode,
      title: "Custom CSS",
      description: "Write custom css here to modify some styles of frontend of the system if you need to.",
      bgIcon: FaCode,
      path: "/Admin/custom-css"
    },
    {
      icon: FaSitemap,
      title: "Sitemap XML",
      description: "Insert the sitemap XML here to enhance SEO performance.",
      bgIcon: FaSitemap,
      path: "/Admin/sitemap"
    },
    {
      icon: FaFileAlt,
      title: "Robots txt",
      description: "Insert the robots.txt content here to enhance bot web crawlers and instruct them on how to interact with certain areas of the website.",
      bgIcon: FaFileAlt,
      path: "/Admin/robots"
    }
  ];

  const filteredCards = settingsCards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (path) => {
    window.location.href = path;
  };

  const SettingsCard = ({ icon: Icon, title, description, bgIcon: BgIcon, path }) => (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 relative overflow-hidden cursor-pointer"
      onClick={() => handleCardClick(path)}
    >
      <div className="flex items-start space-x-4 relative z-10">
        <div className="bg-indigo-600 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 text-gray-100 opacity-10 transform rotate-12">
        <BgIcon className="w-24 h-24" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          System Settings
        </h1>
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, index) => (
            <SettingsCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bgIcon={card.bgIcon}
              path={card.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;

