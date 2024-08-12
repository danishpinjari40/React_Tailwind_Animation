import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {
	return (
		<div 
		
		data-scroll data-scroll-section data-scroll-speed='-.3'
		className="w-full h-screen bg-zinc-900 pt-1">
			<div className="textstructure mt-52 px-20">
				{['we create', 'eye opening', 'presentations'].map((items, index) => (
					<div className="masker" key={index}>
						<div className="w-fit flex items-end">
							{index === 1 && (
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: '7vw' }}
									transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
									className="mr-[1vw] w-[8vw] rounded-md
							h-[4.4vw] top-[1.2vw] relative
							"
								>
									<img
										src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
										alt=""
										className="w-full h-full rounded"
									/>
								</motion.div>
							)}
							<h1 className="pt-[2vw] -mb-[1vw] uppercase text-[7vw] leading-[.65] font-medium font-['Test_Founders_Grotesk_X-Cond_SmBd']">
								{items}
							</h1>
						</div>
					</div>
				))}
			</div>
			<div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
				{[
					'For public and private companies',
					'From the first pitch to IPO',
				].map((item, index) => (
					<p
						key={index}
						className="text-md font-light tracking-light leading-none"
					>
						{item}
					</p>
				))}
				<div className="start flex  gap-5 justify-center items-center">
					<div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm uppercase">
						start the project
					</div>
					<div className="w-10 h-10 flex rounded-full border-[1px] border-zinc-400 justify-center items-center">
						<span className="rotate-[45deg] ">
							<FaArrowUpLong />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
