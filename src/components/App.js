import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  // State variable to hold the mode (true for dark, false for light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dynamically set the class based on the mode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle dark mode */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
