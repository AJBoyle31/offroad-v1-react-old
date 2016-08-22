import React from 'react';
import Ingredients from './Ingredients';
import EditRecipe from './EditRecipe';



var Recipe = React.createClass({
  getInitialState: function(){
    return {
      showIngredients: false,
      showEditButton: false
    };
  },
  toggleIngredients: function(){
    this.setState({showIngredients: !this.state.showIngredients});
  },
  render: function(){
    let ingredient, recipeButton;
    let num=0;
    
    if (this.state.showIngredients) {
      ingredient = this.props.ingredients.map((ingredient) => {
        num++;
      return (<Ingredients key={num} ingredient={ingredient} />);
        });
      recipeButton =
        <div id="buttonContainer">
        <EditRecipe ingredients={this.props.ingredients} name={this.props.name} id={this.props.id} editRecipe={this.props.editRecipe}/>
        <button className="btn btn-danger" id="deleteButton">Delete</button> 
        </div>;
    }
    return (
        <div className="recipes">
        <div className="ingredients" onClick={this.toggleIngredients}>
          <h3 id="recipeName">{this.props.name}</h3>
        </div>
        <ul>{ingredient}</ul>
        {recipeButton}
      </div>
    );
  }
});

export default Recipe;