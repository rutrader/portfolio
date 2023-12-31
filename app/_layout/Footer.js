import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareTwitter, faInstagram, faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { faCamera } from '@fortawesome/pro-regular-svg-icons'
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
				<div className='social col-md-6 col-12 d-flex justify-content-md-between justify-content-between'>
					<div className='col-6'>
						<div className='link'>
							<Link href={"https://github.com/rutrader"} target='_blank'>
								<FontAwesomeIcon icon={faGithub} size='1x' />
								<span>GitHub</span>
							</Link>
						</div>
						<div className='link'>
							<Link href={"https://linkedin.com/ruslan.ishemgulov"} target='_blank'>
								<FontAwesomeIcon icon={faLinkedin} size='1x' />
								<span>Linkedin</span>
							</Link>
						</div>
						<div className='link'>
							<Link href={"https://github.com/thebananacorp"} target='_blank'>
								<FontAwesomeIcon icon={faSquareTwitter} size='1x' />
								<span>Twitter</span>
							</Link>
						</div>
					</div>
					<div className='col-6'>
						<div className='link'>
							<Link href={"https://instagram.com/ruslan.ishemgulov"} target='_blank'>
								<FontAwesomeIcon icon={faInstagram} size='1x' />
								<span>Instagram</span>
							</Link>
						</div>
						<div className='link'>
							<Link href={"https://instagram.com/ruslan.ishemgulov"} target='_blank'>
								<FontAwesomeIcon icon={faCamera} size='1x' />
								<span>Gallery</span>
							</Link>
						</div>
						<div className='link'>
							<Link href={"https://apps.apple.com/cz/app/czech-stats/id1669200005"} target='_blank'>
								<FontAwesomeIcon icon={faAppStoreIos} size='1x' />
								<span>Czech Stats</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}