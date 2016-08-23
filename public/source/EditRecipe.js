import React from 'react';
import {Button, Modal} from 'react-bootstrap';

var EditRecipe = React.createClass({
    getInitialState: function(){
        return { showEdit: false };
    },
    open: function(){
        this.setState({ showEdit: true });   
    },
    close: function(){
        this.setState({ showEdit: false });
    },
    handleEdit: function(event){
        event.preventDefault();
        this.setState({ showEdit: false });
        var recipe = {
        "name": event.target.name.value,
        "ingredients": event.target.ingredient.value.split(','),
        "id": this.props.id
        };
    this.props.editRecipe(recipe);
    },
    render: function(){
        let ingredients = this.props.ingredients.join(', ');
        return (
            <div>
            <Button id="editButton" className="debuttons" bsStyle="warning" onClick={this.open}>Edit Recipe</Button>
                <Modal show={this.state.showEdit} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Recipe</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <form className="addRecipeForm" onSubmit={this.handleEdit}>
                    <h4>Enter Recipe Name</h4>
                    <input type="text" id="name" name="name" defaultValue={this.props.name}/>
                    <h4>Enter Ingredients (separated by commas)</h4>
                    <input type="text" id="ingredient" name="ingredient" defaultValue={ingredients}/>
                    <hr/>
                    <button type="submit">Edit Recipe</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>    
        )
    }
});


export default EditRecipe;