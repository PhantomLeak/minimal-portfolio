import React from 'react';
import Title from './Title';

function Goals() {
   return (
      <div className="flex flex-wrap justify-center items-center">
         <div className='mx-6'>
            <Title>Goals for {new Date().getFullYear()}</Title>
            <div>
                <li className='ml-4'><i class="fa-brands fa-rust"></i> Master Rust</li>
                <li className='ml-4'><i class="fa-brands fa-python"></i> Fiddle with machine learning</li>
                <li className='ml-4'><i class="fa-brands fa-aws"></i> Get AWS Developer Certification</li>
            </div>
         </div>
         <div className="mx-6">
            <Title>Current Projects</Title>
            <div>
               <li className='underline hover:text-blue-500 ml-4'>
                  <a href='https://github.com/PhantomLeak/Alfred' target='_blank'>
                     <i className="fa-brands fa-python mr-1"></i>
                     Prettier Prints
                  </a>
               </li>
               <li className='underline hover:text-blue-500 ml-4'>
                  <a href='https://github.com/PhantomLeak/Rusty_chat' target='_blank'>
                     <i className="fa-brands fa-rust mr-1"></i>
                     Rusty Ducky
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