import React from 'react'
import { Tilt } from '@jdion/tilt-react'
import {motion} from 'framer-motion';
import {styles} from '../style';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import ProjectButton from './ProjectButton'

const ProjectCard=({index,name,description,tags,vid,source_code_link})=>{
  return (
    <motion.div variants={fadeIn("up","spring",index * 0.5,0.75)}>
      <Tilt 
        options={{
          max:45,
          scaler:1,
          speed:300
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={vid} alt={name} className='w-full h-full object-contain rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={()=>{
                window.open(
                  source_code_link,"_blank"
                )
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>{
            return (
              <p key={tag.name} className={`taext-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills
          and experience through real-world examples of my work. Each
          project is briefly described with
          links to code repositories and live
          demos in it .It reflects my
          ability to solve complex problems, work
          with different technologies
          and manage projects efficiently. 
        </motion.p>
      </div>
      <div className='mt-10 md:block xxs:hidden'>
        {projects.map((project,index)=>(
          <ProjectButton key={`project-${index}`} project = {project}/>
        ))}
      </div>
      <div className='mt-20 flex flex-wrap gap-7 xxs:block md:hidden'>
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works,"work");