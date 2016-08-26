import React from 'react';
import Ingredients from './Ingredients';
import EditRecipe from './EditRecipe';
import {Button, ButtonToolbar} from 'react-bootstrap';



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
  handleClick: function(event){
      this.props.deleteRecipe(this.props.id);
      event.preventDefault();
  },
  render: function(){
    let ingredientTitle, ingredient, recipeButton;
    let num=0;
    
    if (this.state.showIngredients) {
      ingredientTitle = <h4 id="ingredientTitle">Ingredients</h4>;
      ingredient = this.props.ingredients.map((ingredient) => {
        num++;
      return (<Ingredients key={num} ingredient={ingredient} />);
        });
      recipeButton =
        <div id="buttonContainer">
        <ButtonToolbar>
          <EditRecipe ingredients={this.props.ingredients} name={this.props.name} id={this.props.id} editRecipe={this.props.editRecipe}/>
          <Button className="debuttons" bsStyle="danger" id="deleteButton" onClick={this.handleClick}>Delete</Button> 
        </ButtonToolbar>
        </div>;
    }
    return (
        <div className="recipes">
        <div className="ingredients" onClick={this.toggleIngredients}>
          <h3 id="recipeName">{this.props.name}</h3>
        </div>
        {ingredientTitle}
        <ul>{ingredient}</ul>
        {recipeButton}
      </div>
    );
  }
});

export default Recipe;