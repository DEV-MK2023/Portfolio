import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-slate-900/80 backdrop-blur-xl shadow-lg border-b"
          : "bg-transparent"
        }`}
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">


        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Muneeb Zafar
          </span>
        </a>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
              text-slate-300
              hover:text-cyan-400
              transition
              duration-300
              relative
              group
              "
            >

              {link.name}

              <span
                className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                bg-cyan-400
                transition-all
                duration-300
                group-hover:w-full
                "
              />

            </a>
          ))}


          <a
            href="/Muneeb_Zafar_CV.pdf"
            download
            className="
            px-5
            py-2
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            hover:scale-105
            transition
            duration-300
            shadow-lg
            "
          >
            Resume
          </a>

        </div>



        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >

          {isOpen ? <HiX /> : <HiMenuAlt3 />}

        </button>


      </div>



      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div

            initial={{
              opacity: 0,
              height: 0
            }}

            animate={{
              opacity: 1,
              height: "auto"
            }}

            exit={{
              opacity: 0,
              height: 0
            }}

            className="
            md:hidden
            bg-slate-900/95
            backdrop-blur-xl
            px-6
            pb-6
            "
          >

            <div className="flex flex-col gap-5 pt-4">

              {navLinks.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
                  "
                >

                  {link.name}

                </a>

              ))}


              <a
                href="/Muneeb_Zafar_CV.pdf"
                download
                className="
                text-center
                px-5
                py-3
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                "
              >
                Download CV
              </a>


            </div>


          </motion.div>

        )}

      </AnimatePresence>


    </motion.nav>
  );
}


export default Navbar;