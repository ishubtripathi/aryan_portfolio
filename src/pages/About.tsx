import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Award } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import ProgrammingGif from "../img/gif/programming.gif";

const About: React.FC = () => {
  const stats = [
    { number: "2+", label: "Years of Development Experience", icon: Calendar },
    { number: "2+", label: "Major Projects Built", icon: Award },
  ];

  const journey = [
    {
      year: "2022",
      title: "B.Tech Journey Begins",
      description:
        "Started my Computer Science Engineering at PIET, Jaipur and began learning Python and C++.",
    },
    {
      year: "2023",
      title: "Major Hardware Project",
      description:
        "Created and successfully launched “X-Regal” RC aircraft during the Aerophantom internship.",
    },
    {
      year: "2024",
      title: "Project Development Phase",
      description:
        "Built projects like The Book Shoppe and Hisaabkaro; dived deeper into full-stack and mobile development.",
    },
    {
      year: "2025",
      title: "Focused on AI and Data Analysis",
      description:
        "Diving deep into artificial intelligence and data analysis—building intelligent systems, analyzing real-world data, and crafting solutions that drive meaningful insights and automation.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get to know the person behind the code
              </p>
            </div>
          </ScrollReveal>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 opacity-80 flex items-center justify-center">
                      <img
                        src={ProgrammingGif}
                        alt="Programming"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-80"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="bg-dark-800 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">Based in India</span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <stat.icon className="w-5 h-5 text-accent-400" />
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {stat.number}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <ScrollReveal direction="right">
                <div>
                  <h2 className="text-3xl font-bold text-orange-600 mb-6">
                    My Story
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Hello! I'm Aryan Agarwal, a Computer Science Engineering
                      student with a strong passion for Python development,
                      artificial intelligence, and full-stack web development.
                      My journey began with a curiosity for building digital
                      solutions, and it has grown into a drive to craft
                      efficient, scalable, and meaningful tech products.
                    </p>
                    <p>
                      Over time, I’ve built diverse projects—from full-stack
                      applications like online bookstores and expense trackers
                      to hardware-integrated systems like radio-controlled
                      aircraft. I enjoy merging problem-solving with creativity
                      to deliver high-impact results using technologies such as
                      React, Node.js, MongoDB, and Firebase.
                    </p>
                    <p>
                      Outside of tech, I love exploring sports like basketball
                      and table tennis, and I'm a gym enthusiast too. I believe
                      in continuous learning and am always eager to explore new
                      tools, collaborate with others, and contribute to
                      innovative solutions.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-6">
                    What I Do
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Frontend Development with HTML, CSS, JavaScript",
                      "Backend Development using Node.js, Express.js",
                      "Mobile App Development with Android Studio & Java",
                      "Database Integration with MongoDB & SQL",
                      "AI & Data Processing with Python, Pandas, and NumPy",
                      "Creative Problem Solving & UI Design Implementation",
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Journey Timeline */}
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
                My Journey
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-400 to-secondary-400"></div>

                <div className="space-y-12">
                  {journey.map((item, index) => (
                    <ScrollReveal
                      key={index}
                      direction={index % 2 === 0 ? "left" : "right"}
                      delay={index * 0.2}
                    >
                      <div
                        className={`flex items-center ${
                          index % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`w-full max-w-md ${
                            index % 2 === 0 ? "pr-8" : "pl-8"
                          }`}
                        >
                          <div className="bg-dark-800 rounded-xl p-6 relative">
                            <div className="text-primary-400 font-bold text-lg mb-2">
                              {item.year}
                            </div>
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-300 to-secondary-400 bg-clip-text text-transparent mb-3">
                              {item.title}
                            </h3>
                            <p className="text-gray-400">{item.description}</p>

                            {/* Timeline Dot */}
                            <div
                              className={`absolute top-6 ${
                                index % 2 === 0 ? "-right-4" : "-left-4"
                              } w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center`}
                            >
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
