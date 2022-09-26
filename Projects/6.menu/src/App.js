import React, { useState } from "react";
import './App.css';
import './Generic-css.css'

import items from "./Resources/data";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
function App() {

  const [menuItems, setMenuItems] = useState(items);

  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories}/>
        <Menu items = {menuItems} />
      </section>
    </main>
  );
}

export default App;
