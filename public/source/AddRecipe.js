import React from 'react';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';


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
    var name = document.getElementById("formHorizontalRecipeName").value;
    var ingredients = document.getElementById("formHorizontalRecipeIngredients").value;
    var recipe = {
    "name": name,
    "ingredients": ingredients.split(','),
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
            <Form horizontal>
              <FormGroup controlId="formHorizontalRecipeName">
                <Col sm={2}>
                  Name:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Recipe Name"/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalRecipeIngredients">
                <Col sm={2}>
                  Ingredients:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Ingredients separated by commas" />
                </Col>
              </FormGroup>
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Add Recipe</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
   }
});

export default AddRecipe;