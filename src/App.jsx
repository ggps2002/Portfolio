import React,{useEffect,useRef} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
        <BrowserRouter>
          <main className="relative z-0 bg-primary">
            <div className=" bg-gradient-to-t from-[#050816] via-[#050816] to-[#915EFF]">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className='relative z-0 mt-[300px]'>
              <Contact />
              {/* <StarsCanvas /> */}
            </div>
          </main>
        </BrowserRouter>
  )
}

export default App
