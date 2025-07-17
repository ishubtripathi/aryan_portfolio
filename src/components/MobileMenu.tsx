import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Code, Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/projects', icon: FolderOpen, label: 'Projects' },
    { to: '/skills', icon: Code, label: 'Skills' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: 0.3 }}
        className="w-80 bg-dark-800 h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Profile Section */}
        <div className="p-8 border-b border-dark-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">AA</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Aryan Agarwal</h1>
            <p className="text-gray-400 text-sm">Full-Stack Developer</p>
            <div className="mt-4 flex justify-center space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-200"
                >
                  <link.icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-dark-700'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Download Resume Button */}
        <div className="p-6 border-t border-dark-700">
          <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 rounded-lg transition-all duration-200 transform hover:scale-105">
            <Download className="w-4 h-4" />
            <span className="font-medium">Download Resume</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;