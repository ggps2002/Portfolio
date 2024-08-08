import React, {useState} from 'react'
import {github} from '../assets';
import { all } from 'three/examples/jsm/nodes/Nodes.js';
import { easeInOut } from 'framer-motion';

const ProjectButton = (props) => {
    const [divTop, setTopDiv] = useState(false)
    const [showVid, setShowVid] = useState(false)
    const handleMouseEnter = () => {
        setTopDiv(true)
    }
    const handleMouseLeave = () => {
        setTopDiv(false)
    }
    const handleVidDivMouseEnter = () => {
        setShowVid(true)
    }
    const handleVidDivMouseLeave = () => {
        setShowVid(false)
    }
  return (
    <>
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={`fixed bottom-[10vh] z-[100] right-[10vw] h-[60vh] w-[30vw] bg-tertiary ${!divTop && "hidden"} rounded-lg `}>
        <a href={props.project.liveURL} target="_blank" rel="noopener noreferrer"><div onMouseEnter={handleVidDivMouseEnter} onMouseLeave={handleVidDivMouseLeave}  className=' h-1/2 w-full'>
            {!showVid ? <img className=' max-h-full w-full object-cover' src={props.project.image} alt="" />:<img className=' max-h-full w-full object-cover'  src={props.project.vid} alt="" />}
        </div></a>
        <div className='mt-[3vh] px-2 text-secondary text-[14px]'>
            <p>{props.project.description}</p>
        </div>
        <div onClick={()=>{
                window.open(
                  props.project.source_code_link,"_blank"
                )
              }} className='my-4 px-4 inline-block'>
            <img src={github} alt="github" className='w-8 h-8 object-contain'/>
        </div>
        <div className='flex w-full gap-3 mt-[2vh] px-2 justify-center'>
            {props.project.tags.map((tag)=>(
                <p key={tag.name} className={`taext-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
        </div>
    </div>
    <div className='relative w-full h-[20vh] overflow-hidden cursor-pointer'>
        <div className={`absolute z-10 w-full h-[20vh] bg-[#915EFF] ${divTop ? "translate-y-0": "translate-y-[-21vh] "} transition-transform ease-[cubic-bezier(0.22, 1, 0.36, 1)] duration-300`}>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='absolute z-20 w-full h-[20vh] border-y-[0.3px] border-[#915eff5f]'>
            <div className='flex items-center w-full h-full text-[10vh] ml-4'>
                <h2>{props.project.name}</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectButton