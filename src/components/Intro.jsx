import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20">
         <h1 className="text-3xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">Dylan<span className='text-sm ml-2 font-light'>aka Phantomleak</span></h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Developer & Problem Solver</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I am a full-stack developer and tech enthusiast, building things I find cool and interesting. All coding projects are 
            built from the ground up, from planning and designing to solving real-life problems through code.<br/>
            <a href='https://github.com/PhantomLeak?tab=repositories' target='_blank' className='text-blue-500 underline'>Feel free to view my repos!</a>
         </p>
      </div>
   )
}

export default Intro;