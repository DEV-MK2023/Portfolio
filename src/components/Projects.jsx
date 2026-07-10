// src/components/sections/Projects.jsx

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  {
    title: "Docket Notes",
    description:
      "A simple notes application built with HTML, CSS, JavaScript, and SCSS featuring clean UI and smooth interactions.",
    image: "/notes.jpeg",
    tech: ["HTML", "CSS", "JavaScript", "SCSS"],
    github: "https://github.com/DEV-MK2023/Docket-A-Notes-App-.git",
    demo: "https://docket-a-notes-app.vercel.app",
  },

  {
    title: "Task Manager",
    description:
      "A task management application designed to organize daily tasks with a simple and responsive interface.",
    image: "/task.jpeg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DEV-MK2023/Task-Manager",
    demo: "https://taskymanag3r.netlify.app",
  },

  {
    title: "Shopify",
    description:
      "An e-commerce frontend with product layouts, filtering features, and a modern shopping experience.",
    image: "/shopify.jpeg",
    tech: ["HTML", "CSS", "jQuery"],
    github: "https://github.com/DEV-MK2023/Shopify",
    demo: "https://shopifystor.netlify.app",
  },

  {
    title: "FurniSpace",
    description:
      "A responsive furniture e-commerce landing page with product filtering, video integration, and modern layouts.",
    image: "/furniture.jpeg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DEV-MK2023/E-Com-Web.git",
    demo: "https://e-com-we.netlify.app/",
  },

  {
    title: "Colors Hunt Clone",
    description:
      "A color palette application featuring search, filtering, and interactive sorting for better user experience.",
    image: "/colors.jpeg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DEV-MK2023/Colors-Hunt.git",
    demo: "https://colors-hunt.vercel.app/",
  },
];


const Projects = () => {


  return (

    <section
      id="projects"
      className="
      py-24
      px-6
      md:px-12
      lg:px-24
      "
    >


      {/* Heading */}

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:0.7
        }}

        className="
        text-center
        mb-16
        "

      >

        <span
          className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-400/20
          text-cyan-400
          text-sm
          mb-5
          "
        >
          My Work
        </span>


        <h2
          className="
          text-4xl
          sm:text-5xl
          font-bold
          text-white
          "
        >
          Featured Projects
        </h2>


        <p
          className="
          text-slate-400
          mt-4
          max-w-xl
          mx-auto
          "
        >
          Some of the projects I have built while improving my frontend
          development skills and exploring modern web technologies.
        </p>


      </motion.div>





      {/* Cards */}

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >


        {
          projects.map((project,index)=>(


            <motion.div

              key={project.title}


              initial={{
                opacity:0,
                y:50
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              transition={{
                duration:0.6,
                delay:index*0.12
              }}



              whileHover={{
                y:-8
              }}


              className="
              group
              relative
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:border-cyan-400/40
              transition-all
              duration-300
              "

            >



              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500/10
                to-purple-600/10
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                "
              />




              {/* Image */}

              <div
                className="
                relative
                overflow-hidden
                h-52
                "
              >

                <img

                  src={project.image}

                  alt={project.title}

                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-500
                  "

                />


                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  to-transparent
                  "
                />


                <span
                  className="
                  absolute
                  top-4
                  left-4
                  px-3
                  py-1
                  rounded-full
                  bg-black/50
                  text-cyan-300
                  text-xs
                  border
                  border-white/10
                  "
                >
                  Project {index+1}
                </span>


              </div>





              {/* Content */}

              <div
                className="
                relative
                p-6
                "
              >


                <h3
                  className="
                  text-xl
                  font-bold
                  text-white
                  mb-3
                  "
                >
                  {project.title}
                </h3>



                <p
                  className="
                  text-slate-400
                  text-sm
                  leading-relaxed
                  mb-5
                  "
                >
                  {project.description}
                </p>




                {/* Tech */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-2
                  mb-6
                  "
                >

                  {
                    project.tech.map((tech)=>(

                      <span

                        key={tech}

                        className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        text-cyan-300
                        bg-cyan-500/10
                        border
                        border-cyan-400/20
                        "
                      >

                        {tech}

                      </span>

                    ))
                  }

                </div>





                {/* Buttons */}

                <div
                  className="
                  flex
                  gap-3
                  "
                >


                  <a

                    href={project.github}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    bg-white/10
                    text-white
                    text-sm
                    hover:bg-white/20
                    transition
                    "

                  >

                    <FaGithub/>

                    GitHub

                  </a>




                  <a

                    href={project.demo}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    text-white
                    text-sm
                    hover:scale-105
                    transition
                    "

                  >

                    <FaExternalLinkAlt/>

                    Demo

                  </a>


                </div>



              </div>


            </motion.div>


          ))
        }


      </div>


    </section>

  );

};


export default Projects;