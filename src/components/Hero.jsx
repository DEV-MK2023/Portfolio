// src/components/sections/Hero.jsx

import { motion } from "framer-motion";


function Hero() {


  return (


    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      px-6
      lg:px-20
      pt-28
      "
    >



      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >





        {/* Content */}


        <motion.div


          initial={{
            opacity:0,
            x:-60
          }}


          animate={{
            opacity:1,
            x:0
          }}


          transition={{
            duration:0.8,
            ease:"easeOut"
          }}


        >




          <motion.span

            initial={{
              opacity:0,
              y:-20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:0.2
            }}

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

            Frontend Developer

          </motion.span>






          <h1

            className="
            text-5xl
            lg:text-7xl
            font-extrabold
            leading-tight
            "

          >

            Muhammad

            <span

              className="
              block
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              "

            >

              Muneeb Zafar

            </span>


          </h1>





          <motion.h2

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:0.5
            }}

            className="
            text-2xl
            mt-5
            text-slate-300
            "

          >

            Building modern web experiences 🚀

          </motion.h2>







          <p

            className="
            mt-6
            text-slate-400
            max-w-xl
            leading-relaxed
            "

          >

            I build responsive and user-friendly web applications
            using HTML, CSS, JavaScript, React.js, and modern
            frontend technologies. I focus on creating clean
            interfaces, solving problems, and continuously improving
            my development skills.

          </p>







          <div

            className="
            flex
            flex-col
            sm:flex-row
            gap-5
            mt-8
            "

          >




            <motion.a

              href="/Muneeb_Zafar_CV.pdf"

              download


              whileHover={{
                scale:1.05
              }}


              whileTap={{
                scale:0.95
              }}


              className="
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              shadow-lg
              text-center
              "

            >

              Download CV

            </motion.a>






            <motion.a

              href="#projects"


              whileHover={{
                scale:1.05
              }}


              whileTap={{
                scale:0.95
              }}


              className="
              px-7
              py-3
              rounded-full
              border
              border-cyan-400
              text-cyan-400
              hover:bg-cyan-400
              hover:text-black
              transition
              text-center
              "

            >

              View Projects

            </motion.a>





          </div>




        </motion.div>








        {/* Image */}



        <motion.div


          initial={{
            opacity:0,
            scale:0.8
          }}


          animate={{
            opacity:1,
            scale:1
          }}


          transition={{
            duration:0.9,
            delay:0.2
          }}


          className="
          flex
          justify-center
          "

        >




          <motion.div


            animate={{
              y:[0,-10,0]
            }}


            transition={{
              duration:4,
              repeat:Infinity,
              ease:"easeInOut"
            }}


            className="
            relative
            "

          >





            <div

              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-600
              rounded-3xl
              blur-3xl
              opacity-30
              "

            />





            <img


              src="/muneeb.jpeg"


              alt="Muhammad Muneeb Zafar"


              className="
              relative
              w-72
              md:w-96
              rounded-3xl
              shadow-2xl
              border
              border-white/10
              hover:scale-105
              transition
              duration-500
              "

            />





          </motion.div>





        </motion.div>




      </div>




    </section>



  );


}


export default Hero;