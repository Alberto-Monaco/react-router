import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
export default function PostDetail() {
	const { slug } = useParams()
	return (
		<>
			<Navbar />
			<div className='container'>PostDetail {slug}</div>
		</>
	)
}
