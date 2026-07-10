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
      value: "muneebs2024@gmail.com",
      icon: <HiOutlineMail />,
      url: "mailto:muneebs2024@gmail.com",
    },

    {
      name: "WhatsApp",
      value: "+92 307 7206321",
      icon: <FaWhatsapp />,
      url: "https://wa.me/923077206321",
    },

    {
      name: "LinkedIn",
      value: "Connect with me",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/muneeb-zafar-4791672a7/",
    },

    {
      name: "GitHub",
      value: "View my projects",
      icon: <FaGithub />,
      url: "https://github.com/DEV-MK2023",
    },

  ];



  return (

    <section
      id="contact"
      className="
      min-h-screen
      px-6
      md:px-12
      lg:px-24
      py-24
      flex
      items-center
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        w-full
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >



        {/* LEFT CONTENT */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.7
          }}

        >


          <span
            className="
            inline-flex
            px-4
            py-2
            rounded-full
            text-sm
            text-cyan-400
            bg-cyan-400/10
            border
            border-cyan-400/20
            mb-6
            "
          >
            Available for opportunities
          </span>



          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            text-white
            leading-tight
            mb-6
            "
          >

            Let's create something
            <span
              className="
              block
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              amazing together
            </span>

          </h2>



          <p
            className="
            text-slate-300
            leading-relaxed
            max-w-lg
            mb-8
            "
          >

            I'm currently looking for internship and junior developer
            opportunities where I can contribute, learn from experienced
            developers, and build real-world applications.

          </p>




          <div
            className="
            flex
            items-center
            gap-3
            text-blue-400
            "
          >

            <FaMapMarkerAlt className="animate-pulse"/>

            <span>
              Lahore, Pakistan
            </span>

          </div>



        </motion.div>





        {/* RIGHT CONTACT CARDS */}


        <motion.div

          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.7
          }}

          className="
          grid
          sm:grid-cols-2
          gap-5
          "

        >


          {
            contacts.map((contact,index)=>(


              <motion.a

                key={index}

                href={contact.url}

                target="_blank"

                rel="noopener noreferrer"


                whileHover={{
                  y:-8,
                  scale:1.02
                }}


                transition={{
                  duration:0.3
                }}


                className="
                group
                p-6
                rounded-2xl

                bg-white/5

                backdrop-blur-md

                border
                border-white/10

                hover:border-cyan-400/50

                shadow-lg

                "

              >



                <div
                  className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center

                  rounded-xl

                  text-2xl

                  text-cyan-400

                  bg-cyan-400/10

                  mb-5

                  group-hover:scale-110

                  transition
                  "
                >

                  {contact.icon}

                </div>




                <h3
                  className="
                  text-sm
                  text-slate-400
                  mb-2
                  "
                >

                  {contact.name}

                </h3>



                <p
                  className="
                  text-white
                  font-medium
                  break-all
                  group-hover:text-cyan-400
                  transition
                  "
                >

                  {contact.value}

                </p>



              </motion.a>


            ))
          }



        </motion.div>


      </div>



    </section>


  );

};


export default Contact;