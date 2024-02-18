import React from "react";

function Goals() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-5">
      <div className="w-full">
        <span className="text-white text-2xl underline font-bold">
          <i class="fa-solid fa-bullseye fa-xs mr-2" />
          2024 Goals
        </span>
        <div className="mt-2">
          <li className="ml-4 text-white">
            <i class="fa-brands fa-golang mr-2" />
            Mastery Of Golang
            <br />
            <span className="text-xs ml-5 text-stone-300">
              I want to have strong foundations in Golang and be able to build
              scalable and efficient applications and to spread my knowldege to
              others.
            </span>
          </li>
          <li className="ml-4 text-white mt-1">
            <i class="fa-brands fa-python mr-2" />
            Fiddle with machine learning
            <br />
            <span className="text-xs ml-5 text-stone-300">
              I want to have a better understanding of machine learning and how
              to leverage it in my personal & professional applications.
            </span>
          </li>
          <li className="ml-4 text-white mt-1">
            <i class="fa-brands fa-react mr-2" />
            Strong Foundations in React
            <br />
            <span className="text-xs ml-5 text-stone-300">
              I have spend most of my JavaScript time in VueJS and I want to begin learning React
                to have a better understanding of the JavaScript ecosystem and dyversify my skills.
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Goals;
