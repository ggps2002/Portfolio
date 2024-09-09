import React, { useEffect, useState } from 'react';
import { easeInOut, motion } from "framer-motion";
import { styles } from "../style";
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import XIcon from '@mui/icons-material/X';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  return (
    <section className={`relative z-10 w-full h-screen mx-auto overflow-hidden`} >
      <div
        className={`absolute  inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 overflow-hidden`}
      >
        <motion.div className='flex flex-col justify-center items-center mt-5' initial={{ y: -4000, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: easeInOut, duration: 4, delay: 0.5 }}>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <motion.div className='w-1 sm:h-80 h-40 violet-gradient' initial={{ height: 0 }} animate={{ height: 400 }} transition={{ type: easeInOut, delay: 4.5, duration: 1 }} />
        </motion.div>
        <motion.div initial={{ x: -4000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: easeInOut, duration: 4 }} >
          {/* <div className="h-10 w-full flex gap-6">
          <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100077262802575"><div className="h-fit w-fit"><FacebookRoundedIcon fontSize="large"/></div></a>
          <div className="h-10 w-10"><GitHubIcon fontSize="large"/></div>
          <div className="h-10 w-10"><XIcon fontSize="large"/></div>
          <div className="h-fit w-fit "><LinkedInIcon fontSize="large"/></div>
          </div> */}
          <h1 className={`${styles.heroHeadText} text-white leading-none`}>
            Hi, I'm <span className='text-[#915EFF]'>Pradipto</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user <br className='sm:block hidden' />
            interfaces and web applications,<br />
            with a strong foundation in AI and machine learning.
          </p>
        </motion.div>
      </div>
      {/* <ComputersCanvas className="fixed -z-10" /> */}
      <motion.div
          animate={{
            x: [ '60%', '0%','60%' ], // Adjust for percentages
            y: ['-150%', '0%','-150%' ]  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] -z-10 rounded-full bg-[#050816] absolute top-1/2 left-[0%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '60%', '0%','60%' ], // Adjust for percentages
            y: [ '-500%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] absolute top-1/2 -z-10 left-[20%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '80%', '0%', '80%' ], // Adjust for percentages
            y: ['-180%', '0%','-180%' ]  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[40%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '150%', '0%'], // Adjust for percentages
            y: [ '0%', '-500%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[60%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '10%', '0%','10%' ], // Adjust for percentages
            y: ['-110%', '0%','-110%' ]  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 45,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full -z-10 bg-[#050816] absolute top-1/2 left-[80%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '0%'], // Adjust for percentages
            y: ['0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full -z-10 bg-[#050816] absolute top-1/2 left-[5%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '250%', '0%'], // Adjust for percentages
            y: [ '0%', '-500%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[70%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '250%', '0%'], // Adjust for percentages
            y: [ '0%', '-500%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[10%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[45%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[15%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-90%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[75%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-90%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[65%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[25%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[85%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[95%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[55%] blur-lg`}
        />
        <motion.div
          animate={{
            x: [ '0%', '70%', '50%', '0%' ], // Adjust for percentages
            y: [ '0%', '-80%', '0%']  // Adjust for percentages
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "easeInOut"
          }}
          className={`h-[7rem] w-[7rem] rounded-full bg-[#050816] -z-10 absolute top-1/2 left-[35%] blur-lg`}
        />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;


//#050816