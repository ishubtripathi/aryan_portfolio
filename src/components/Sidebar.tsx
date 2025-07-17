import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from '../img/profile.png' 
import {
  Home,
  User,
  FolderOpen,
  Code,
  Mail,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: User, label: "About" },
    { to: "/projects", icon: FolderOpen, label: "Projects" },
    { to: "/skills", icon: Code, label: "Skills" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/iaryanagarwal/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Aryanam031", icon: Github, label: "GitHub" },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-80 bg-dark-800 border-r border-dark-700 flex flex-col h-screen"
    >
      {/* Profile Section */}
      <div className="p-8 border-b border-dark-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-purple-700 shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Aryan Agarwal</h1>
          <p className="text-gray-400 text-sm upp">Python Developer</p>
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
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-dark-700"
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="p-6 border-t border-dark-700"
      >
        <a
          href="/resume.pdf" 
          download="Aryan_Agarwal_Resume.pdf"
          className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          <Download className="w-4 h-4" />
          <span className="font-medium">Download Resume</span>
        </a>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
