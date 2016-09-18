import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import Title from './Title.js';

var myRecipes = [
  { 
    "name": "Banana Bread",
    "ingredients": ["Bananas", "Flour", "Eggs", "Sugar", "Love"],
    "directions": ["Set oven to 350 degrees", "Combine all ingredients", "Bake for 30 minutes"],
    "id": 1
  },
  {
    "name": "Sugar Cookies",
    "ingredients": ["Sugar", "Flour", "Eggs", "Love"],
    "directions": ["Set oven to 400 degrees", "Combine ingredients", "Bake for 10 minutes", "Serve hot"],
    "id": 2
  },
  {
    "name": "Chocolate Brownies",
    "ingredients": ["Chocolate", "Sugar", "Other stuff"],
    "directions": ["Set oven to 450 degrees", "Combine ingredients", "Pour batter in pan", "Bake for 45 minutes", "Let cool for 10 minutes"],
    "id": 3
  }
];

var name = "My Recipe Box";

function isLocalStorageSupported(){
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  }
  catch (e) {
    return false;
  }
}



var App = React.createClass({
  setInitialState: function(){
    return {
      recipes: [],
      name: ""
    };
  },
  componentWillMount: function(){
    if (isLocalStorageSupported){
      if(localStorage["recipes"] === undefined){
        localStorage.setItem("recipes", JSON.stringify(myRecipes));
      }
      if(localStorage["name"] === undefined){
        localStorage.setItem("name", JSON.stringify(name));
      }
      if(localStorage["recipes"] !== undefined && localStorage["name"] !== undefined){
        var retrievedData = localStorage.getItem("recipes");
        var retrieveName = localStorage.getItem("name");
        myRecipes = JSON.parse(retrievedData);
        name = JSON.parse(retrieveName);
      }
    }    
    this.setState({ recipes: myRecipes,
                    name: name  
    });
  },
  addRecipe: function(recipe){
    let newRecipes = this.state.recipes.concat(recipe);
    this.setState({ recipes: newRecipes});
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
    
  },
  editRecipe: function(recipe, id){
    let recipeIndex = this.state.recipes.findIndex((recipe)=>recipe.id == id);
    let oldRecipes = this.state.recipes;
    oldRecipes[recipeIndex] = recipe;
    this.setState({ recipes: oldRecipes});
    localStorage.setItem("recipes", JSON.stringify(oldRecipes));
  },
  deleteRecipe: function(id){
    let recipeIndex = this.state.recipes.findIndex((recipe)=>recipe.id == id);
    let prevRecipeState = this.state.recipes;
    prevRecipeState.splice(recipeIndex, 1);
    this.setState({recipes: prevRecipeState});
    localStorage.setItem("recipes", JSON.stringify(prevRecipeState));
  },
  handleNameChange: function(name){
    this.setState({name: name});
    localStorage.setItem("name", name);
  },
  render: function(){
    
    return (
    <div>
        <Title nameCallback={this.handleNameChange} name={this.state.name}/>
        <div id="recipeContainer">
          <Recipes   recipes={this.state.recipes} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} />
          
          <AddRecipe addRecipe={this.addRecipe} recipes={this.state.recipes}/>  
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
