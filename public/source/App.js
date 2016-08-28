import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

var myRecipes = [
  { 
    "name": "Banana Bread",
    "ingredients": ["Bananas", "Flour", "Eggs", "Sugar", "Love"],
    "id": 1
  },
  {
    "name": "Sugar Cookies",
    "ingredients": ["Sugar", "Flour", "Eggs", "Love"],
    "id": 2
  },
  {
    "name": "Chocolate Brownies",
    "ingredients": ["Chocolate", "Sugar", "Other stuff"],
    "id": 3
  }
];

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

var recipeLength = 3;

var App = React.createClass({
  setInitialState: function(){
    return {
      recipes: []
    };
  },
  componentWillMount: function(){
    if (isLocalStorageSupported){
      if(localStorage["recipes"] === undefined){
        localStorage.setItem("recipes", JSON.stringify(myRecipes));
      }
      else {
        var retrievedData = localStorage.getItem("recipes");
        myRecipes = JSON.parse(retrievedData);
      }
    }    
  this.setState({recipes: myRecipes});
  },
  //need to figure this out
  addRecipe: function(recipe){
    let newRecipes = this.state.recipes.concat(recipe);
    this.setState({ recipes: newRecipes});
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
    recipeLength++;
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
  render: function(){
    
    return (
    <div>
        <h1 id="title">My Recipe Box</h1>
        <div id="recipeContainer">
          <Recipes  key={recipeLength} recipes={this.state.recipes} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} />
          
          <AddRecipe addRecipe={this.addRecipe} />  
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
