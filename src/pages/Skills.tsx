import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Palette,
  FileCode,
  Terminal,
  Cpu,
  Settings,
  GitBranch,
  ServerCog,
  GitMerge,
  LayoutDashboard,
  CircleUser,
  Wrench,
  BookOpen,
  RefreshCw,
  MessageCircle,
  Clock,
  Smile,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";

const Skills: React.FC = () => {
  const categorizedSkills = [
    {
      title: "Languages & Frontend",
      icon: Code,
      color: "from-primary-400 to-secondary-400",
      skills: [
        { name: "HTML", icon: FileCode },
        { name: "CSS", icon: LayoutDashboard },
        { name: "JavaScript", icon: Terminal },
        { name: "C++", icon: Cpu },
        { name: "C", icon: Settings },
        { name: "Python", icon: BookOpen },
      ],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "from-secondary-400 to-accent-400",
      skills: [
        { name: "Node.js", icon: ServerCog },
        { name: "Express.js", icon: GitMerge },
        { name: "MongoDB", icon: Database },
        { name: "SQL", icon: FileCode },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Globe,
      color: "from-accent-400 to-primary-400",
      skills: [
        { name: "Git & GitHub", icon: GitBranch },
        { name: "VS Code", icon: Code },
        { name: "Eclipse", icon: FileCode },
      ],
    },
    {
      title: "Soft Skills",
      icon: Palette,
      color: "from-secondary-400 to-primary-400",
      skills: [
        { name: "Critical Thinking", icon: Cpu },
        { name: "Teamwork", icon: CircleUser },
        { name: "Problem Solving", icon: Wrench },
        { name: "Emotional Intelligence", icon: Smile },
        { name: "Adaptability", icon: RefreshCw },
        { name: "Communication", icon: MessageCircle },
        { name: "Time Management", icon: Clock },
        { name: "Curiosity & Learning", icon: BookOpen },
      ],
    },
  ];

  const experience = [
    {
      period: "June 2025 – Aug 2025",
      title: "Data Engineer Intern",
      company: "Celebal Technologies, Jaipur",
      description:
        "Worked with PySpark to transform raw data into clean, usable formats.",
      technologies: ["PySpark", "Python", "SQL", "Data Pipelines"],
    },
    {
      period: "2024",
      title: "Web Developer Intern",
      company: "Devyut Softech Pvt. Ltd.",
      description:
        "Contributed to small-scale projects across frontend and backend.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    },
    {
      period: "2023",
      title: "Intern",
      company: "Aerophantom",
      description:
        "Built and tested X-Regal RC aircraft and learned RC electronics.",
      technologies: [
        "Aerodynamics",
        "Carbon Fiber",
        "Embedded Systems",
        "RC Electronics",
      ],
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
                  My Skills
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A toolbox of technologies, languages, and soft skills that power
                my projects.
              </p>
            </div>
          </ScrollReveal>

          {/* Skills Section */}
          {categorizedSkills.map((category, i) => (
            <div key={i} className="mb-14">
              <ScrollReveal>
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="bg-dark-800 rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-2xl transition-shadow"
                    >
                      <skill.icon className="w-8 h-8 text-primary-400 mb-3" />
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {skill.name}
                      </h3>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}

          {/* Experience Timeline */}
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  Internship Experience
                </span>
              </h2>
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-400 to-secondary-400"></div>

                <div className="space-y-12">
                  {experience.map((exp, index) => (
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
                            <div className="text-primary-400 font-bold text-sm mb-2">
                              {exp.period}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-accent-400 font-medium mb-3">
                              {exp.company}
                            </p>
                            <p className="text-gray-400 mb-4">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-dark-700 text-gray-300 rounded text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

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

export default Skills;
