import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import ExpenseImg from '../img/prj_img/expence.jpg' 
import BookImg from '../img/prj_img/book.jpg' 
import PlaneImg from '../img/prj_img/plane.jpg' 

const Home: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23374151%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full opacity-20"
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-2xl text-gray-400 mb-4">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient bg-300%">
                  Aryan Agarwal
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                Python Developer & AI Enthusiast
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Aspiring Developer and student with a strong interest in AI and
                full-stack development. Skilled in Python, C++, MongoDB, and
                modern web technologies, I'm always eager to learn, innovate,
                and solve real-world problems through tech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-primary-400 rounded-lg text-gray-300 hover:text-primary-400 font-medium transition-all duration-200 transform hover:scale-105"
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>AI Enthusiast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Python & C++ Dev</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 px-6 bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Featured Work
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  A showcase of my recent projects and creative solutions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal direction="up" delay={0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-700 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={BookImg}
                    alt="The Book Shoppe"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      The Book Shoppe
                    </h3>
                    <p className="text-gray-400 mb-4">
                      A full-stack online bookstore where users can browse and
                      purchase books seamlessly.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-600 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-700 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={ExpenseImg}
                    alt="The Book Shoppe"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Hisaabkaro
                    </h3>
                    <p className="text-gray-400 mb-4">
                      A mobile app for smart bill-splitting among friends using
                      Firebase and MongoDB.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {[
                        "Java",
                        "XML",
                        "MongoDB",
                        "Firebase",
                        "Android Studio",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-600 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.6}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-700 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={PlaneImg}
                    alt="The Book Shoppe"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      X-Regal (RC Plane)
                    </h3>
                    <p className="text-gray-400 mb-4">
                      A successful radio-controlled aircraft project built using
                      carbon fiber and embedded systems.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {[
                        "Electronics",
                        "Aerodynamics",
                        "Servo Motors",
                        "Carbon Fiber",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-600 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="text-center mt-12">
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
