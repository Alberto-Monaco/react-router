import Navbar from './Navbar'

export default function Home() {
	return (
		<>
			<Navbar />
			<div className='container'>
				<h1 className='my-4 text-center'>Homepage</h1>

				<p className=' my-4 text-center'>Benvenuto nel mio blog!</p>
			</div>
		</>
	)
}
