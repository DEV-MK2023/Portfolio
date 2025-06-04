import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/DEV-MK2023",
    icon: <FaGithub size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muneeb-zafar-4791672a7",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/dummyprofile",
    icon: <FaTwitter size={24} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/muneeb_374",
    icon: <FaInstagram size={24} />,
  },
  {
    name: "Email",
    url: "mailto:muneebs2024@gmail.com",
    icon: <FaEnvelope size={24} />,
  },
];

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-gray-300 py-6 px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} M.Muneeb. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 relative">
          {socials.map(({ name, url, icon }, i) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative text-gray-400 hover:text-white transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.2, color: "#fff" }}
                className="cursor-pointer"
              >
                {icon}
              </motion.div>

              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none z-10"
                  >
                    {name}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="ml-auto mt-4 md:mt-0 bg-gray-700 hover:bg-gray-600 transition-colors text-gray-200 rounded px-4 py-2 text-sm"
          aria-label="Back to top"
        >
          Back to Top
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
