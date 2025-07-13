import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-10">
      {/* Logo with subtle animation */}
      <div className="relative mb-6 transition-all duration-500 hover:scale-110">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-light to-accent-dark opacity-20 blur-xl"></div>
        <svg
          width="60px"
          height="60px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path
            fill="white"
            d="M246.53 21.03c-62.334.34-123.514 15.678-165 39.44l-6.155 2.06c19.528 58.267 48.163 98.687 80.938 132.376l-1.72 67.47 64.5 30.437c-19 58.985-34.515 128.892-50.405 197.656h191.125c-10.308-47.13-20.516-94.494-32.157-138.72 23.774 28.113 46.51 61.63 67.063 104.313l16.842-8.094c-22.568-46.87-47.938-83.34-74.312-113.626l31.125-24.28-47.47-104.377 48.22-33.75c-18.963-35.457-37.446-71.306-72.28-92.656-32.51 19.993-52 56.712-72.22 92.5l-29.22 34.69c-28.89-25.67-54.975-53.34-76.093-90.532C192.195 60.42 315.858 47.172 419.656 72.56 373.43 35.602 309.392 20.69 246.53 21.032z"
          />
        </svg>
      </div>
      
      {/* Name with modern typography */}
      <h1 className="text-4xl md:text-6xl text-white mb-2 md:mb-4 font-bold tracking-tight">
        Dylan
        <span className="text-sm ml-3 font-light opacity-80 tracking-normal">
          aka Phantomleak
          <i
            className="fa-brands fa-github ml-2 hover:cursor-pointer transition-colors duration-300 hover:text-accent-light"
            onClick={() => {
              window.open(`https://github.com/PhantomLeak`, "_blank");
            }}
          />
        </span>
      </h1>
      
      {/* Title with gradient underline */}
      <div className="relative inline-block mb-4">
        <p className="text-base md:text-xl text-white font-medium tracking-wide">
          Software Developer & Problem Solver
        </p>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light to-transparent"></div>
      </div>
      
      {/* Bio with improved typography */}
      <p className="text-sm md:text-base max-w-xl mb-8 text-stone-300 leading-relaxed">
        I am a full-stack developer and lifetime student, building things I find
        cool and interesting. All coding projects are built from the ground up,
        from planning and designing to solving real-life problems through code.
      </p>
      
      {/* Modern button */}
      <a 
        href="#contact" 
        className="modern-button group flex items-center"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('section:nth-child(6)').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Get in touch
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}

export default Intro;
