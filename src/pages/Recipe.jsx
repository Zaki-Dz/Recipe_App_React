import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Recipe = () => {
	const [results, setResults] = useState([])
	const [activeTab, setActiveTab] = useState('instructions')

	const params = useParams()
	const id = params.id

	const getData = () => {
		const api = 'https://api.spoonacular.com/recipes/'

		fetch(api + id + '/information?apiKey=' + process.env.REACT_APP_KEY)
			.then(res => res.json())
			.then(data => {
				setResults(data)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<DetailedRecipe
			initial={{opacity: 0, y: 100}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: 100}}
			transition={{duration: .5}}
		>
			<div>
				<h2>{results.title}</h2>

				<img src={results.image} />
			</div>

			<Infos>
				<div className="top">
					<button className={activeTab === 'instructions' ? 'active' : ''}  onClick={() => setActiveTab('instructions')}>Instructions</button>

					<button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
				</div>

				<div className="bottom">
					{activeTab === 'instructions' 
						? <motion.div
							className="instructions"
							initial={{opacity: 0, y: 100}}
							animate={{opacity: 1, y: 0}}
							exit={{opacity: 0, y: 100}}
							transition={{duration: .5}}
						 >
							<p dangerouslySetInnerHTML={{__html: results.summary}}></p>

							<p dangerouslySetInnerHTML={{__html: results.instructions}}></p>
						</motion.div>

						: <motion.ul 
								className="ingredients"
								initial={{opacity: 0, y: 100}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: 100}}
								transition={{duration: .5}}
							>
								{results.extendedIngredients.map(ingredient => {
									return (
										<li>{ingredient.original}</li>
									)
								})}
							</motion.ul>
					}
				</div>
			</Infos>
		</DetailedRecipe>
	)
}

export default Recipe

const DetailedRecipe = styled(motion.div)`
	display: flex;
	gap: 3rem;
	margin-top: 2rem;

	h2{
		margin-bottom: 5rem;
	}

	img{
		max-width: 400px;
	}
`

const Infos = styled.div`
	flex: 1;

	.top{
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;

		button{
			background-color: white;
			padding: 1rem 2rem;
			border: 2px solid #555;

			&.active{
				background: linear-gradient(35deg, #555, #333);
				color: white;
			}
		}
	}

	.bottom{
		.instructions{
			display: flex;
			flex-direction: column;
			gap: 1rem;

			p{
				line-height: 1.4rem;
			}

			a{
				text-decoration: underline;
			}
		}

		.ingredients{
			display: flex;
			flex-direction: column;
			gap: .5rem;
		}
	}
`