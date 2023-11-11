import React, { useState } from 'react';
import Recipe from './Componants/Recipe';
import ShoppingList from './Componants/Shoppinglist';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const addRecipe = () => {
    const newRecipe = {
      name: "",
      url: "",
      dateAdded: "",
      rating: "1",
    };
    setRecipes([...recipes, newRecipe]);
  };
  const updateRecipe = (index, updatedRecipe) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1, updatedRecipe);
    setRecipes(newRecipes);
  };
  const removeRecipe = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };
  return (
    <main>
      <header>
        <center>
        <h1>Recipe List</h1>
        </center>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>Tried</th>
              <th>Recipe Name</th>
              <th>URL</th>
              <th>Date Added</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <Recipe
                key={index}
                recipe={recipe}
                onRemove={() => removeRecipe(index)}
                onUpdate={(updatedRecipe) => updateRecipe(index, updatedRecipe)}
              />
            ))}
          </tbody>
        </table>
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
    </main>
  );
}