import { NavLink } from 'react-router-dom'
export default function Navbar() {
	return (
		<nav className='container'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/about'>Chi Siamo</NavLink>
			<NavLink to='/posts'>Posts</NavLink>
		</nav>
	)
}
