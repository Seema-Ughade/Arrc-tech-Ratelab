'use client'

import React from 'react';
import { Users, CheckCircle, Mail, Phone, Building, ThumbsUp, Clock, Ban, ChevronRight } from 'lucide-react';
import { DonutChart } from './DonutChart';

const StatCard = ({ icon: Icon, bgColor, iconColor, title, value }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4">
      <div className={`p-2 ${bgColor} rounded-lg`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </div>
);

const Dashboard = () => {
  const userStats = [
    {
      icon: Users,
      bgColor: 'bg-violet-100',
      iconColor: 'text-violet-600',
      title: 'Total Users',
      value: '613'
    },
    {
      icon: CheckCircle,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Active Users',
      value: '427'
    },
    {
      icon: Mail,
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Email Unverified Users',
      value: '186'
    },
    {
      icon: Phone,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Mobile Unverified Users',
      value: '0'
    }
  ];

  const companyStats = [
    {
      icon: Building,
      bgColor: 'bg-violet-100',
      iconColor: 'text-violet-600',
      title: 'Total Companies',
      value: '136'
    },
    {
      icon: ThumbsUp,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Total Approved Companies',
      value: '2'
    },
    {
      icon: Clock,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Total Pending Companies',
      value: '134'
    },
    {
      icon: Ban,
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Total Rejected Companies',
      value: '0'
    }
  ];

  const chartData = {
    browser: [
      { name: 'Chrome', value: 68 },
      { name: 'Firefox', value: 12 },
      { name: 'Safari', value: 20 },
    ],
    os: [
      { name: 'Windows', value: 55 },
      { name: 'MacOS', value: 30 },
      { name: 'Linux', value: 15 },
    ],
    country: [
      { name: 'USA', value: 45 },
      { name: 'UK', value: 25 },
      { name: 'India', value: 20 },
      { name: 'Others', value: 10 },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {userStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Company Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {companyStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Login By Browser (Last 30 days)</h3>
          <DonutChart data={chartData.browser} />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Login By OS (Last 30 days)</h3>
          <DonutChart data={chartData.os} />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Login By Country (Last 30 days)</h3>
          <DonutChart data={chartData.country} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

