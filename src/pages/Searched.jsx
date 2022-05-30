import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Searched = () => {
	const [results, setResults] = useState([])

	const params = useParams()
	const search = params.search

	const getData = () => {
		const api = 'https://api.spoonacular.com/recipes/complexSearch'

		fetch(api + '?number=9&query=' + search + '&apiKey=' + process.env.REACT_APP_KEY)
			.then(res => res.json())
			.then(data => {
				setResults(data.results)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<Grid
			initial={{opacity: 0, y: 100}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: 100}}
			transition={{duration: .5}}
		>
			{results.map(result => {
				return(
					<Link to={`/recipe/${result.id}`}>
						<Card>
							<img src={result.image} />
							<h4>{result.title}</h4>
						</Card>
					</Link>
				)
			})}
		</Grid>
	)
}

export default Searched

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 2rem;
`

const Card = styled.div`
	img{
		border-radius: 2rem;
		overflow: hidden;
		margin-bottom: .5rem;
	}

	h4{
		text-align: center;
	}
`