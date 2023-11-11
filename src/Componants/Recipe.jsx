import React, { useState } from 'react';
import ShoppingList from './Shoppinglist';

export default function Recipe({ recipe, onRemove, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState(recipe);
    const [showShoppingList, setShowShoppingList] = useState(false);
    const saveEdit = () => {
        setIsEditing(false);
        onUpdate(editedRecipe);
    };

    const toggleShoppingList = () => {
        setShowShoppingList(!showShoppingList);
    };

    return (
        <>
            {isEditing ? (
                <tr border="1" width="450">
                    <td><input type="checkbox" /></td>
                    <td><input value={editedRecipe.name} onChange={(e) => setEditedRecipe({ ...editedRecipe, name: e.target.value })} /></td>
                    <td><input value={editedRecipe.url} onChange={(e) => setEditedRecipe({ ...editedRecipe, url: e.target.value })} /></td>
                    <td><input type="date" value={editedRecipe.dateAdded} onChange={(e) => setEditedRecipe({ ...editedRecipe, dateAdded: e.target.value })} /></td>
                    <td>
                        <select value={editedRecipe.rating} onChange={(e) => setEditedRecipe({ ...editedRecipe, rating: e.target.value })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={onRemove}>Remove</button>
                    </td>
                </tr>

            ) : (
                <tr boarder="1" width="450">
                    <td><input type="checkbox" /></td>
                    <td>{recipe.name}</td>
                    <td><a href={recipe.url} target="_blank">{recipe.url}</a></td>
                    <td>{recipe.dateAdded}</td>
                    <td>{recipe.rating}</td>
                    <td>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={onRemove}>Remove</button>
                        <button onClick={toggleShoppingList}>Make Shopping List</button>
                    </td>
                </tr>
            )}
            {showShoppingList && (
                <tr>
                    <td colSpan="6">
                        <ShoppingList recipe={recipe} />
                    </td>
                </tr>
            )}

        </>
    );
}