import React, { useState } from 'react'
import items from './components/data'
import { Menu } from './components/Menu'

const App = () => {
	const [menuItems, setMenuItems] = useState(items);

	return (
		<main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
			<Menu items={menuItems} />
    </main>
	)
}

export default App;