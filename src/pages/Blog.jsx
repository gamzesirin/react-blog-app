import '../styles/Blogs.css'

import { Link, useParams } from 'react-router-dom'

import blogData from '../helpers/Data.jsx'

function SingleBlog() {
	const { id } = useParams()

	const blog = blogData.find((blog) => blog.id === id)

	if (!blog) {
		return <div>Blog yazısı bulunamadı.</div>
	}

	return (
		<div className="Blogs">
			<div className="hero">
				<h1 className="hero-title">Gamze Şirin</h1>
				<Link className="hero-link" to="https://www.linkedin.com/in/gamze%C5%9Firin/" target="_blank">
					Linkedin
				</Link>
			</div>
			<div className="content">
				<h2 className="content-title">{blog.title}</h2>
				<p className="content-text">{blog.content}</p>
				<p className="date"> Tarih: {blog.date}</p>
			</div>
		</div>
	)
}

export default SingleBlog
