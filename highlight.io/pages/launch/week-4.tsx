import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { HiPlay } from 'react-icons/hi'
import Footer from '../../components/common/Footer/Footer'
import { Meta } from '../../components/common/Head/Meta'
import Navbar from '../../components/common/Navbar/Navbar'
import { Typography } from '../../components/common/Typography/Typography'
import DayOne from '../../components/Launch/Week4/DayOne'
import HiddenDay from '../../components/Launch/Week4/HiddenDay'
import preview from '../../public/images/launch/week-4/meta.png'

const LaunchPage = () => {
	const day = 1

	function scrollToDay(day: number) {
		if (document && document.getElementById('day-' + day.toString())) {
			document
				.getElementById('day-' + day.toString())!
				.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div>
			<style jsx global>
				{`
					body {
						background: #f9f9f9;
					}
				`}
			</style>
			{/* TODO: Add new meta image */}
			<Meta
				title="Highlight.io Launch Week 4"
				description="Discover error monitoring, logging, and session replay with highlight.io. Join us for Launch Week 4 and elevate your tech stack."
				absoluteImageUrl={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}${preview.src}`}
				canonical="/launch/week-4"
			/>
			<Navbar hideBanner hideGitHubPopup bg="white" light />
			<main className="scroll-smooth bg-[#F9F9F9] mb-32">
				<div className="relative flex flex-col pt-20 text-center px-8 z-50 pb-20">
					<div className="w-full flex justify-center text-[#6F6E77] text-opacity-80 z-50">
						<Typography
							type="copy3"
							emphasis
							className="px-2 pt-1 rounded-t-lg border-x-[1px] border-t-[1px] border-[#C8C7CB]"
						>
							January 28th - February 2rd 2024
						</Typography>
					</div>
					<h2 className="text-[#1A1523] z-50 leading-none">
						Launch Week 4
					</h2>
					<div className="flex justify-center">
						<Image
							src="/images/launch/week-4/launch-bg.webp"
							alt=""
							width={1198}
							height={384}
							className="absolute bottom-0 -z-50 mx-auto"
						/>
					</div>

					<div className="flex justify-center mt-8 z-50">
						<a
							className="flex flex-shrink-0 items-center gap-1 bg-[#1A1523] text-white px-4 py-2 rounded-xl shadow-sm hover:shadow-none cursor-pointer"
							href="https://www.youtube.com/watch?v=gnerXJPUb8Y&list=PLtIz-bpzHkhg90SVmzlm2Yp0BJLs2L1Ol&index=6"
							target="_blank"
							rel="noopener noreferrer"
						>
							<HiPlay />

							<Typography type="copy4" emphasis>
								Watch Launch Videos
							</Typography>
						</a>
					</div>
					<div className="absolute bottom-0 w-full flex justify-center max-w-[550px] md:max-w-[1200px] mx-auto pt-20">
						<div className="w-full h-6 border-x-[1px] text-black mx-8" />
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 max-w-[550px] md:max-w-[1200px] mx-auto px-8">
					<Link
						onClick={(e) => {
							e.preventDefault()
							scrollToDay(day)
						}}
						href={'/launch-week-2#day-' + day.toString()}
						className="z-50 flex justify-between items-center text-[#1A1523] text-opacity-70 p-4 w-full border-[1px] border-[#EEEDEF] flex-shrink-0 hover:text-opacity-100 transition-all"
					>
						<Typography type="copy4" emphasis>
							Go to Day {day}
						</Typography>
						<BiChevronRight className="h-7 w-7 bg-white bg-opacity-10 p-1 rounded-full" />
					</Link>

					<Link
						href="https://twitter.com/highlightio?lang=en"
						className="z-50 flex justify-between items-center text-[#1A1523] text-opacity-70 p-4 w-full border-x-[1px] md:border-l-transparent border-y-[1px] border-[#EEEDEF] flex-shrink-0 hover:text-opacity-100 transition-all"
					>
						<div className="flex gap-3 items-center">
							<BsTwitter className="w-6 h-6" />
							<Typography type="copy4" emphasis>
								Keep in touch on Twitter
							</Typography>
						</div>
						<BiChevronRight className="h-7 w-7 bg-white bg-opacity-10 p-1 rounded-full" />
					</Link>

					{/* <Link */}
					{/* 	href="https://news.ycombinator.com/item?id=37675894" */}
					{/* 	className="z-50 flex justify-between items-center text-[#1A1523] text-opacity-70 p-4 w-full border-[1px] border-[#EEEDEF] flex-shrink-0 hover:text-opacity-100 transition-all" */}
					{/* > */}
					{/* 	<div className="flex gap-3 items-center"> */}
					{/* 		<Image */}
					{/* 			src="/images/companies/icons/hackernews.svg" */}
					{/* 			alt="" */}
					{/* 			width={24} */}
					{/* 			height={24} */}
					{/* 		/> */}
					{/* 		<Typography type="copy4" emphasis> */}
					{/* 			Check in on Hacker News */}
					{/* 		</Typography> */}
					{/* 	</div> */}
					{/* 	<BiChevronRight className="h-7 w-7 bg-white bg-opacity-10 p-1 rounded-full" /> */}
					{/* </Link> */}
				</div>
				<div className="flex flex-col items-center w-full max-w-[550px] md:max-w-[1200px] mx-auto px-8">
					<DayOne />
					<HiddenDay title="Day 2: January 30" />
					<HiddenDay title="Day 3: January 31" />
					<HiddenDay title="Day 4: February 1" />
					<HiddenDay title="Day 5: February 2" />
				</div>
			</main>
			{/* <FooterCallToAction /> */}
			<Footer light />
		</div>
	)
}

export default LaunchPage
