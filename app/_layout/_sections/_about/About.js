import Image from "next/image";
import gif from '../../../../public/astronaut.svg'

export default function About() {
	return (
		<>
			<div className="about-me d-flex flex-lg-row flex-column-reverse justify-content-lg-between align-items-center">
				<div className="col-lg-6 col-10">
				<h1 className="">
					Hi there! My name is Ruslan.
				</h1>

					<h2 className="intro">
						I’m a software developer passionate about learning new skills, 
						programming languages, economics & investing.
					</h2>
				</div>
				<div className="col-lg-3 col-5">
					<Image
						src={gif}
						sizes="100vw"
						className="gif"
						alt="Animated SVG from getloaf.io"
					/>
				</div>

			</div>
		</>
	)
}