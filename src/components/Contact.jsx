import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const contacts = [
  {
    name: "Email",
    icon: <HiOutlineMail className="text-red-600 w-8 h-8" />,
    url: "mailto:muneebs2024@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="text-green-500 w-8 h-8" />,
    url: "https://wa.me/923077206321",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500 w-8 h-8" />,
    url: "https://instagram.com/muneeb_374",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF className="text-blue-600 w-8 h-8" />,
    url: "https://facebook.com/muneeb_374",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="text-blue-700 w-8 h-8" />,
    url: "https://www.linkedin.com/in/muneeb-zafar-4791672a7",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-900 dark:text-white w-8 h-8" />,
    url: "https://github.com/DEV-MK2023",
  },
];

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-transparent"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl w-full p-8 sm:p-10 rounded-3xl shadow-2xl bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-white/10"
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Get In Touch
        </h1>

        {/* Email & Location Section */}
        <div className="mb-10 text-left text-gray-800 dark:text-gray-200 text-sm sm:text-base space-y-3">
          <p className="flex items-center gap-2">
            <HiOutlineMail className="text-red-600 w-5 h-5" />
            <span><strong>Email:</strong> muneebs2024@gmail.com</span>
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500 w-5 h-5" />
            <span><strong>Location:</strong> Gujrat,Pakistan</span>
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-10 text-base sm:text-lg">
          You can also find me on these platforms:
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center flex-wrap gap-8">
          {contacts.map(({ name, icon, url }, i) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${name}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.15, rotate: 3 }}
              className="relative flex flex-col items-center gap-2 cursor-pointer group"
            >
              <motion.div className="drop-shadow-md">{icon}</motion.div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {name}
              </span>

              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    key="tooltip"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="absolute -top-10 px-3 py-1 bg-blue-600 text-white text-xs rounded shadow-lg pointer-events-none select-none z-10"
                  >
                    Visit my {name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
