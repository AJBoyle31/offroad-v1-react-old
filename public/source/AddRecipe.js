import React from 'react';
import {Button, Modal} from 'react-bootstrap';

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
  render: function(){
    return (
      <div><h1>test</h1>
      <Button bsStyle="primary" bsSize="large" onClick={this.open}>Add Recipe</Button>
      <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            

            <hr />

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