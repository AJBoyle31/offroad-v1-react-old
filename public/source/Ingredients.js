import React from 'react';


var Ingredients = React.createClass({
  render: function(){
    return <li>{this.props.ingredient}</li>;
  }
});


export default Ingredients;