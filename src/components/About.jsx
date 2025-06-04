// src/components/sections/About.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Express", level: 65 },
  { name: "MongoDB", level: 60 },
  { name: "TailwindCSS", level: 85 },
  { name: "Git", level: 70 },
  { name: "Framer Motion", level: 60 },
];


const About = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen px-6 md:px-12 lg:px-24 py-10 flex items-center bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/about.jpeg"
            alt="Profile"
            className="rounded-2xl w-72 h-72 object-cover shadow-lg ring-2 ring-blue-500/30"
          />
        </div>

        {/* Bio and Skills */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            I'm a passionate MERN Stack Developer dedicated to crafting performant and scalable web
            experiences. With an eye for clean UI and a solid backend mindset, I bridge design and
            engineering for seamless digital solutions.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-4">Technologies I Use</h3>
         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full"
    >
      <span className="text-sm font-medium text-blue-200">{skill.name}</span>
      <div className="w-full h-2 mt-1 bg-blue-500/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-blue-500 rounded-full"
        />
      </div>
    </motion.div>
  ))}
</div>


        </div>
      </motion.div>
    </section>
  );
};

export default About;
