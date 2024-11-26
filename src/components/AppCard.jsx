import { Link } from 'react-router-dom'

export default function AppCard({ article, index, deleteArticle }) {
	return (
		<div className='col'>
			<div className='card h-100' style={{ position: 'relative' }}>
				<img
					src={'http://localhost:3006/imgs/posts/' + article.image}
					className='card-img-top'
					alt={article.title}
					style={{ backgroundImage: 'cover' }}
				/>
				<div className='card-body'>
					<h5 className='card-title'>
						<Link to={`/posts/${article.slug}`}>{article.title}</Link>
					</h5>
					<div className='card-text'>
						<div>
							<strong>Content</strong>: {article.content}
						</div>
						<div>
							<strong>Slug</strong>: {article.slug}
						</div>
						<div>
							<strong>Category</strong>: {article.tags?.join(', ')}
						</div>
						{article.published && <div className='badge bg-success'>Published</div>}
					</div>
				</div>
				<div className='text-end mb-3 me-3'>
					<button
						className='btn btn-danger'
						data-index={index}
						data-slug={article.slug}
						style={{ position: 'absolute', top: '10px', right: '10px' }}
						onClick={deleteArticle}>
						🗑️
					</button>
				</div>
			</div>
		</div>
	)
}
