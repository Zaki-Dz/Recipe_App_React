import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Recipe from './Recipe'
import Cuisine from './Cuisine'
import Searched from './Searched'
import {AnimatePresence} from 'framer-motion'

const Pages = () => {
	const location = useLocation()

	return (
		<>
			<Navbar />

			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={ <Home /> } />

					<Route path='/recipe/:id' element={ <Recipe /> } />

					<Route path='/cuisine/:type' element={ <Cuisine /> } />

					<Route path='/searched/:search' element={ <Searched /> } />
				</Routes>
			</AnimatePresence>
		</>
	)
}

export default Pages