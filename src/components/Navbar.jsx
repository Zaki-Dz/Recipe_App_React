import Search from './Search'
import Category from './Category'
import {BrowserRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'

const Navbar = () => {
	return (
		<Header>
			<Logo to='/'>
				<GiKnifeFork />
				Delicious
			</Logo>
			<Search />
			<Category />
		</Header>
	)
}

export default Navbar

const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`

const Logo = styled(Link)`
	font-size: 1.5rem;
	font-family: 'Lobster Two', cursive;
	display: flex;
	align-items: center;
`