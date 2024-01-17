import '../styles/Blogs.css'

import { Link } from 'react-router-dom'
import blogData from '../helpers/Data.jsx'

const Blogs = () => {
	return (
		<div className="Blogs">
			<div className="hero">
				<h1 className="hero-title">Gamze Şirin</h1>
				<Link className="hero-link" to="https://www.linkedin.com/in/gamze%C5%9Firin/" target="_blank">
					Linkedin
				</Link>
			</div>
			<div className="content">
				{blogData.map((blog, index) => (
					<div key={index}>
						<Link className="content-title" to={`/blog/${blog.id}`}>
							{blog.title}
						</Link>
						<p className="content-text">{blog.content}</p>
						<p className="date">Tarih: {blog.date}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Blogs
