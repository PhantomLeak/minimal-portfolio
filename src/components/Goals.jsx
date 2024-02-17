import React from 'react';
import Title from './Title';

function Goals() {
   return (
      <div className="flex flex-col md:flex-row justify-center items-center">
         <div className='max-sm:w-2/3 md:mr-10'>
            <Title className='text-left'>Goals for {new Date().getFullYear()}</Title>
            <div>
                <li className='ml-4'><i class="fa-brands fa-golang"></i> Master Golang</li>
                <li className='ml-4'><i class="fa-brands fa-python"></i> Fiddle with machine learning</li>
                <li className='ml-4'><i class="fa-brands fa-react"></i> Strong Foundations in React</li>
            </div>
         </div>
         <div className='max-sm:w-2/3 max-sm:mt-3'>
            <Title>Current Projects</Title>
            <div>
               <li className='underline hover:text-blue-500 ml-4'>
                  <a href='https://github.com/PhantomLeak/Alfred' target='_blank'>
                     <i className="fa-brands fa-python mr-1"></i>
                     Prettier Prints
                  </a>
               </li>
               <li className='underline hover:text-blue-500 ml-4'>
                  <a href='' target='_blank'>
                     <i className="fa-brands fa-golang mr-1"></i>
                     Secret Project <i class="fa-solid fa-face-smile-wink" />
                  </a>
               </li>
               <li className='underline hover:text-blue-500 ml-4'>
                  <a href='https://github.com/PhantomLeak/minimal-portfolio' target='_blank'>
                     <i className="fa-brands fa-react mr-1"></i>
                     Minimal Profolio (This site)
                  </a>
               </li>
            </div>
         </div>
      </div>
   )
}

export default Goals;