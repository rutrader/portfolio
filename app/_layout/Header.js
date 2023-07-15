'use client'

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faRocketLaunch, faLayerGroup, faBars, faXmarkLarge } from '@fortawesome/pro-regular-svg-icons'
import { useState } from "react";

export default function Header() {

	const [menuClicked, setMenuClicked] = useState(false);

	const handleBarClick = (event) => {
		setMenuClicked(!menuClicked);
	}

	return (
		<section className='header col-lg-5 col-10 py-3'>

			{/* <div className="menu d-none justify-content-end align-items-center">
				<span className={menuClicked ? 'd-none' : 'name mx-auto'}>Ruslan Ishemgulov</span>
				<div className="bar" onClick={handleBarClick}>
					<FontAwesomeIcon icon={menuClicked ? faXmarkLarge : faBars} size="2x" />
				</div>
			</div> */}

			<div className={`header-nav d-flex justify-content-center`}>
				<div className="d-flex justify-content-center col-lg-4 col-3">
					<Link href={"/#about"}>
						<FontAwesomeIcon icon={faUserAstronaut} size="xl" />
						<span className="d-md-inline-block d-none">About</span>
					</Link>
				</div>
				<div className="d-flex justify-content-center col-lg-4 col-3">
					<Link href={"/#stack"}>
						<FontAwesomeIcon icon={faLayerGroup} size="xl" />
						<span className="d-md-inline-block d-none">Stack</span>
					</Link>
				</div>
				<div className="d-flex justify-content-center col-lg-4 col-3">
					<Link href={"/#projects"}>
						<FontAwesomeIcon icon={faRocketLaunch} size="xl" />
						<span className="d-md-inline-block d-none">Projects</span>
					</Link>
				</div>
			</div>
		</section>
	)
}