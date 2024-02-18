
import React from 'react';

function Footer() {
	return (
		<div className="py-5 text-center">
			<div className="container max-w-screen-lg mx-auto">
				<div>
					<div className="flex flex-wrap justify-center gap-2">
						{/* LinkedIn */}
						<i className="fa-brands fa-linkedin fa-xl hover:cursor-pointer text-white" 
						onClick={()=>{window.open( `https://www.linkedin.com/in/dylanstocking/`, '_blank')}} />

						{/* GitHub */}
						<i className="fa-brands fa-github fa-xl hover:cursor-pointer text-white" 
						onClick={()=>{window.open( `https://github.com/PhantomLeak`, '_blank')}} />
					</div>
				</div>
			</div>
			<div className='mt-5'>
				<p className="text-sm mt-2  opacity-50 text-white">
					&copy; {new Date().getFullYear()} Phantomleak. Made with <i className="fa fa-heart heart" style={{'color': '#537895'}}></i> in Florida, USA.
				</p>
			</div>
		</div>
	);
}

export default Footer;