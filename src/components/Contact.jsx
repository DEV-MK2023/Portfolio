// src/components/sections/Contact.jsx
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      icon: <HiOutlineMail className="text-red-500 w-8 h-8" />,
      url: "mailto:muneebs2024@gmail.com",
      value: "muneebs2024@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500 w-8 h-8" />,
      url: "https://wa.me/923077206321",
      value: "+92 307 7206321",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-blue-500 w-8 h-8" />,
      url: "https://linkedin.com/in/muneeb-zafar", // Update this with your actual linkedin slug if different
      value: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-slate-300 w-8 h-8" />,
      url: "https://github.com/nostal911", // Your GitHub link based on your terminal username
      value: "View My Code",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-transparent text-white min-h-screen flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-12">
          Let's connect! Feel free to reach out for internship opportunities, collaborations, or just a tech chat.
        </p>

        {/* Location Tag */}
        <div className="flex items-center justify-center gap-2 text-blue-400 mb-10 font-medium">
          <FaMapMarkerAlt className="w-5 h-5 animate-pulse" />
          <span>Lahore, Pakistan</span>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: "rgba(59, 130, 246, 0.5)" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-xl hover:bg-slate-900/60 transition-colors duration-300 group"
            >
              <div className="p-2 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-slate-400">
                  {contact.name}
                </h3>
                <p className="text-base font-medium text-white group-hover:text-blue-400 transition-colors duration-300 break-all">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
