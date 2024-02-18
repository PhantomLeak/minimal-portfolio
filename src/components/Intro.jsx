import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M246.53 21.03c-62.334.34-123.514 15.678-165 39.44l-6.155 2.06c19.528 58.267 48.163 98.687 80.938 132.376l-1.72 67.47 64.5 30.437c-19 58.985-34.515 128.892-50.405 197.656h191.125c-10.308-47.13-20.516-94.494-32.157-138.72 23.774 28.113 46.51 61.63 67.063 104.313l16.842-8.094c-22.568-46.87-47.938-83.34-74.312-113.626l31.125-24.28-47.47-104.377 48.22-33.75c-18.963-35.457-37.446-71.306-72.28-92.656-32.51 19.993-52 56.712-72.22 92.5l-29.22 34.69c-28.89-25.67-54.975-53.34-76.093-90.532C192.195 60.42 315.858 47.172 419.656 72.56 373.43 35.602 309.392 20.69 246.53 21.032z"
        />
      </svg>
      <h1 className="text-3xl md:text-5xl text-white mb-1 md:mb-3 font-bold">
        Dylan
        <span className="text-sm ml-2 font-light">
          aka Phantomleak
          <i
            className="fa-brands fa-github ml-1 hover:cursor-pointer"
            onClick={() => {
              window.open(`https://github.com/PhantomLeak`, "_blank");
            }}
          />
        </span>
      </h1>
      <p className="text-base md:text-xl text-stone-300 mb-3 font-medium">
        Software Developer & Problem Solver
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold text-white">
        I am a full-stack developer and lifetime student, building things I find
        cool and interesting. All coding projects are built from the ground up,
        from planning and designing to solving real-life problems through code.
        <br />
      </p>
    </div>
  );
}

export default Intro;
