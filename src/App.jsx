// src/App.jsx

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (

    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#020617]
      text-white
      "
    >


      {/* =========================
          GLOBAL BACKGROUND EFFECTS
      ========================== */}


      <div
        className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        "
      >


        {/* Cyan Floating Glow */}

        <motion.div

          animate={{
            x:[0,80,0],
            y:[0,-40,0]
          }}

          transition={{
            duration:12,
            repeat:Infinity,
            ease:"easeInOut"
          }}

          className="
          absolute
          top-20
          left-10
          w-96
          h-96
          rounded-full
          bg-cyan-500/20
          blur-3xl
          "

        />




        {/* Purple Floating Glow */}

        <motion.div

          animate={{
            x:[0,-70,0],
            y:[0,60,0]
          }}

          transition={{
            duration:14,
            repeat:Infinity,
            ease:"easeInOut"
          }}

          className="
          absolute
          right-0
          top-1/3
          w-[450px]
          h-[450px]
          rounded-full
          bg-purple-600/20
          blur-3xl
          "

        />





        {/* Bottom Blue Glow */}

        <motion.div

          animate={{
            scale:[1,1.15,1]
          }}

          transition={{
            duration:10,
            repeat:Infinity,
            ease:"easeInOut"
          }}

          className="
          absolute
          bottom-0
          left-1/3
          w-96
          h-96
          rounded-full
          bg-blue-600/20
          blur-3xl
          "

        />






        {/* Subtle Grid */}

        <div

          className="
          absolute
          inset-0
          opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
          "

        />


      </div>






      {/* =========================
              WEBSITE CONTENT
      ========================== */}


      <Navbar />

      <Hero />

      <About />

      <Projects />

      <WhyHireMe />

      <Contact />

      <Footer />



    </div>

  );

}


export default App;