import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Featured = () => {
	const cards = [useAnimation(), useAnimation()];
	// * mouse hover
	const handleHover = (index) => {
		cards[index].start({ y: '0' });
	};
	// * mouse out
	const handleHoverEnd = (index) => {
		cards[index].start({ y: '100%' });
	};

	return (
		<div data-scroll data-scroll-section className="w-full py-20">
			<div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
				<h1 className="font-['Neue Montreal'] text-7xl tracking-tight">
					Featured projects
				</h1>
			</div>
			<div className="px-20">
				<div className="cards w-full flex gap-10 mt-10">
					<motion.div
						onHoverStart={() => handleHover(0)}
						onHoverEnd={() => handleHoverEnd(0)}
						className="cardcontainer w-1/2 h-[75vh] relative"
					>
						<div className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight z-[9] text-9xl font-["Test_Founders_Grotesk_X-Cond_SmBd"] text-[#CDEA68]'>
							<h1 className='absolute overflow-hidden flex right-0 translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight z-[9] text-9xl font-["Test_Founders_Grotesk_X-Cond_SmBd"] text-[#CDEA68]'>
								{'FYDE'.split('').map((item, index) => (
									<motion.span
										initial={{ y: '100%' }}
										animate={cards[0]}
										transition={{
											ease: [0.22, 1, 0.36, 1],
											delay: index * 0.05,
										}}
										key={index}
										className="inline-block"
									>
										{item}
									</motion.span>
								))}
							</h1>
						</div>
						<div className="card w-full h-full  rounded-xl overflow-hidden">
							<img
								className="w-full h-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
								alt=""
							/>
						</div>
					</motion.div>
					<motion.div
						onHoverStart={() => handleHover(1)}
						onHoverEnd={() => handleHoverEnd(1)}
						className="cardcontainer w-1/2 h-[80vh]  relative"
					>
						<h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight z-[9] text-9xl font-["Test_Founders_Grotesk_X-Cond_SmBd"] text-[#CDEA68] overflow-hidden flex'>
							{'VISE'.split('').map((item, index) => (
								<motion.span
									initial={{ y: '100%' }}
									animate={cards[1]}
									transition={{
										ease: [0.22, 1, 0.36, 1],
										delay: index * 0.05,
									}}
									key={index}
									className="inline-block"
								>
									{item}
								</motion.span>
							))}
						</h1>
						<div className="card w-full h-full  rounded-xl">
							<img
								className="w-full h-full bg-cover "
								src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
								alt=""
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
