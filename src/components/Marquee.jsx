import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
	return (
		<div 
		data-scroll data-scroll-section data-scroll-speed='.1'
		className="w-full py-20 rounded-3xl bg-[#004D43]">
			<div
				className="text border-t-2 border-b-2 border-zinc-300
flex whitespace-nowrap overflow-hidden
"
			>
				
				<motion.h1
					initial={{ x: '0' }}
					animate={{ x: '-100%' }}
					transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
					className="text-[20vw] leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase pt-0 -mb-[2vw] font-semibold pr-20"
				>
					
					We are ochi
				</motion.h1>
				<motion.h1
					initial={{ x: '0' }}
					animate={{ x: '-100%' }}
					transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
					className="text-[20vw] leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase pt-0 -mb-[1vw] font-semibold pr-20"
				>
					We are ochi
				</motion.h1>
				<motion.h1
					initial={{ x: '0' }}
					animate={{ x: '-100%' }}
					transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
					className="text-[20vw] leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase pt-0 -mb-[1vw] font-semibold pr-20"
				>
					We are ochi
				</motion.h1>
				{/* <motion.h1 initial={{x:0}} animate={{x:'-100%'}} 
    transition={{ease: "linear", repeat: Infinity, duration:5}}
    className="text-[15vw] leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase pt-0 -mb-15 font-semibold">We are ochi</motion.h1> */}
				{/* <h1 className="text-[19vw] leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase pt-0 mb-[1vw] font-semibold">
					We are ochi
				</h1>
				<h1 className="text-[19vw] leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd'] uppercase pt-0 mb-[1vw] font-semibold">
					We are ochi
				</h1> */}
			</div>
		</div>
	);
};

export default Marquee;
