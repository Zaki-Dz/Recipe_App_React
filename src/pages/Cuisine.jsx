import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Cuisine = () => {
	const [results, setResults] = useState([])

	const params = useParams()
	const type = params.type

	const getCuisine = () => {
		const check = localStorage.getItem(type)

		if(check) {
			setResults(JSON.parse(check))
		} else {
			const api = 'https://api.spoonacular.com/recipes/complexSearch'

			fetch(api + '?number=9&cuisine=' + type + '&apiKey=' + process.env.REACT_APP_KEY)
				.then(res => res.json())
				.then(data => {
					setResults(data.results)

					localStorage.setItem(type, JSON.stringify(data.results))
				})
		}
	}

	useEffect(() => {
		getCuisine()
	}, [type])

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
						<Card key={result.id}>
							<img src={result.image} />

							<h4>{result.title}</h4>
						</Card>
					</Link>
				)
			})}
		</Grid>
	)
}

export default Cuisine

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
`

const Card = styled.div`
	img{
		border-radius: 2rem;
	}

	h4{
		text-align: center;
		padding-top: .5rem;
	}
`