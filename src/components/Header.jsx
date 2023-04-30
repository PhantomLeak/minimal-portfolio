import React, { useEffect, useState } from 'react'

function Header() {
    const [theme, setTheme] = useState(null);
	
    useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

	return (
		<div className='container max-w-screen-lg mx-auto'>
            {/* button to change light / dark mode */}
            <button
                type="button"
                onClick={handleThemeSwitch}
                className="fixed p-2 z-10 right-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
            >
                {theme === 'dark' ? <i className="fa-solid fa-sun"/> : <i className="fa-solid fa-moon"/>}
            </button>
		</div>
	);
}

export default Header;