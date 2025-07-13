import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
        <i className="fa-solid fa-clock-rotate-left fa-xs mr-3 text-accent-light" />
        <span className="accent-underline">Timeline</span>
      </h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-px bg-gradient-to-b from-accent-light to-transparent"></div>
        
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
              key={index + "_item"}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
