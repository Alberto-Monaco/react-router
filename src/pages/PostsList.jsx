import AppMain from '../components/AppMain'
import Navbar from './Navbar'
export default function PostsList({ addArticle, handleFormField, formData, articles, deleteArticle }) {
	return (
		<>
			<div className='container'>
				<Navbar />
				<AppMain
					addArticle={addArticle}
					handleFormField={handleFormField}
					formData={formData}
					articles={articles}
					deleteArticle={deleteArticle}
				/>
			</div>
		</>
	)
}
