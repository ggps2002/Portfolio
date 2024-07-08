import React from 'react'
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";
import Techgraph from './Techgraph';
import Skillsgraph from './Skillsgraph';
import { styles } from '../style';
import {motion} from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <>
    <motion.div  variants={textVariant()}>
    <p className={styles.sectionSubText}>Technologies I know</p>
    <h2 className={styles.sectionHeadText}>Tools and Technologies.</h2>
    </motion.div>
    <div className=' mt-20 mb-20'>
      <div><h2  className='font-bold text-[6vh] text-[#7c43f786]'>Programming Languages.</h2></div>
      <div className='flex flex-wrap gap-10 mt-10'>
      {technologies.languages.map((technology, index) => {
      return <Techgraph key={technology.name} index={index} tech={technology}/>
    })}
      </div>
    </div>
    <h2  className='font-bold text-[6vh] text-[#7c43f786]'>Web Tools and Frameworks.</h2>
    <div className='flex flex-wrap gap-10 mt-10'>
      {technologies.tools_frameworks.map((technology, index) => {
      return <Techgraph key={technology.name} index={index} tech={technology}/>
    })}
    </div>
    <h2  className='font-bold text-[6vh] mt-20 text-[#7c43f786]'>Skills.</h2>
    <div className='flex-col gap-10'>
      {technologies.skills.map((skill)=> {
        return <Skillsgraph skill={skill}/>
      })}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech");