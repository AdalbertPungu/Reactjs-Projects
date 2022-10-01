import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext() // Objet context : Permet de partager des données entre les composants sans avoir à passer les props à travers tous les composants intermédiaires.

const AppProvider = ({ children }) => { // Provider : Composant qui permet de fournir des données à tous les composants enfants.
	const [loading, setLoading] = useState(true) // Etat de chargement
	const [searchTerm, setSearchTerm] = useState('a') // Etat de recherche
	const [cocktails, setCocktails] = useState([]) // Etat de cocktails
	
	const fetchDrinks = useCallback(async () => { // useCallback : Permet de créer une fonction qui ne change pas à chaque fois que le composant est rendu.
		setLoading(true)
		try { 
			const response = await fetch(`${url}${searchTerm}`) // Requête fetch pour récupérer les données de l'API
			const data = await response.json() // Conversion des données en JSON
			const { drinks } = data // Destructuration de l'objet drinks
			if (drinks) {
				const newCocktails = drinks.map((item) => { // Map : Permet de parcourir un tableau et de retourner un nouveau tableau.
					const {
						idDrink,
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strGlass,
					} = item
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					}
				})
				setCocktails(newCocktails) 
			} else { // Si la recherche ne retourne aucun résultat, on vide le tableau de cocktails.
				setCocktails([])
			}
			setLoading(false) 
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}, [searchTerm]) 
	useEffect(() => { // useEffect : Permet d'exécuter une fonction à chaque fois que le composant est rendu.
		fetchDrinks()
	}, [searchTerm, fetchDrinks]) // On ajoute fetchDrinks en dépendance pour éviter une boucle infinie.
	
	return ( // On retourne le contexte avec les données à partager.
		<AppContext.Provider
			value={{
				loading,
				cocktails,
				searchTerm,
				setSearchTerm,
			}}
		>
			{children /* On retourne les enfants du composant */} 
		</AppContext.Provider>
	)
}

//on exporte le contexte et le provider pour pouvoir les utiliser dans d'autres composants.
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
