import { easeInOut, motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import XIcon from '@mui/icons-material/X';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} data-scroll>
      <div
        className={`absolute  inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 overflow-hidden`}
      >
        <motion.div className='flex flex-col justify-center items-center mt-5'initial={{y:-4000,opacity:0}} animate={{y:0, opacity:1}} transition={{type:easeInOut,duration:4,delay:0.5}}>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <motion.div className='w-1 sm:h-80 h-40 violet-gradient' initial={{height:0}} animate={{height: 400}} transition={{type:easeInOut,delay:4.5,duration:1}}/>
        </motion.div>
        <motion.div initial={{x:-4000,opacity:0}} animate={{x:0, opacity:1}} transition={{type:easeInOut,duration:4}} >
        {/* <div className="h-10 w-full flex gap-6">
          <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100077262802575"><div className="h-fit w-fit"><FacebookRoundedIcon fontSize="large"/></div></a>
          <div className="h-10 w-10"><GitHubIcon fontSize="large"/></div>
          <div className="h-10 w-10"><XIcon fontSize="large"/></div>
          <div className="h-fit w-fit "><LinkedInIcon fontSize="large"/></div>
          </div> */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Pradipto</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </motion.div>
      </div>
      <div className="h-[10vh] w-full bg-white pointer-events-none">
      </div>
      <ComputersCanvas className="fixed -z-10" />

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