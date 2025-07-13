import React from "react";

function Footer() {
  const socialLinks = [
    {
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/dylanstocking/",
      label: "LinkedIn"
    },
    {
      icon: "fa-brands fa-github",
      url: "https://github.com/PhantomLeak",
      label: "GitHub"
    }
  ];

  return (
    <footer className="py-10 mt-10 border-t border-surface-light border-opacity-10">
      <div className="container max-w-screen-lg mx-auto">
        {/* Social links */}
        <div className="flex justify-center mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="mx-3 w-10 h-10 rounded-full bg-surface-light bg-opacity-20 flex items-center justify-center transition-all duration-300 hover:bg-opacity-40 hover:shadow-glow hover:scale-110"
            >
              <i className={`${link.icon} text-accent-light`}></i>
            </a>
          ))}
        </div>
        
        {/* Divider with gradient */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-accent-light to-transparent mb-6"></div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} Phantomleak. Made with{" "}
            <i className="fa fa-heart fa-beat-fade" style={{ '--fa-beat-fade-opacity': 0.67, '--fa-beat-fade-scale': 1.075 }}></i> in
            Florida, USA.
          </p>
          
          <p className="text-xs text-stone-500 mt-2">
            Built with React, Tailwind CSS & Mantine UI
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
