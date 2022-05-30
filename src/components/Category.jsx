import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Category = () => {
	return (
		<Categories>
			<SLink to='/cuisine/italian'>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>

			<SLink to='/cuisine/american'>
				<FaHamburger />
				<h4>American</h4>
			</SLink>

			<SLink to='/cuisine/thai'>
				<GiNoodles />
				<h4>Thai</h4>
			</SLink>

			<SLink to='/cuisine/chinese'>
				<GiChopsticks />
				<h4>Chinese</h4>
			</SLink>
		</Categories>
	)
}

export default Category

const Categories = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	a{
		text-align: center;
	}
`

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: .5rem;
	min-width: 6rem;
	min-height: 6rem;
	background: linear-gradient(35deg, #555, #333);
	border-radius: 50%;
	color: white;
	font-size: 1.5rem;

	h4{
		font-size: .8rem;
	}

	&.active{
		background: linear-gradient(to right, #f27121, #e94057);
	}
`