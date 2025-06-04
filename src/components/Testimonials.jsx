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
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          I'm <span className="text-blue-400 font-medium">Muneeb</span>, currently studying an
          Associate Degree in Web Design & Development at Virtual University
          (started in 2024). While I haven’t built real-time projects yet, I’m
          passionate about learning and growing as a developer.
        </p>

        <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed">
          I’ve been focusing on technologies like{" "}
          <span className="text-white font-medium">HTML, CSS, JavaScript, and React</span>. I'm
          committed to building clean, responsive UIs and eager to contribute to
          real-world projects where I can improve through collaboration and experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto text-center mt-16"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6">
          My Learning Journey
        </h3>
        <ul className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-4 text-left list-disc list-inside mx-auto px-4 sm:px-0">
          <li>🧠 Learned HTML, CSS, and JavaScript fundamentals</li>
          <li>⚛️ Exploring React for building interactive user interfaces</li>
          <li>🛠️ Creating practice projects to strengthen my frontend development</li>
          <li>🚀 Preparing to contribute to real-world projects with enthusiasm</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Testimonials;
