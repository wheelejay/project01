import React, { useState } from 'react';
function ShoppingList() {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [comments, setComments] = useState('');
  const [commentEditState, setCommentEditState] = useState(false);

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { name: currentIngredient, purchased: false },
    ]);
    setCurrentIngredient('');
  };

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const togglePurchased = (index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].purchased = !newIngredients[index].purchased;
    setIngredients(newIngredients);
  };

  const handleCommentEdit = () => {
    setCommentEditState(true);
  };

  const handleCommentRemove = () => {
    setComments('');
    setCommentEditState(false);
  };

  return (
    <div>
      <center>
        <table boarder="1" width="450">
          <th> Shopping list</th>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>Purchased<input type="checkbox" checked={ingredient.purchased} onChange={() => togglePurchased(index)} /></td>
              <td>{ingredient.name}</td>
              <td><button onClick={() => removeIngredient(index)}>Remove</button></td>
            </tr>
          ))}
        </table>
        <button onClick={addIngredient}>Add Ingredient</button>
        <input value={currentIngredient} onChange={(e) => setCurrentIngredient(e.target.value)}></input>
        <br></br>
        Recipe Comments
        <br></br>
        <textarea disabled={!commentEditState} value={comments} onChange={(e) => setComments(e.target.value)} />
        <br></br>
        <button onClick={handleCommentEdit}>Edit Comment</button>
        <button onClick={handleCommentRemove}>Remove Comment</button>
        <br></br>
        <br></br>
      </center>
    </div>
  );
}
export default ShoppingList;