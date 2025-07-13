import React from "react";

function Goals() {
  const goals = [
    {
      title: "Mastery Of Golang",
      description: "I want to have strong foundations in Golang and be able to build scalable and efficient applications and to spread my knowledge to others.",
      icon: "fa-brands fa-golang",
      progress: 65
    },
    {
      title: "Explore Machine Learning",
      description: "I want to have a better understanding of machine learning and how to leverage it in my personal & professional applications.",
      icon: "fa-brands fa-python",
      progress: 40
    },
    {
      title: "Strong Foundations in React",
      description: "I have spent most of my JavaScript time in VueJS and I want to begin learning React to have a better understanding of the JavaScript ecosystem and diversify my skills.",
      icon: "fa-brands fa-react",
      progress: 75
    }
  ];

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
        <i className="fa-solid fa-bullseye fa-xs mr-3 text-accent-light" />
        <span className="accent-underline">2024 Goals</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal, index) => (
          <div 
            key={index}
            className="modern-card p-5 h-full"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-accent-dark flex items-center justify-center mr-3">
                <i className={`${goal.icon} text-white`}></i>
              </div>
              <h3 className="text-lg font-semibold text-white">{goal.title}</h3>
            </div>
            
            <p className="text-sm text-stone-300 mb-4">
              {goal.description}
            </p>
            
            {/* Progress bar */}
            <div className="mt-auto">
              <div className="flex justify-between text-xs text-stone-400 mb-1">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="w-full bg-surface-light bg-opacity-20 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-accent-light to-accent-dark h-2 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
