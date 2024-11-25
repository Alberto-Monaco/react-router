//si fa riferimento come api al progetto express-blog-api-crud

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import HomePage from './pages/HomePage'
import About from './pages/About'
import PostsList from './pages/PostsList'
import Navbar from './pages/Navbar'

const initialFormData = {
	title: '',
	image: '1.jpg',
	content: '',
	category: '',
	published: false,
	tags: []
}
function App() {
	const [formData, setFormData] = useState(initialFormData)
	const [articles, setArticles] = useState([])

	function fetchData(url = 'http://localhost:3006/posts/') {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setArticles(data.data)
			})
	}

	useEffect(fetchData, [])

	function handleFormField(e) {
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

		setFormData({
			...formData,
			[e.target.name]: value
		})
	}

	function addArticle(e) {
		e.preventDefault()

		fetch('http://localhost:3006/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
			.then((response) => response.json())
			.then((data) => {
				fetchData()
				setFormData(initialFormData)
			})
			.catch((error) => {
				console.error('Errore durante il salvataggio:', error)
			})
	}

	function deleteArticle(e) {
		const articleSlugToDelete = e.target.getAttribute('data-slug')

		fetch(`http://localhost:3006/posts/${articleSlugToDelete}`, {
			method: 'DELETE'
		})
			.then((data) => {
				const newArticles = articles.filter((article) => article.slug !== articleSlugToDelete)
				setArticles(newArticles)
			})
			.catch((error) => {
				console.error('Errore durante la cancellazione:', error)
			})
	}

	return (
		<>
			<BrowserRouter>
				<AppHeader />
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<About />} />
					<Route
						path='/posts'
						element={
							<PostsList
								addArticle={addArticle}
								handleFormField={handleFormField}
								formData={formData}
								articles={articles}
								deleteArticle={deleteArticle}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
