import Category from '../components/Category'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import {motion} from 'framer-motion'

const Home = () => {
	return (
		<motion.div 
			initial={{opacity: 0, y: 100}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: 100}}
			transition={{duration: .5}}
		>
			<Popular />

			<Veggie />
		</motion.div>
	)
}

export default Home