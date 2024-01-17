import './About.css'

import { BiLogoLinkedin } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { PiGithubLogoFill } from 'react-icons/pi'

const About = () => {
	return (
		<div className="about">
			<h1 className="title-about">
				<span>GAMZE</span> ŞİRİN
			</h1>
			<h2>Sofware Engineer, Frontend Developer</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro amet labore facere, rerum sunt atque consectetur
				magnam quia ad aspernatur?
			</p>
			<div className="about__social">
				<Link
					className="link"
					to="
					https://www.linkedin.com/in/gamze%C5%9Firin/
				"
					target="_blank"
				>
					<BiLogoLinkedin />
				</Link>

				<Link
					className="link"
					to="
					https://github.com/Gamzesrn"
					target="_blank"
				>
					<PiGithubLogoFill />
				</Link>
				<Link className="link-btn" to="/blogs">
					<button className="btn">Blog</button>
				</Link>
			</div>
		</div>
	)
}

export default About
