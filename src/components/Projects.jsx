import React from "react";

function Projects() {
  const projects = [
    {
      title: "Prettier Prints",
      description: "Python output styling library for cleaner & more readable outputs for terminal based programs and debugging.",
      icon: "fa-brands fa-python",
      link: "https://github.com/PhantomLeak/prettier_prints",
      extraLink: {
        url: "https://pypi.org/project/prettier-prints/",
        text: "PyPi"
      },
      tags: ["Python", "Library", "Terminal"]
    },
    {
      title: "Poseidon's Daily",
      description: "Marine Health App for simple and accurate water data at your fingertips.",
      icon: "fa-brands fa-golang",
      link: "https://poseidonsdaily.com/",
      tags: ["Go", "Web App", "Marine"]
    },
    {
      title: "Minimal Portfolio",
      description: "This Site! A minimal portfolio site built with React, Mantine (JSX component library) and TailwindCSS for styling.",
      icon: "fa-brands fa-react",
      link: "https://github.com/PhantomLeak/minimal-portfolio",
      tags: ["React", "TailwindCSS", "Portfolio"]
    }
  ];

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
        <i className="fa-solid fa-terminal fa-xs mr-3 text-accent-light" />
        <span className="accent-underline">Current Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="modern-card p-5 h-full flex flex-col"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-accent-dark flex items-center justify-center mr-3">
                <i className={`${project.icon} text-white`}></i>
              </div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
            
            <p className="text-sm text-stone-300 mb-4 flex-grow">
              {project.description}
              {project.extraLink && (
                <a
                  href={project.extraLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-accent-light hover:underline"
                >
                  [{project.extraLink.text}]
                </a>
              )}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 text-xs rounded-full bg-surface-light bg-opacity-20 text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent text-sm font-medium flex items-center transition-colors duration-300"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
