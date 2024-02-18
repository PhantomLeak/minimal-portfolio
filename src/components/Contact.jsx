import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto mt-3">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/50e4ec41-f71d-4c0a-9fdb-f13e0e85a0e8"
               method="POST"
               className="flex flex-col w-full"
            >
               <span className='text-white text-2xl mb-2 underline font-bold'>
                  <i class="fa-solid fa-envelope fa-xs mr-2"/>
                  Contact Me 
                  </span>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-md hover:stroke-white"
               >
                  Contact Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;