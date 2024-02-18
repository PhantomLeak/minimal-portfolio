import React, { useEffect, useState } from 'react'

function Header() {
    // const [theme, setTheme] = useState(null);
	
    // useEffect(() => {
	// 	let localData = JSON.parse(localStorage.getItem('minimalPortfolio'));
	// 	if (localData && localData?.theme) {
	// 		setTheme(localData.theme)
	// 	} else {
	// 		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 			setTheme('dark');
	// 		} else {
	// 			setTheme('light');
	// 		}
	// 	}
	// }, []);

	// useEffect(() => {
	// 	if (theme === 'dark') {
	// 		document.documentElement.classList.add('dark');

	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 	}
	// }, [theme]);

    // const handleThemeSwitch = () => {
    //     setTheme(theme === 'dark' ? 'light' : 'dark');
	// 	updateLocalStorage();
    // };

	// const updateLocalStorage = () => {
	// 	let settings = {'theme': theme === 'dark' ? 'light' : 'dark'}
	// 	localStorage.setItem('minimalPortfolio', JSON.stringify(settings));
	// };


	// return (
	// 	<div className='container max-w-screen-lg mx-auto'>
    //         {/* button to change light / dark mode */}
    //         <button
    //             type="button"
    //             onClick={handleThemeSwitch}
    //             className="fixed p-2 z-10 right-5 top-4 text-lg p-1 rounded-md"
    //         >
    //             {theme === 'dark' ? <i className="fa-solid fa-sun" style={{color: 'orange'}}/> : <i className="fa-solid fa-moon" style={{color: '#BA68C8'}}/>}
    //         </button>
	// 	</div>
	// );
}

export default Header;