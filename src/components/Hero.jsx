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
            duration:0.8
          }}

        >


          <p className="
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



          <h2
            className="
            text-2xl
            mt-5
            text-slate-300
            "
          >
            Web Developer
          </h2>



          <p
            className="
            mt-6
            text-slate-400
            max-w-xl
            leading-relaxed
            "
          >
            I build modern and responsive web applications using
            HTML, CSS, JavaScript, React.js and Node.js.
            I enjoy creating clean user interfaces and solving
            real-world development problems.
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


            <a
              href="/Muneeb_Zafar_CV.pdf"
              download
              className="
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              hover:scale-105
              transition
              shadow-lg
              text-center
              "
            >
              Download CV
            </a>


            <a
              href="#projects"
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
            </a>


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
              rounded-full
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
              hover:scale-105
              transition
              duration-500
              "

            />


          </div>


        </motion.div>


      </div>


    </section>

  );
}


export default Hero;