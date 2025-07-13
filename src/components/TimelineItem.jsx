import React from "react";

function TimelineItem({ year, title, duration, details, isLeft }) {
  return (
    <div className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center`}>
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 order-1 md:order-none">
        <div className="w-4 h-4 rounded-full bg-accent-light z-10 relative mx-auto">
          <div className="absolute inset-0 rounded-full bg-accent-light animate-pulse opacity-50 blur-sm"></div>
        </div>
      </div>
      
      {/* Content card */}
      <div 
        className={`modern-card p-5 md:w-5/12 w-full ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} mb-4 md:mb-0`}
      >
        <div className="flex flex-wrap items-center mb-2">
          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-accent-light to-accent-dark text-white rounded-full mr-3">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        
        <div className="text-sm font-normal text-accent-light mb-2">
          {duration}
        </div>
        
        <p className="text-sm text-stone-300 leading-relaxed">
          {details}
        </p>
      </div>
    </div>
  );
}

export default TimelineItem;
