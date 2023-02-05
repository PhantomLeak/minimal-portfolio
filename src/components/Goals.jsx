import React from 'react';
import Title from './Title';

function Goals() {
   return (
      <div className="flex flex-wrap justify-center items-center">
         <div>
            <Title>Goals for {new Date().getFullYear()}</Title>
            <div>
                <li><i class="fa-brands fa-rust"></i> Learn Rust</li>
                <li><i class="fa-brands fa-python"></i> Fiddle with machine learning</li>
                <li><i class="fa fa-book"></i> Get Back Into Reading Daily</li>
            </div>
         </div>
         <div className="mx-6">
            <Title>Current Projects</Title>
            <div>
               <li className='underline hover:text-blue-500'>
                  <a href='https://github.com/PhantomLeak/Alfred' target='_blank'>
                     <i class="fa-brands fa-python mr-1"></i>
                     Alfred (Virtual Assistent)
                  </a>
               </li>
               <li className='underline hover:text-blue-500'>
                  <a href='https://github.com/PhantomLeak/Snake_Game' target='_blank'>
                     <i class="fa-brands fa-rust mr-1"></i>
                     Snake game rewrite
                  </a>
               </li>
               <li className='underline hover:text-blue-500'>
                  <a href='https://github.com/PhantomLeak/minimal-portfolio' target='_blank'>
                     <i class="fa-brands fa-square-js mr-1"></i>
                     Minimal Profolio (This site)
                  </a>
               </li>
            </div>
         </div>
      </div>
   )
}

export default Goals;