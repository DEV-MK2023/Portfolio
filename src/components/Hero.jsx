// src/components/sections/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 bg-transparent"
    >
      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            M.Muneeb
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-blue-400 font-medium mb-6">
          FrontEnd Developer
        </h2>

        <p className="text-slate-300 mb-8 max-w-lg mx-auto md:mx-0">
          I specialize in building modern, responsive, and scalable web interfaces. With a focus on performance and usability, I turn ideas into seamless digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="/Muneeb_Zafar_CV.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center"
      >
        <img
          src="/pic.jpg"
          alt="Developer Illustration"
          className="w-full md:w-[45%] max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
