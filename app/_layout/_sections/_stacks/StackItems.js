'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareChevronRight, faSquareChevronLeft } from '@fortawesome/pro-thin-svg-icons'

export const EmblaCarousel = (props) => {

	const { stacks } = props;

	const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className="embla overflow-hidden" ref={emblaRef}>
			<div className="embla__container">

				{stacks.map((stack, key) => {
					return (
						<div key={`embla-stack-item-${key}`} className="embla__slide" style={{ flex: '0 0 100%', minWidth: 0 }}>

							<div className="text-center">
								<picture>
									<Image src={stack.image} sizes="100vw" alt={`Image for ${stack.item}`} />
								</picture>
								<div className='py-3'>
									<h4 className="gradient py-2">{stack.title}</h4>
									<ul className='list-unstyled pt-2'>
										{stack.stacks.split(',').map((item, index) => (
											<li key={`embla-tool-item-${index}`}>{item.trim()}</li>
										))}
									</ul>
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
