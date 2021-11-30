import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e){
    setSearchTerm(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      //return a new arr with all items. It's why we return true for the .filter() method to return everything
      return true;
    };
    //return a new arr with items in selectedCategory
    return item.category === selectedCategory;
  }).filter((item) => item.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  //^ 2nd .filter() is filtering the new array from the 1st .filter() **doesn't matter which .filter() comes first, it seems like**
  //making sure case doesn't matter with .toLowerCase()
  //we can also use .includes to search a phrase in the whole item and not the beginning (using below's code for the second .filter() option)
  // .filter((item) => item.name.includes(searchTerm));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
