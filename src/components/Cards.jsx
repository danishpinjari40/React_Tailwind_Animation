import React from 'react';

const Cards = () => {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed='-.1'
			className="w-full h-screen bg-zinc-100 flex items-center gap-5 px-32"
		>
			<div className="cardcontainer h-[50vh] w-1/2 ">
				<div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
					<img
						src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
						alt=""
						className="w-32"
					/>
					<button className="absolute left-10 bottom-10 px-4 py-1 rounded-full border-2 border-[#CDEA68]  text-[#CDEA68] ">
						&copy;2022-2024
					</button>
				</div>
			</div>
			<div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
				<div className="card relative rounded-xl w-1/2 h-full bg-[#131c1b] flex items-center justify-center">
					<img
						src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
						alt=""
						className="w-32"
					/>
					<button className="absolute left-10 bottom-10 px-4 py-1 rounded-full border-2 border-zinc-100  text-[#f5f5f5] ">
						&copy;2022-2024
					</button>
				</div>
				<div className="card relative rounded-xl w-1/2 h-full bg-[#131c1b] flex items-center justify-center">
					<img
						src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
						alt=""
						className="w-32"
					/>
					<button className="absolute left-10 bottom-10 px-4 py-1 rounded-full border-2 border-zinc-100  text-[#eff0ec] ">
						&copy;2022-2024
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
