// src/components/sections/WhyHireMe.jsx

import { motion } from "framer-motion";


const strengths = [
  {
    title: "Problem Solver",
    description:
      "I enjoy debugging problems, understanding errors, and finding practical solutions instead of just copying fixes."
  },

  {
    title: "Full Stack Foundation",
    description:
      "Along with frontend development, I have hands-on experience with Node.js, Express, MongoDB, and REST APIs."
  },

  {
    title: "Continuous Learner",
    description:
      "I consistently build projects, explore new technologies, and improve my development workflow."
  },

  {
    title: "Clean Development",
    description:
      "I focus on readable code, responsive designs, and building applications with maintainability in mind."
  }
];



const WhyHireMe = () => {


  return (

    <section
      id="testimonials"
      className="
      py-24
      px-6
      md:px-12
      lg:px-24
      bg-transparent
      text-white
      "
    >


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

        className="max-w-6xl mx-auto"

      >


        <div className="text-center mb-14">


          <p
            className="
            text-cyan-400
            font-semibold
            mb-3
            "
          >
            Why Hire Me
          </p>



          <h2
            className="
            text-3xl
            sm:text-4xl
            font-bold
            "
          >

            A developer who enjoys building and improving

          </h2>



          <p
            className="
            text-slate-400
            mt-5
            max-w-3xl
            mx-auto
            leading-relaxed
            "
          >

            I am a Web Design & Development student focused on creating
            modern web applications. I combine frontend skills with backend
            fundamentals and a strong problem-solving mindset to build
            reliable digital solutions.

          </p>


        </div>




        <div
          className="
          grid
          sm:grid-cols-2
          gap-6
          "
        >

          {
            strengths.map((item,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*0.1
                }}

                whileHover={{
                  y:-6
                }}


                className="
                p-6
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:border-cyan-400/50
                transition
                "

              >


                <h3
                  className="
                  text-xl
                  font-semibold
                  text-white
                  mb-3
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                  text-slate-300
                  leading-relaxed
                  "
                >

                  {item.description}

                </p>


              </motion.div>


            ))
          }


        </div>



      </motion.div>


    </section>

  );

};


export default WhyHireMe;