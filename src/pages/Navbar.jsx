import { Link } from 'react-router-dom'
export default function Navbar() {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/about'>Chi Siamo</Link>
			<Link to='/posts'>Posts</Link>
		</nav>
	)
}
