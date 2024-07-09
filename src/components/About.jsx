import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../style';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <div >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
          <div className="h-10 w-full flex gap-6 mt-5">
          <a href="https://www.facebook.com/profile.php?id=100077262802575" target="_blank" rel="noopener noreferrer"><div className="h-fit w-fit"><FacebookRoundedIcon fontSize="large"/></div></a>
          <a href="https://github.com/ggps2002" target="_blank" rel="noopener noreferrer"><div className="h-10 w-10"><GitHubIcon fontSize="large"/></div></a>
          <a href="https://x.com/Pradipto02" target="_blank" rel="noopener noreferrer"><div className="h-10 w-10"><XIcon fontSize="large"/></div></a>
          <a href="https://www.linkedin.com/in/pradipto-shivam-ba19ba243/" target="_blank" rel="noopener noreferrer"><div className="h-fit w-fit "><LinkedInIcon fontSize="large"/></div></a>
          </div> 
      <div className='flex text-[20vh] whitespace-nowrap overflow-hidden'>
      <motion.div
        animate={{ x: ["30%","-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
        className='gap-10 flex '
      >
        <h1>Web Developer</h1>
        <div className='w-10 h-10 self-center rounded-full bg-[#915EFF]' />
        <h1>React Native Developer</h1>
        <div className='w-10 h-10 rounded-full self-center bg-[#915EFF]' />
        <h1>Backend Developer</h1>
      </motion.div>
    </div>
    </div>
  )
}

export default SectionWrapper(About,"about");