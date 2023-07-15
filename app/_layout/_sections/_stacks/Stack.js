import coding from '../../../../public/images/stacks/coding.svg'
import frontend from '../../../../public/images/stacks/frontend.svg'
import server from '../../../../public/images/stacks/mindmap.svg'

import Image from 'next/image'
import { EmblaCarousel } from './StackItems'

export default function Stack() {

	const stacks = [
		{
			title: 'Back-End',
			stacks: 'PHP, Symfony, Docker',
			image: coding
		},
		{
			title: 'Front-End',
			stacks: 'Next.js, React, React Native',
			image: frontend
		},
		{
			title: 'Databases',
			stacks: 'PostgreSQL, MySQL, MongoDB',
			image: server
		},
	]

	return (
		<>
			<div className="stack d-flex align-items-lg-start align-items-center flex-column">
				<h2 className="gradient">Technologies</h2>
				<div className='col-8'>
					<p>
						I've worked with the following technologies in the web development world.
						Now I'm focused towards React and Next.js.
					</p>
				</div>

				<div className='pt-3'>
					<EmblaCarousel stacks={stacks} />
				</div>

				<div className="items d-flex col-12 flex-md-row flex-column align-items-center">

					{
						stacks.map((stack, key) => {
							return (
								<div key={`stack-item-${key}`} className="col-md-4 col-10">
									<picture>
										<Image src={stack.image} sizes="100vw" alt={`Image for ${stack.item}`} />
									</picture>
									<div className='py-3'>
										<h4 className="gradient py-2">{stack.title}</h4>
										<ul className='list-unstyled pt-2'>
											{stack.stacks.split(',').map((item, index) => (
												<li key={`tool-item-${index}`}>{item.trim()}</li>
											))}
										</ul>
									</div>
								</div>
							)
						})
					}
					{/* <div className="col-md-4 col-10">
						<picture>
							<Image
								src={frontend}
								sizes="100vw"
							/>
						</picture>
						<div className='py-3'>
							<h4 className="gradient py-2">Front-End</h4>
							<ul className='list-unstyled pt-2'>
								<li>JavaScript</li>
								<li>Next.js</li>
								<li>React Native</li>
								<li>React</li>
							</ul>

						</div>
					</div>
					<div className="col-md-4 col-10">
						<picture>
							<Image
								src={server}
								sizes="100vw"
							/>
						</picture>
						<div className='py-3'>
							<h4 className="gradient pt-2">Databases</h4>
							<ul className='list-unstyled pt-2 mb-0'>
								<li>PostgreSQL</li>
								<li>MySQL</li>
								<li>MongoDB</li>
							</ul>

						</div>
					</div> */}
				</div>
			</div>
		</>
	)
}