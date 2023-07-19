'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareChevronRight, faSquareChevronLeft, faRectangleTerminal, faArrowUpRightFromSquare } from '@fortawesome/pro-thin-svg-icons'
import Link from 'next/link';

export const Carousel = (props) => {

	const { projects } = props;

	const [emblaRefProjecs, emblaApi] = useEmblaCarousel({ loop: true })

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className="embla overflow-hidden col-10" ref={emblaRefProjecs}>
			<div className="embla__container">

				{projects.map((project, key) => {
					return (
						<div key={`project-item-${key}`} className='px-2 embla__slide' style={{ flex: '0 0 100%', minWidth: 0 }}>
							<div>
								<Image
									src={project.image}
									alt={`${project.title} screenshot`}
								/>

								<div className='divider'></div>
								<span className='fw-medium title'>

									<Link href={project.link} target='_blank'>
										{project.title}
										{/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" className='mx-3' /> */}
									</Link>
								</span>

								<div className='py-2 description'>
									<p className='fw-light'>
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
