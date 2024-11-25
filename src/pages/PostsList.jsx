import AppMain from '../components/AppMain'

export default function PostsList({ addArticle, handleFormField, formData, articles, deleteArticle }) {
	return (
		<AppMain
			addArticle={addArticle}
			handleFormField={handleFormField}
			formData={formData}
			articles={articles}
			deleteArticle={deleteArticle}
		/>
	)
}
