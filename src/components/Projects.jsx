// src/components/sections/Projects.jsx
import { motion } from "framer-motion";


const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    image: "/pic2.jpeg",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Manager",
    description: "A full-stack app for managing daily tasks with authentication.",
    image: "/pic5.jpeg",
    tech: ["MERN", "JWT", "Redux"],
    github: "https://github.com/DEV-MK2023/Task-Manager",
    demo: "https://taskymanag3r.netlify.app",
  },
  {
    title: "Shopify",
    description: "An online store with product filters, cart, and checkout system.",
    image: "/pic4.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/DEV-MK2023/Shopify",
    demo: "https://shopifystor.netlify.app",
  },
  {
    title: "Docket Notes",
    description: "A simple notes app built with HTML, SCSS, and JavaScript.",
    image: "/notes.jpeg",
    tech: ["HTML", "CSS", "JavaScript", "SCSS"],
    github: "https://github.com/DEV-MK2023/Docket-A-Notes-App-.git",
    demo: "https://docket-a-notes-app.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <p className="text-slate-400 mt-3 text-base">
          A few things I've recently built
        </p>
      </motion.div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden group">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(96, 165, 250, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                    className="text-xs px-3 py-1 rounded-full text-blue-300 border border-blue-500/20 bg-blue-500/10"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-start gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
