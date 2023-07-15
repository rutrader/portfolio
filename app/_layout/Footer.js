import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { format } from 'date-fns'
import Link from 'next/link';

export default function Footer() {

	const getDate = () => {
		return format(new Date(), 'Y')
	};


	return (
		<footer className='container'>
			<div className='d-flex 
				flex-md-row 
				flex-column-reverse
				justify-content-md-between 
				align-items-center
				'
			>
				<div className='copyright'>
					&copy; {getDate()} ishemgulov.com
				</div>
				<div className='social col-md-2 col-8 d-flex justify-content-md between justify-content-around'>
					<div>
						<Link href={"https://github.com/rutrader"} target='_blank'>
							<FontAwesomeIcon icon={faGithub} size='1x' />
						</Link>
					</div>
					<div>
						<Link href={"https://linkedin.com/ruslan.ishemgulov"} target='_blank'>
							<FontAwesomeIcon icon={faLinkedin} size='1x' />
						</Link>
					</div>
					<div>
						<Link href={"https://github.com/thebananacorp"} target='_blank'>
							<FontAwesomeIcon icon={faSquareTwitter} size='1x' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}