import React from 'react';

function Goals() {
   return (
      <div className="flex flex-col md:flex-row justify-center items-center mt-5">
         {/* <div className='max-sm:w-2/3 md:mr-10'>
            <Title className='text-left'>Goals for {new Date().getFullYear()}</Title>
            <div>
                <li className='ml-4'><i class="fa-brands fa-golang"></i> Master Golang</li>
                <li className='ml-4'><i class="fa-brands fa-python"></i> Fiddle with machine learning</li>
                <li className='ml-4'><i class="fa-brands fa-react"></i> Strong Foundations in React</li>
            </div>
         </div> */}
         <div className='w-full'>
            <span className='text-white text-2xl underline'>
               <i class="fa-solid fa-bullseye fa-xs mr-2" />
               2024 Goals
            </span>
            <div className='mt-2'>
               <li className='ml-4 text-white'>
                  <a href='https://github.com/PhantomLeak/Alfred' target='_blank' className='text-white hover:underline'>
                     <i className="fa-brands fa-python mr-1"></i>
                     Prettier Prints
                  </a>
                  <br />
                  <span className='text-xs ml-5 text-stone-300'>
                  Python output styling library for cleaner & more readabel outputs for terminal based programs and debugging. 
                  <a href='https://pypi.org/project/prettier-prints/' target='_blank' className='hover:underline'> [PyPi]</a>
                  </span>
               </li>
               <li className='ml-4 text-white mt-1'>
                  <span className=''>
                     <i className="fa-brands fa-golang mr-1"></i>
                     Secret Project <i class="fa-solid fa-face-smile-wink fa-xs" />
                  </span>
                  <br />
                  <span className='text-xs ml-5 text-stone-300'>
                     A secret project I'm working on. It's a surprise!
                  </span>
               </li>
               <li className='ml-4 text-white mt-1'>
                  <a href='https://github.com/PhantomLeak/minimal-portfolio' target='_blank' className='text-white hover:underline'>
                     <i className="fa-brands fa-react mr-1"></i>
                     Minimal Profolio
                  </a>
                  <br />
                  <span className='text-xs ml-5 text-stone-300'>
                     This Site! A minimal portfolio site built with React and TailwindCSS.
                  </span>
               </li>
            </div>
         </div>
      </div>
   )
}

export default Goals;