// src/components/sections/Her.jsx

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



        {/* Left Content */}

        <motion.div

          initial={{
            opacity: 0,
            x: -50
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.8,
            ease: "easeOut"
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
            text-3xl
            lg:text-4xl
            font-semibold
            mt-5
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
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
            solving problems, and continuously improving my skills
            through real-world projects.
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
                scale: 1.05
              }}

              whileTap={{
                scale: 0.95
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






        {/* Right Image */}


        <motion.div

          initial={{
            opacity:0,
            x:50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          flex
          justify-center
          "

        >


          <div
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
              to-purple-600
              rounded-3xl
              blur-3xl
              opacity-30
              "
            />



            <motion.img

              src="/muneeb.jpeg"

              alt="Muhammad Muneeb Zafar"

              animate={{
                y:[0,-8,0]
              }}

              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
              }}

              className="
              relative
              w-72
              md:w-96
              rounded-3xl
              shadow-2xl
              border
              border-white/10
              "
            />


          </div>



        </motion.div>



      </div>


    </section>

  );

}


export default Hero;