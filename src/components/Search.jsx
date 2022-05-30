import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Search = () => {
	const [input, setInput] = useState('')
	const navigate = useNavigate()

	const handleChange = e => {
		setInput(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (input.trim().length > 0) {
			navigate('/searched/' + input)
		}

		setInput('')
	}

	return (
		<SForm onSubmit={handleSubmit}>
			<FaSearch />
			<input type="text" value={input} onChange={handleChange} />
		</SForm>
	)
}

export default Search

const SForm = styled.form`
	display: flex;
  align-items: center;
  padding-inline: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(35deg, #555, #333);
  color: white;
  max-width: 500px;
  width: 100%;

	input {
	  padding: 1rem;
	  border: none;
	  background-color: transparent;
	  flex: 1;
}`