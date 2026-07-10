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
  "REST APIs",
  "Git & GitHub",
];


const highlights = [
  {
    number: "5+",
    text: "Web Projects"
  },
  {
    number: "2+",
    text: "Years Learning"
  },
  {
    number: "Full Stack",
    text: "Development Focus"
  }
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
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.8
          }}

          className="flex justify-center"

        >

          <div className="relative">


            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-600
              blur-3xl
              opacity-25
              "
            />


            <motion.img

              whileHover={{
                scale:1.03
              }}

              transition={{
                duration:0.3
              }}

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
            x:60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.8
          }}

        >


          <p
            className="
            text-cyan-400
            font-semibold
            mb-3
            "
          >
            About Me
          </p>



          <h2
            className="
            text-3xl
            sm:text-4xl
            font-bold
            text-white
            mb-6
            leading-tight
            "
          >

            Building modern web applications with clean code and thoughtful design

          </h2>



          <p
            className="
            text-slate-300
            leading-relaxed
            mb-5
            "
          >

            I'm Muhammad Muneeb Zafar, a Web Design & Development student
            focused on creating responsive and user-friendly web applications.
            I enjoy turning ideas into practical digital solutions while
            continuously improving my development skills.

          </p>




          <p
            className="
            text-slate-300
            leading-relaxed
            mb-8
            "
          >

            My primary experience is in frontend development with React,
            JavaScript, and Tailwind CSS. I also work with backend
            technologies like Node.js, Express, and MongoDB to understand
            how complete web applications are built.

          </p>




          {/* Highlights */}

          <div
            className="
            grid
            grid-cols-3
            gap-3
            mb-8
            "
          >

            {
              highlights.map((item,index)=>(

                <motion.div

                  key={index}

                  whileHover={{
                    y:-5
                  }}

                  className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  p-3
                  text-center
                  "

                >

                  <h3
                    className="
                    text-cyan-400
                    font-bold
                    text-lg
                    "
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                    text-xs
                    text-slate-400
                    "
                  >
                    {item.text}
                  </p>


                </motion.div>

              ))
            }


          </div>





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
                    delay:index*0.06
                  }}


                  whileHover={{
                    scale:1.05
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