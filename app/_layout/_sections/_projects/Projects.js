import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleTerminal } from '@fortawesome/pro-thin-svg-icons'

import czechstatsImage from '../../../../public/images/projects/czechstats.png'
import workmarketImage from '../../../../public/images/projects/workmarket.png'

export default function Projects() {
	return (
		<>
			<div className="projects d-flex align-items-lg-start align-items-center flex-column">
				<h2 className="gradient">Last projects</h2>

				<div className="align-items-center align-items-lg-start d-flex flex-column flex-lg-row items justify-content-between">
					<div className="item col-lg-4 col-10 d-flex flex-column justify-content-between">
						<Image
							src={czechstatsImage}
							alt="czechstats.eu screenshot"
						/>
						<div className='divider'></div>
						<h3>CzechStats</h3>
						<div className='py-2 description'>
							<p>
								Czech Republic economic indicators in one place.
								Our website provides a comprehensive overview of the Czech Republic economy,
								including key economic indicators, financial data,
								monetary and fiscal policy, and government statistics.
							</p>
						</div>

						<div className='py-2'>
							<h6>Stack</h6>
							<div className='d-flex justify-content-between align-items-center'>
								<FontAwesomeIcon icon={faRectangleTerminal} />
								<span className='fw-light'>
									React, NodeJS, Context API
								</span>
							</div>
						</div>
					</div>
					
					<div className="item col-lg-4 col-10 d-flex flex-column justify-content-between">
						<Image
							src={workmarketImage}
							alt="workmarket.eu screenshot"
						/>
						<div className='divider'></div>
						<h3>Workmarket.eu</h3>
						<div className='py-2 description'>
							<p>
							Workmarket.eu - Europe's #1 job site for multilingual jobseekers. 
							Vacancies and recruitment in Europe.
							</p>
						</div>

						<div className='py-2'>
							<h6>Stack</h6>
							<div className='d-flex justify-content-between align-items-center'>
								<FontAwesomeIcon icon={faRectangleTerminal} />
								<span className='fw-light'>
									PHP, Symfony, PostgreSQL
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}