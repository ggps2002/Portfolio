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
        I specialize in designing dynamic user interfaces and developing robust web applications. With a strong foundation in AI and machine learning, I bring innovation and intelligence to every project, transforming ideas into seamless digital experiences.
      </motion.p>
          <div className="h-10 w-full flex gap-6 mt-5">
          <a href="https://www.facebook.com/profile.php?id=100077262802575" target="_blank" rel="noopener noreferrer"><div className="h-fit w-fit"><FacebookRoundedIcon fontSize="large"/></div></a>
          <a href="https://github.com/ggps2002" target="_blank" rel="noopener noreferrer"><div className="h-10 w-10"><GitHubIcon fontSize="large"/></div></a>
          <a href="https://x.com/Pradipto02" target="_blank" rel="noopener noreferrer"><div className="h-10 w-10"><XIcon fontSize="large"/></div></a>
          <a href="https://www.linkedin.com/in/pradipto-shivam-ba19ba243/" target="_blank" rel="noopener noreferrer"><div className="h-fit w-fit "><LinkedInIcon fontSize="large"/></div></a>
          </div> 
      <div className='flex text-[10vw] whitespace-nowrap overflow-hidden'>
      <motion.div
  animate={{ x: ["30%", "-100%"] }}
  transition={{
    repeat: Infinity,
    repeatType: "loop",
    duration: 20,
    ease: "linear",
  }}
  className="flex"
>
  <div className="flex items-center">
    <h1>Web Developer</h1>
    <div className="w-10 h-10 self-center rounded-full bg-[#915EFF] mx-[6rem]" />
    <h1>React Developer</h1>
    <div className="w-10 h-10 rounded-full self-center bg-[#915EFF] mx-[6rem]" />
    <h1>Backend Developer</h1>
    <div className="w-10 h-10 self-center rounded-full bg-[#915EFF] mx-[6rem]" />
  </div>
  <div className="flex items-center">
    <h1>Web Developer</h1>
    <div className="w-10 h-10 self-center rounded-full bg-[#915EFF] mx-[6rem]" />
    <h1>React Developer</h1>
    <div className="w-10 h-10 rounded-full self-center bg-[#915EFF] mx-[6rem]" />
    <h1>Backend Developer</h1>
  </div>
</motion.div>

    </div>
    </div>
  )
}

export default SectionWrapper(About,"about");