import React from 'react';
import Title from './Title';

function Goals() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-10">
         <div className="w-full md:w-7/12">
            <Title>Goals for {new Date().getFullYear()}</Title>
            <div className='ml-3'>
                <li><i class="fa-brands fa-rust"></i> Learn Rust</li>
                <li><i class="fa-brands fa-python"></i> Fiddle with machine learning</li>
                <li><i class="fa fa-book"></i> Get Back Into Reading Daily</li>
            </div>
         </div>
      </div>
   )
}

export default Goals;