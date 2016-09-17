import React from 'react';
import Ingredients from './Ingredients';
import EditRecipe from './EditRecipe';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Directions from './Directions.js';



var Recipe = React.createClass({
  getInitialState: function(){
    return {
      showIngredients: false
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
    let ingredientTitle, ingredient, recipeButton, directionsTitle, directions;
    let num=0;
    
    if (this.state.showIngredients) {
      
      ingredientTitle = <h3 id="ingredientTitle">Ingredients</h3>;
      ingredient = this.props.ingredients.map((ingredient) => {
        num++;
        return (<Ingredients key={num} ingredient={ingredient} />);
      });
      
      directionsTitle = <h3 id="directionsTitle">Directions</h3>;
      directions = this.props.directions.map((step) => {
        num++;
        return (<Directions key={num} step={step} />);
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
          <h2 className="recipeName">{this.props.name}</h2>
        </div>
        
        {ingredientTitle}
        <ul>{ingredient}</ul>
      
        {directionsTitle}
        <ol>{directions}</ol>
        {recipeButton}
        
      </div>
    );
  }
});

export default Recipe;