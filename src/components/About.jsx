import React from 'react';

const About = () => {
	return (
		<div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
			<h1 className="font-['Neue Montreal'] text-[3.8vw] leading-[4.5vw] tracking-tight">
				Ochi is a strategic presentation agency for forward-thinking businesses
				that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
				hire great peo­ple.
			</h1>
			<div
				className="flex gap-5 w-full border-t-[1px] 
pt-10
border-[#a8bb62] mt-20"
			>
				<div className="w-1/2 ">
					<h1 className="text-6xl">Our approach:</h1>
					<button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10">
						READ MORE
						<div className="w-2 h-2 bg-zinc-100 rounded-full">

						</div>
					</button>
				</div>
				<div className="w-1/2 h-[70vh] ">
				<img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className='rounded-3xl h-full w-full' alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;
