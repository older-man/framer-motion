// deps
import { createElement, useEffect, useState } from 'react'
import { motion, AnimatePresence, easeInOut } from 'motion/react'
// components
import Navbar from '@/components/Navbar'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
// constant
import { HeadphoneData } from '@/assets/data/mockData'
// utils
import { SliderRight } from '@/utils/animation'
const Hero = () => {
	const [active, setActive] = useState(HeadphoneData[0])

	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((pre) => (pre + 1) % HeadphoneData.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [currentIndex])

	useEffect(() => {
		setActive(HeadphoneData[currentIndex])
	}, [currentIndex])

	const renderIcon = () => {
		return [FaInstagram, FaFacebook, FaTwitter].map((comp, index) => {
			return createElement(comp, {
				key: index,
				className: 'border p-[6px] rounded-full cursor-pointer',
			})
		})
	}

	return (
		<motion.section
			initial={{
				backgroundImage: `radial-gradient(circle,${active.bgColor} 0%, ${active.bgColor} 0%)`,
			}}
			animate={{
				backgroundImage: `radial-gradient(circle,${active.bgColor}aa 0%, ${active.bgColor} 70%)`,
			}}
      transition={{
        duration:0.8
      }}
			className="bg-red-400 text-white"
		>
			<Navbar></Navbar>
			<div className="container grid grid-cols-1 md:grid-cols-2 h-screen relative">
				{/* content info */}
				<div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-500px order-2 md:order-1">
					<div className="space-y-5 md:space-y-7 text-center md:text-left">
						<AnimatePresence mode="wait">
							<motion.h1
								key={active.id}
								variants={SliderRight(0.2)}
								initial="hidden"
								animate="show"
								exit="exit"
								className="text-3xl lg:text-4xl xl:text-5xl font-bold"
							>
								{active.title}
							</motion.h1>
						</AnimatePresence>
						<AnimatePresence mode="wait">
							<motion.p
								key={active.id}
								variants={SliderRight(0.4)}
								initial="hidden"
								animate="show"
								exit="exit"
								className="text-sm leading-loose text-white/80"
							>
								{active.subtitle}
							</motion.p>
						</AnimatePresence>
						<AnimatePresence mode="wait">
							<motion.p
								key={active.id}
								variants={SliderRight(0.6)}
								initial="hidden"
								animate="show"
								exit="exit"
								className="text-3xl lg:text-4xl xl:text-5xl font-bold"
							>
								{active.price}
							</motion.p>
						</AnimatePresence>
						{/* icon */}
						<div className="flex items-center justify-center md:justify-start gap-4 text-3xl">
							{renderIcon()}
						</div>
					</div>
				</div>
				{/* img info */}
				<div className="flex flex-col items-center justify-center order-1 md:order-2 relative">
					<AnimatePresence mode="wait">
						<motion.img
							key={active.id}
							variants={SliderRight(0.4)}
							initial="hidden"
							animate="show"
							exit="exit"
							src={active.image}
							alt=""
							className="w-300px md:w-400px xl:w-500px relative z-10"
						/>
					</AnimatePresence>
					<AnimatePresence mode="wait">
						<motion.div
							key={active.id}
							variants={SliderRight(0.6)}
							initial="hidden"
							animate="show"
							exit="exit"
							className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-poppins font-extrabold text-[300px] z-0"
						>
							{active.modal}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</motion.section>
	)
}

export default Hero
