import React, { useState } from 'react';
import items from './components/data';
import { Menu } from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;