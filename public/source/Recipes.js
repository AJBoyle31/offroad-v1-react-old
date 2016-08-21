import React from 'react';
import Recipe from './Recipe';

var Recipes = React.createClass({
  render: function(){
   
    let recipe = this.props.recipes.map((recipe) => {
        
              return ( 
                
                <Recipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} /> 
                
              );
    });
    return (
      <div id="allRecipes">
      {recipe}
      </div>
    );
  }
});

export default Recipes;