import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Dylan</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I am a full-stack developer and tech enthusiast, building things I find cool and interesting. All coding projects are 
            built from the ground up, from planning and designing to solving real-life problems through code.
         </p>
      </div>
   )
}

export default Intro;