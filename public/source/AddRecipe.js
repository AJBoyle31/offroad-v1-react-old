import React from 'react';
import {Button, Modal} from 'react-bootstrap';

var num = 4;

var AddRecipe = React.createClass({
  getInitialState: function(){
    return { showAdd: false };
  },
  open: function(){
    this.setState({ showAdd: true });   
  },
  close: function(){
    this.setState({ showAdd: false });
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.setState({ showAdd: false });
    var recipe = {
    "name": event.target.name.value,
    "ingredients": event.target.ingredient.value.split(','),
    "id": num
    };
    this.props.addRecipe(recipe);
    num++;
  },
  render: function(){
    return (
      <div>
      <Button id="addButton" bsStyle="primary" bsSize="large" onClick={this.open}>Add Recipe</Button>
      <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="addRecipeForm" onSubmit={this.handleSubmit}>
            <h4>Enter Recipe Name</h4>
            <input type="text" id="name" name="name" placeholder="Recipe Name" />
            <h4>Enter Ingredients (separated by commas)</h4>
            <input type="text" id="ingredient" name="ingredient" placeholder="Ingredients separated by commas" />
            <hr/>
            <button type="submit">Add Recipe</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
   }
});

export default AddRecipe;