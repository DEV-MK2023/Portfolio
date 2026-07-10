// src/components/sections/Projects.jsx

import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";


const projects = [

  {
    title: "Docket Notes",
    description:
      "A simple notes application built with HTML, SCSS, and JavaScript featuring a clean user interface.",
    image: "/notes.jpeg",
    tech: ["HTML", "CSS", "JavaScript", "SCSS"],
    github:
      "https://github.com/DEV-MK2023/Docket-A-Notes-App-.git",
    demo:
      "https://docket-a-notes-app.vercel.app",
  },


  {
    title: "Task Manager",
    description:
      "A task management application allowing users to organize and manage daily tasks.",
    image: "/task.jpeg",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/DEV-MK2023/Task-Manager",
    demo:
      "https://taskymanag3r.netlify.app",
  },


  {
    title: "Shopify",
    description:
      "An e-commerce interface with product filtering, shopping features, and responsive design.",
    image: "/shopify.jpeg",
    tech: ["HTML", "CSS", "jQuery"],
    github:
      "https://github.com/DEV-MK2023/Shopify",
    demo:
      "https://shopifystor.netlify.app",
  },


  {
    title: "FurniSpace",
    description:
      "A modern furniture e-commerce landing page with search filters, video integration, and responsive layouts.",
    image:
      "/furniture.jpeg",
    tech:
      ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/DEV-MK2023/E-Com-Web.git",
    demo:
      "https://e-com-we.netlify.app/",
  },


  {
    title: "Colors Hunt Clone",
    description:
      "A color palette application with search, filtering, and interactive UI features.",
    image:
      "/colors.jpeg",
    tech:
      ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/DEV-MK2023/Colors-Hunt.git",
    demo:
      "https://colors-hunt.vercel.app/",
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


        <p
          className="
          text-cyan-400
          mb-3
          font-medium
          "
        >
          My Work
        </p>



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

          Some projects that showcase my frontend development skills
          and problem-solving approach.

        </p>



      </motion.div>







      {/* Cards */}


      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        max-w-7xl
        mx-auto
        "
      >



        {
          projects.map((project,index)=>(


            <motion.div


              key={index}


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
                duration:0.5,
                delay:index*0.1
              }}



              whileHover={{
                y:-8
              }}



              className="
              group
              rounded-3xl
              overflow-hidden

              bg-white/5

              backdrop-blur-md

              border
              border-white/10

              hover:border-cyan-400/40

              transition

              shadow-xl

              "


            >



              {/* Image */}

              <div
                className="
                relative
                overflow-hidden
                "
              >


                <img

                  src={project.image}

                  alt={project.title}

                  className="
                  w-full
                  h-52
                  object-cover

                  group-hover:scale-110

                  transition
                  duration-500
                  "

                />



                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  "
                />


              </div>








              {/* Content */}


              <div
                className="
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
                    project.tech.map((tech,i)=>(

                      <span

                        key={i}

                        className="
                        text-xs
                        px-3
                        py-1
                        rounded-full

                        bg-cyan-400/10

                        border
                        border-cyan-400/20

                        text-cyan-300
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

                    rounded-lg

                    bg-white/10

                    text-white

                    text-sm

                    hover:bg-white/20

                    transition
                    "

                  >

                    <FaGithub/>

                    Code

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

                    rounded-lg

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