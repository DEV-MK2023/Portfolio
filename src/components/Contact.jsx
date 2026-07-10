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
      url: "https://www.linkedin.com/in/muneeb-zafar-4791672a7/",
      value: "Connect with me",
    },

    {
      name: "GitHub",
      icon: <FaGithub className="text-slate-300 w-8 h-8" />,
      url: "https://github.com/DEV-MK2023",
      value: "View my projects",
    },

  ];



  return (


    <section

      id="contact"

      className="
      py-24
      px-6
      md:px-12
      lg:px-24
      bg-transparent
      text-white
      min-h-screen
      flex
      items-center
      "

    >



      <motion.div

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
        max-w-5xl
        w-full
        mx-auto
        text-center
        "

      >



        <span
          className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-green-500/10
          border
          border-green-500/20
          text-green-400
          text-sm
          mb-6
          "
        >

          Available for internship & junior developer opportunities

        </span>





        <h2

          className="
          text-3xl
          sm:text-4xl
          font-bold
          mb-5
          "

        >

          Let's Build Something Together

        </h2>




        <p

          className="
          text-slate-400
          max-w-xl
          mx-auto
          leading-relaxed
          mb-10
          "

        >

          I'm always open to discussing web development opportunities,
          collaborations, and interesting projects. Feel free to connect
          with me.

        </p>





        <div

          className="
          flex
          items-center
          justify-center
          gap-2
          text-blue-400
          mb-12
          font-medium
          "

        >

          <FaMapMarkerAlt className="w-5 h-5 animate-pulse"/>

          <span>
            Lahore, Pakistan
          </span>


        </div>





        <div

          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-6
          max-w-3xl
          mx-auto
          "

        >


          {
            contacts.map((contact,index)=>(


              <motion.a


                key={index}


                href={contact.url}


                target="_blank"


                rel="noopener noreferrer"



                initial={{
                  opacity:0,
                  y:25
                }}



                whileInView={{
                  opacity:1,
                  y:0
                }}



                viewport={{
                  once:true
                }}



                transition={{
                  delay:index*0.1
                }}



                whileHover={{
                  y:-5
                }}



                className="

                flex
                items-center
                gap-4
                p-5

                bg-white/5

                border
                border-white/10

                rounded-2xl

                hover:border-cyan-400/50

                transition

                "

              >



                <div

                  className="
                  p-3
                  rounded-xl
                  bg-white/5
                  "

                >

                  {contact.icon}

                </div>





                <div className="text-left">


                  <h3

                    className="
                    text-sm
                    text-slate-400
                    "

                  >

                    {contact.name}

                  </h3>




                  <p

                    className="
                    text-white
                    font-medium
                    group-hover:text-cyan-400
                    break-all
                    "

                  >

                    {contact.value}

                  </p>


                </div>


              </motion.a>


            ))
          }



        </div>



      </motion.div>



    </section>


  );


};



export default Contact;