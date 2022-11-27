import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);



  return (
    <div>
      {/* button to change light / dark mode */}
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
      >
        {theme === 'dark' ? <i class="fa-solid fa-sun"/> : <i class="fa-solid fa-moon"/>}
      </button>

      {/* div that holds all components for the site */}
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
