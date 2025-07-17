import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import ExpenseImg from "../img/prj_img/expence.jpg";
import BookImg from "../img/prj_img/book.jpg";
import PlaneImg from "../img/prj_img/plane.jpg";

const projects = [
  {
    id: 1,
    title: "The Book Shoppe",
    image: BookImg,
    description:
      "A full-stack online bookstore where users can browse and purchase books seamlessly. Features include user authentication, book search, cart, order management, and an admin dashboard for inventory control.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
    ],
    github: "https://github.com/yourusername/bookshoppe",
    demo: "https://bookshoppe-demo.com",
    features: [
      "User authentication and profile management",
      "Book search and filtering",
      "Shopping cart and order placement",
      "Admin dashboard for inventory and orders",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing secure authentication",
      "Optimizing database queries for fast search",
      "Designing a scalable backend for order processing",
    ],
    learnings: [
      "Deepened understanding of REST APIs and MongoDB aggregation",
      "Improved skills in responsive UI with TailwindCSS",
      "Experience with JWT authentication and session management",
    ],
    screenshots: [BookImg],
  },
  {
    id: 2,
    title: "Hisaabkaro",
    image: ExpenseImg,
    description:
      "A mobile app for smart bill-splitting among friends using Firebase and MongoDB. Users can create groups, add expenses, and track who owes whom in real time.",
    tech: ["Java", "XML", "MongoDB", "Firebase", "Android Studio"],
    github: "https://github.com/yourusername/hisaabkaro",
    demo: "https://hisaabkaro-demo.com",
    features: [
      "Group creation and member management",
      "Expense tracking and split calculation",
      "Push notifications for updates",
      "Real-time sync with Firebase",
    ],
    challenges: [
      "Handling real-time data consistency",
      "Designing an intuitive mobile UI",
      "Integrating Firebase authentication and storage",
    ],
    learnings: [
      "Mastered Firebase Realtime Database and Authentication",
      "Enhanced mobile UI/UX design skills",
      "Learned about efficient state management in Android",
    ],
  },
  {
    id: 3,
    title: "X-Regal (RC Plane)",
    image: PlaneImg,
    description:
      "A successful radio-controlled aircraft project built using carbon fiber and embedded systems. The project involved designing, building, and flying an RC plane with custom electronics.",
    tech: [
      "Electronics",
      "Aerodynamics",
      "Servo Motors",
      "Carbon Fiber",
      "Embedded Systems",
    ],
    github: "https://github.com/yourusername/x-regal",
    demo: "",
    features: [
      "Custom-designed airframe using carbon fiber",
      "Embedded system for remote control",
      "Servo-based control surfaces",
      "Successful test flights and tuning",
    ],
    challenges: [
      "Balancing weight and strength in airframe design",
      "Programming reliable remote control logic",
      "Testing and tuning for stable flight",
    ],
    learnings: [
      "Hands-on experience with embedded hardware",
      "Understanding of aerodynamics and flight control",
      "Problem-solving in real-world engineering scenarios",
    ],
    screenshots: [PlaneImg],
  },
];

const badgeColors = [
  "bg-primary-600 text-white",
  "bg-secondary-600 text-white",
  "bg-accent-600 text-white",
  "bg-primary-700 text-white",
  "bg-secondary-700 text-white",
  "bg-accent-700 text-white",
];

const Projects: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-20 px-2 md:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  My Projects
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore my most impactful projects in detail, including
                features, challenges, and what I learned.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <ScrollReveal
                key={project.id}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 0.2}
              >
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-800 rounded-2xl overflow-hidden mb-10"
                >
                  {/* Project Image */}
                  <div className="w-full h-80 bg-dark-700 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Project Content */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-dark-700 ${
                            badgeColors[i % badgeColors.length]
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4 mb-8">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                    {/* Features, Challenges, Learnings */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                      <div>
                        <h3 className="text-lg font-semibold text-primary-400 mb-2">
                          Key Features
                        </h3>
                        <ul className="list-disc text-gray-400 space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-400 mb-2">
                          Challenges
                        </h3>
                        <ul className="list-disc text-gray-400 space-y-1">
                          {project.challenges.map((challenge, i) => (
                            <li key={i}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-accent-400 mb-2">
                          What I Learned
                        </h3>
                        <ul className="list-disc text-gray-400 space-y-1">
                          {project.learnings.map((learn, i) => (
                            <li key={i}>{learn}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
