import React from 'react';
import { Facebook, Twitter, Instagram, PinIcon as Pinterest, Youtube, ArrowUp } from 'lucide-react';
import mainlogo from '../../../assets/mainlogo.png';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Pinterest, href: '#', label: 'Pinterest' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const menuColumns = [
    {
      title: 'Quick Menu',
      links: [
        { text: 'Review', href: '#' },
        { text: 'Support', href: '#' },
      ],
    },
    {
      title: 'Important Link',
      links: [
        { text: 'Terms of Service', href: '#' },
        { text: 'Privacy Policy', href: '#' },
      ],
    },
    {
      title: 'Site Links',
      links: [
        { text: 'Home', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img src={mainlogo} alt="RateLab" className="h-12" />
              <div className="ml-2">
                <span className="text-white font-bold text-xl">Rate</span>
                <span className="text-orange-400 font-bold text-xl">Lab</span>
                <div className="text-xs text-gray-400">BUSINESS REVIEW PLATFORM</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dolor sit amet consectetur adipisicing elit. Eligendi illo consequuntur eaque. Quidem saepe molestiae ducimus maiores. and Dolor sit amet consectetur adipisici...
            </p>
          </div>

          {/* Menu Columns */}
          {menuColumns.map((column, index) => (
            <div key={index} className="lg:col-span-2 md:col-span-1">
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                {column.title}
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-orange-400"></span>
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 <span className="text-orange-400">Ratelab</span>. All Right Reserved
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;

