import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
	const { id } = useParams()
	const [loading, setLoading] = React.useState(false)
	const [cocktail, setCocktail] = React.useState(null)

	return (
		<section className='section cocktail-section'>
			<Link to='/' className='btn btn-primary'>
				back home
			</Link>
			<h2 className='section-title'>{name}</h2>
			<div className='drink'>
				<img src={image} alt={name} />
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name :</span> {name}
					</p>
					<p>
						<span className='drink-data'>category :</span> {category}
					</p>
					<p>
						<span className='drink-data'>info :</span> {info}
					</p>
					<p>
						<span className='drink-data'>glass :</span> {glass}
					</p>
					<p>
						<span className='drink-data'>instructions :</span> {instructions}
					</p>
					<p>
						<span className='drink-data'>ingredients :</span>
						{ingredients.map((item, index) => {
							return item ? <span key={index}>{item}</span> : null
						}
						)}
					</p>
				</div>
			</div>
		</section>
	)
}

export default SingleCocktail
