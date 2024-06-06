import React from "react";

function Projects() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="w-full">
        <span className="text-white text-2xl underline font-bold">
          <i className="fa-solid fa-terminal fa-xs mr-2" />
          Current Projects
        </span>
        <div className="mt-2">
          <li className="ml-4 text-white">
            <a
              href="https://github.com/PhantomLeak/prettier_prints"
              target="_blank"
              className="text-white hover:underline"
            >
              <i className="fa-brands fa-python mr-1"></i>
              Prettier Prints
            </a>
            <br />
            <span className="text-xs ml-5 text-stone-300">
              Python output styling library for cleaner & more readabel outputs
              for terminal based programs and debugging.
              <a
                href="https://pypi.org/project/prettier-prints/"
                target="_blank"
                className="hover:underline"
              >
                {" "}
                [PyPi]
              </a>
            </span>
          </li>
          <li className="ml-4 text-white mt-1">
            <a
                href="https://poseidonsdaily.com/"
                target="_blank"
                className="text-white hover:underline"
              >
                <i className="fa-brands fa-golang mr-1"></i>
                Poseidon's Daily
              </a>
              <br />
              <span className="text-xs ml-5 text-stone-300">
                Marine Health App for simple and accurate water data at your fingertips.
              </span>
          </li>
          <li className="ml-4 text-white mt-1">
            <a
              href="https://github.com/PhantomLeak/minimal-portfolio"
              target="_blank"
              className="text-white hover:underline"
            >
              <i className="fa-brands fa-react mr-1"></i>
              Minimal Profolio
            </a>
            <br />
            <span className="text-xs ml-5 text-stone-300">
              This Site! A minimal portfolio site built with React, Maintine(JSX component library) and
              TailwindCSS for styling.
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Projects;
