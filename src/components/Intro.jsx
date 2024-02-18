import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20">
         <h1 className="text-3xl md:text-5xl text-white mb-1 md:mb-3 font-bold">
            Dylan
            <span className='text-sm ml-2 font-light'>
               aka Phantomleak
               <i class="fa-brands fa-github ml-1 hover:cursor-pointer" onClick={()=>{window.open( `https://github.com/PhantomLeak`, '_blank')}}/>
               </span>
         </h1>
         <p className="text-base md:text-xl text-white mb-3 font-medium">Software Developer & Problem Solver</p>
         <p className="text-sm max-w-xl mb-6 font-bold text-white">
            I am a full-stack developer and lifetime student, building things I find cool and interesting. All coding projects are 
            built from the ground up, from planning and designing to solving real-life problems through code.<br/>
         </p>
      </div>
   )
}

export default Intro;