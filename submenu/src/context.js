import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext(); // permet de créer un contexte

// AppContext est un objet qui contient 2 composants: Provider et Consumer
export const AppProvider = ({ children }) => { // children est un composant React qui permet de récupérer les éléments enfants d'un composant
	
	// on crée un state pour le menu
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	// on crée un state pour le sous-menu
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	// on crée un state pour la position du sous-menu
	const [location, setLocation] = useState({});
	// on crée un state pour le sous-menu à afficher en fonction du bouton cliqué dans le menu principal (products, developers, company)
	const [page, setPage] = useState({ page: '', links: [] });

	// on crée une fonction pour ouvrir le menu
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	
	// on crée une fonction pour fermer le menu
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	// on crée une fonction pour ouvrir le sous-menu
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};
	
	// on crée une fonction pour fermer le sous-menu
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	// on retourne un objet qui contient les states et les fonctions
	return (
		// on utilise le composant Provider pour fournir les données à tous les composants enfants de AppProvider (dans index.js)
		<AppContext.Provider  
			value={{ // on passe un objet à la propriété value
				isSidebarOpen, // on passe le state isSidebarOpen
				isSubmenuOpen, // on passe le state isSubmenuOpen
				openSidebar, // on passe la fonction openSidebar
				closeSidebar, // on passe la fonction closeSidebar
				openSubmenu, // on passe la fonction openSubmenu
				closeSubmenu, // on passe la fonction closeSubmenu
				location, // on passe le state location
				page, // on passe le state page
			}}
		>
			{children /* on affiche les enfants de AppProvider */}
		</AppContext.Provider> // on passe les composants enfants de AppProvider
	);
}

export const useGlobalContext = () => { // on crée une fonction qui va retourner le contexte
	return useContext(AppContext);
}
