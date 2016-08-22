import React from 'react';
import Ingredients from './Ingredients';



var Recipe = React.createClass({
  getInitialState: function(){
    return {
      showIngredients: false
    };
  },
  toggleIngredients: function(){
    this.setState({showIngredients: !this.state.showIngredients});
  },
  render: function(){
    let ingredient; 
    let num=0;
    
    if (this.state.showIngredients) {
      ingredient = this.props.ingredients.map((ingredient) => {
        num++;
      return (<Ingredients key={num} ingredient={ingredient} />);
        });
    }
    return (
        <div className="recipes">
        <div className="ingredients" onClick={this.toggleIngredients}>
          <h3 id="recipeName">{this.props.name}</h3>
        </div>
        <ul>{ingredient}</ul>
      </div>
    );
  }
});

export default Recipe;