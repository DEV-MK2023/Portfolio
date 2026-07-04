// src/components/sections/WhyHireMe.jsx
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-transparent text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white md:mb-6 mb-2">
          Why Hire Me?
        </h2>
        
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
          I enjoy building responsive and user friendly web applications using modern frontend technologies. I am always willing to learn, adapt to new tools, and improve my development skills through hands on projects and continuous practice.
 
        </p>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          My primary strength lies in building modern, fluid UIs using <span className="text-white font-medium">React, JavaScript, and Tailwind CSS</span>. 
         In addition to frontend development, I have experience working with Git, GitHub, Linux environments, and technical troubleshooting, which helps me adapt to different development workflows and solve technical issues effectively.
        </p>

        <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed italic">
          I am highly adaptable,and looking for an opportunity where I can contribute, learn from experienced developers, and continue growing as a Frontend Developer while delivering reliable and maintainable solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default Testimonials;
