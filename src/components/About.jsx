// src/components/sections/About.jsx

import { motion } from "framer-motion";


const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
];


function About() {

  return (

    <section
      id="about"
      className="
      min-h-screen
      px-6
      md:px-12
      lg:px-24
      py-24
      flex
      items-center
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        grid
        md:grid-cols-2
        gap-14
        items-center
        "
      >


        {/* Image */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.7
          }}

          className="
          flex
          justify-center
          "
        >

          <div className="relative">


            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              blur-3xl
              opacity-20
              "
            />


            <img

              src="/about.jpeg"

              alt="Muhammad Muneeb Zafar"

              className="
              relative
              w-72
              md:w-80
              rounded-3xl
              shadow-2xl
              border
              border-white/10
              "

            />


          </div>


        </motion.div>



        {/* Content */}


        <motion.div

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.7
          }}

        >


          <p
            className="
            text-cyan-400
            font-medium
            mb-3
            "
          >
            About Me
          </p>


          <h2
            className="
            text-4xl
            font-bold
            text-white
            mb-6
            "
          >
            Building clean and responsive web experiences
          </h2>



          <p
            className="
            text-slate-300
            leading-relaxed
            mb-5
            "
          >
            I'm Muhammad Muneeb Zafar, a Web Design & Development student
            focused on building modern and responsive web applications.
            I enjoy creating user-friendly interfaces and understanding
            how different parts of a web application work together.
          </p>



          <p
            className="
            text-slate-300
            leading-relaxed
            mb-8
            "
          >
            Alongside frontend development, I have been exploring backend
            technologies like Node.js, Express, and MongoDB. I enjoy
            debugging problems, improving my code, and building projects
            that solve real-world problems.
          </p>




          <h3
            className="
            text-xl
            font-semibold
            text-white
            mb-5
            "
          >
            Technologies I Work With
          </h3>



          <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-4
            "
          >

            {
              technologies.map((tech,index)=>(

                <motion.div

                  key={tech}

                  initial={{
                    opacity:0,
                    y:20
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    delay:index*0.08
                  }}

                  className="
                  px-4
                  py-3
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-center
                  text-slate-200
                  hover:border-cyan-400
                  hover:-translate-y-1
                  transition
                  "

                >

                  {tech}

                </motion.div>


              ))
            }


          </div>



        </motion.div>


      </div>


    </section>


  );

}


export default About;