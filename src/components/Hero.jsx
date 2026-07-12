// src/components/Hero.jsx

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
        gap-14
        items-center
        "
      >



        {/* Content */}


        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >



          <p
            className="
            text-cyan-400
            font-medium
            mb-4
            "
          >
            Hello, I'm
          </p>




          <h1
            className="
            text-5xl
            lg:text-6xl
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





          <h2
            className="
            text-2xl
            lg:text-3xl
            font-semibold
            mt-5
            text-slate-200
            "
          >
            Frontend Developer
          </h2>





          <p
            className="
            mt-6
            text-slate-400
            max-w-xl
            leading-relaxed
            "
          >

            I build responsive and user-friendly web applications
            using React.js, JavaScript, and modern frontend
            technologies. I enjoy creating clean interfaces,
            solving problems, and improving my skills through
            real-world projects.

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

              href="/Muneeb-Cv.pdf"

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







        {/* Profile Image */}



        <motion.div

          initial={{
            opacity:0,
            scale:0.85
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.8
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



            {/* Glow */}

            <div

              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-600
              blur-3xl
              opacity-30
              rounded-3xl
              "

            />





            <img

              src="/muneeb.jpeg"

              alt="Muhammad Muneeb Zafar"

              className="
              relative
              w-72
              md:w-[420px]
              aspect-[4/5]
              object-cover
              rounded-3xl
              shadow-2xl
              border
              border-white/10
              "

            />



          </motion.div>



        </motion.div>




      </div>


    </section>

  );

}


export default Hero;