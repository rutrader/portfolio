'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareChevronRight, faSquareChevronLeft, faRectangleTerminal, faArrowUpRightFromSquare } from '@fortawesome/pro-thin-svg-icons'
import Link from 'next/link';

export const Carousel = (props) => {

	const { projects } = props;

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className="embla overflow-hidden" ref={emblaRef}>
			<div className="embla__container">

				{projects.map((project, key) => {
					return (
						<div key={`embla-stack-item-${key}`} className="embla__slide" style={{ flex: '0 0 90%', minWidth: 0 }}>

							<div key={`project-item-${key}`} className="item col-lg-3 col-8 col-md-10 col-sm-10 d-flex flex-column justify-content-between">
								<Image
									src={project.image}
									alt={`${project.title} screenshot`}
								/>
								<div className='divider'></div>
								<h3>
									{project.title}

									<Link href={project.link} target='_blank'>
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" className='mx-3' />
									</Link>
								</h3>
								<div className='py-2 description'>
									<p>
										{project.description}
									</p>
								</div>

								<div className='py-2'>
									<h6>Stack</h6>
									<div className='d-flex justify-content-lg-between justify-content-start align-items-center'>
										<FontAwesomeIcon icon={faRectangleTerminal} />
										<span className='fw-light mx-3'>
											{project.stacks}
										</span>
									</div>
								</div>
							</div>

						</div>
					)
				})}

			</div>

			<div className='col-6 d-flex justify-content-around mx-auto'>
				<FontAwesomeIcon icon={faSquareChevronLeft} onClick={scrollPrev} size='2x' />
				<FontAwesomeIcon icon={faSquareChevronRight} onClick={scrollNext} size='2x' />

			</div>
		</div>
	)
}
