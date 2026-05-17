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
          I'm <span className="text-blue-400 font-medium">Muneeb</span>, pursuing an 
          Associate Degree in Web Design & Development at Virtual University. I don't just write frontend code; 
          I have practical experience bridges the gap between clean user interfaces and functioning backend architectures.
        </p>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          My primary strength lies in building modern, fluid UIs using <span className="text-white font-medium">React, JavaScript, and Tailwind CSS</span>. 
          Additionally, having worked on integrating open-source templates with full-stack frameworks like <span className="text-blue-400 font-medium">Laravel & MySQL</span>, 
          I possess a strong understanding of database structures, application routing, and full-stack project synchronization.
        </p>

        <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed italic">
          I am highly adaptable, an efficient troubleshooter in Linux environments, and eager to bring value, fresh logic, and dedication to an internship or junior developer role.
        </p>
      </motion.div>
    </section>
  );
};

export default Testimonials;
