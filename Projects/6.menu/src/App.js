import React, { useState } from "react";
import './App.css';
import './Generic-css.css'

import items from "./Resources/data";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import CategoriesAuto from "./Components/CategoriesAuto";

const allCategories = ["all",...new Set(items.map(item=>item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(items);

  const categories = ["All", "Breakfast", "Lunch", "Shakes", "Others"];

  const filterItems = (category) => {
    if(category.toLowerCase()==="all"){
      setMenuItems(items)
    }else if(category.toLowerCase()==="others"){
      const catgs = ["breakfast","lunch","dinner"]
      const newItems = items.filter((item)=>{
        if(catgs.includes(item.category)){
          return null
        }
        return item
      })
      setMenuItems(newItems)
    }else{
      const newItems = items.filter((item)=>item.category.toLowerCase()===category.toLowerCase())
      setMenuItems(newItems)
    }


    
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <CategoriesAuto categories={allCategories} filterItems={filterItems}/>
        <Menu items = {menuItems} />
      </section>
    </main>
  );
}

export default App;
