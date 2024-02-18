import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-10">
         <div className="w-full">
            <span className='text-white text-2xl underline font-bold'>
               <i class="fa-solid fa-timeline fa-xs mr-2" />
               Timeline
               </span>
            {timeline.map((item, index) => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
                  key={index + '_item'}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;