import './App.css'

import { Route, Routes } from 'react-router-dom'

import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blog/:id" element={<Blog />} />
			</Routes>
		</>
	)
}

export default App
