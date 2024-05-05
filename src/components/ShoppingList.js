import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for changing the selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtered items based on the selected category
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Select element to filter by category */}
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Render items based on the filtered list */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
