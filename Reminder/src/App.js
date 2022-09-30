import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
	const [people, setPeople] = useState(data); // data est un tableau d'objets
  return (
		<main>
			<section className='container'>
				<h3>{people.length} birthdays today</h3> // people.length est le nombre d'objets dans le tableau
				<List people={people} /> // on passe le tableau d'objets à List
				<button onClick={() => setPeople([])}>clear all</button> // on vide le tableau d'objets
			</section>
		</main>
	);
}

export default App;
