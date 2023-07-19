import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleTerminal, faArrowUpRightFromSquare } from '@fortawesome/pro-thin-svg-icons'

import czechstatsImage from '../../../../public/images/projects/czechstats.png'
import workmarketImage from '../../../../public/images/projects/workmarket.png'
import ewijobsImage from '../../../../public/images/projects/ewijobs.png'
import { Carousel } from './carousel'
import Link from 'next/link'

export default function Projects() {

	const projects = [
		{
			title: 'CzechStats',
			// description: 'Czech Republic economic indicators in one place. \
			// Our website provides a comprehensive overview of the Czech Republic economy, \
			// including key economic indicators, financial data, \
			// monetary and fiscal policy, and government statistics.',
			description: 'This side project offered a comprehensive overview of the Czech Republic economy, showcasing key indicators, financial data, and government stats, providing valuable insights into the economic landscape.',
			image: czechstatsImage,
			stacks: 'React, NodeJS, Context API',
			link: 'https://czechstats.eu/'
		},
		{
			title: 'Workmarket.eu',
			description: 'A job portal connecting non-European residents with employment opportunities in EU countries, helping companies fill open positions with international talent, fostering cross-border collaboration and diverse workforce.',
			image: workmarketImage,
			stacks: 'PHP, Symfony, PostgreSQL',
			link: 'https://workmarket.eu/'
		},
		{
			title: 'Ewijobs.cz',
			description: ' My latest project, Ewijobs, is a simplified job portal featuring job ads and a user-friendly reply form, streamlining the job-seeking process for candidates and employers, making hiring more efficient.',
			image: ewijobsImage,
			stacks: 'Next.js, Netlify, Bootstrap, MongoDB',
			link: 'https://ewijobs.cz/'
		},
	]

	return (
		<>
			<div className="projects d-flex align-items-lg-start align-items-center flex-column">
				<h2 className="gradient">Latest projects</h2>

				<Carousel projects={projects} />

				<div className="items align-items-center align-items-lg-start d-flex flex-column flex-lg-row items justify-content-between">

					{projects.map((project, key) => {
						return (
							<div key={`project-item-${key}`} className="item col-lg-3 col-10 d-flex flex-column justify-content-between">
								<Image
									src={project.image}
									alt={`${project.title} screenshot`}
								/>
								<div className='divider'></div>
								<h3 className='fw-medium'>
									<Link href={project.link} target='_blank'>
										{project.title}
										{/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" className='mx-3' /> */}
									</Link>
								</h3>
								<div className='py-2 description'>
									<p>
										{project.description}
									</p>
								</div>

								<div className='py-2'>
									<h6>Stack</h6>
									<div className='d-flex justify-content-between align-items-center'>
										<FontAwesomeIcon icon={faRectangleTerminal} />
										<span className='fw-light'>
											{project.stacks}
										</span>
									</div>
								</div>
							</div>
						)
					})}
	
				</div>

			</div>
		</>
	)
}