import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/css'
import {Link} from 'react-router-dom'

const Veggie = () => {
	const [results, setResults] = useState([])

	const getVeggie = () => {
		const check = localStorage.getItem('veggie')

		if(check) {
			setResults(JSON.parse(check))
		} else {
			const api = 'https://api.spoonacular.com/recipes/random?tags=vegetarian&number=9'

			fetch(api + '&apiKey=' + process.env.REACT_APP_KEY)
				.then(res => res.json())
				.then(data => {
					setResults(data.recipes)

					localStorage.setItem('veggie', JSON.stringify(data.recipes))
				})
		}
	}

	useEffect(() => {
		getVeggie()
	}, [])

	return (
		<div className='slider'>
			<Wrapper>
				<h3>Veggie</h3>

				<Splide options={{
					perPage: 3,
					arrows: false,
					pagination: false,
					drag: 'free',
					gap: '2rem',
					height: '200px',
					lazyLoad: true,
				}}>
					{results.map(result => {
						return (
							<SplideSlide key={result.id}>
								<Link to={`recipe/${result.id}`}>
									<Card>
										<p>{result.title}</p>
										<img src={result.image} alt={result.title} />
									</Card>
								</Link>
							</SplideSlide>
						)
					})}
				</Splide>
			</Wrapper>
		</div >
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

const Card = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 2rem;
	height: 100%;

	img{
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p{
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 0);
		width: 100%;
		color: white;
		text-align: center;
		font-weight: bold;
		padding: 1rem .5rem;
		padding-top: 2rem;

		&::before{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(transparent, black);
			z-index: -1;
		}
	}
`

export default Veggie