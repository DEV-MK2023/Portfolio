// src/components/sections/Footer.jsx

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";


const socials = [

  {
    name: "GitHub",
    url: "https://github.com/DEV-MK2023",
    icon: <FaGithub />,
  },

  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muneeb-zafar-4791672a7",
    icon: <FaLinkedin />,
  },

  {
    name: "Twitter",
    url: "https://twitter.com/dummyprofile",
    icon: <FaTwitter />,
  },

  {
    name: "Instagram",
    url: "https://instagram.com/muneeb_374",
    icon: <FaInstagram />,
  },

  {
    name: "Email",
    url: "mailto:muneebs2024@gmail.com",
    icon: <FaEnvelope />,
  },

];



const Footer = () => {


  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };



  return (


    <motion.footer

      initial={{
        opacity:0,
        y:40
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true
      }}

      transition={{
        duration:0.7
      }}


      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      bg-[#020617]
      px-6
      md:px-12
      lg:px-24
      py-12
      "

    >



      {/* Background Glow */}

      <div
        className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-72
        h-72
        bg-cyan-500/20
        blur-3xl
        rounded-full
        "
      />




      <div
        className="
        relative
        max-w-7xl
        mx-auto
        "
      >




        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
          "
        >




          {/* Branding */}


          <div
            className="
            text-center
            md:text-left
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >

              Muneeb Zafar

            </h2>



            <p
              className="
              text-slate-400
              text-sm
              mt-2
              "
            >

              Frontend Developer building modern web experiences.

            </p>



          </div>







          {/* Social Icons */}


          <div
            className="
            flex
            gap-4
            "
          >


            {
              socials.map((social,index)=>(


                <motion.a

                  key={index}

                  href={social.url}

                  target="_blank"

                  rel="noopener noreferrer"


                  whileHover={{
                    y:-5,
                    scale:1.1
                  }}


                  className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center

                  rounded-xl

                  bg-white/5

                  border
                  border-white/10

                  text-slate-300

                  text-xl

                  hover:text-cyan-400

                  hover:border-cyan-400/50

                  transition

                  "

                >

                  {social.icon}

                </motion.a>


              ))
            }


          </div>







          {/* Back To Top */}


          <motion.button

            onClick={scrollTop}


            whileHover={{
              scale:1.05
            }}


            className="
            flex
            items-center
            gap-2

            px-5
            py-3

            rounded-xl

            bg-gradient-to-r
            from-cyan-500
            to-blue-600

            text-white

            font-medium

            shadow-lg

            "

          >

            Top

            <FaArrowUp />

          </motion.button>



        </div>








        {/* Bottom Line */}


        <div

          className="
          mt-10
          pt-6
          border-t
          border-white/10
          text-center
          text-sm
          text-slate-500
          "

        >

          © {new Date().getFullYear()} Muneeb Zafar. All rights reserved.


        </div>




      </div>



    </motion.footer>


  );

};



export default Footer;