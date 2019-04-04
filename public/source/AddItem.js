import React, {Component} from 'react';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';

//this might be unnecesary
function randomIdGenerator(){
  let random = Math.round(Math.random() * 9999999);
  return random;
}

class AddItem extends Component {
  constructor(){
    super();
    this.state = {show: false};
  }
  
  open = () => {
    this.setState({ show: true });
  }
  
  close = () => {
    this.setState({ show: false });
  }
  
  handleSubmit(event){
    //need ID for category
    this.setState({ show: false });
    let item = document.getElementById("addItem").value;
    this.props.addItemToChecklist(item);
    document.getElementById("addItem").value = "";
    event.preventDefault();
  }
  
  render(){
    return (
      <div className="buttonDiv">
        <button className="button" onClick={this.open}>Add Item</button>
        <div id="addItemModal" className={this.state.show ? "modal display-block" : "modal display-none"}>
          <div className="modal-main">
            <div className="addItemModalHeader">
              <p>Add Item</p>
            </div>
            <div className="addItemInput">
              <input type="text" name="addItem" id="addItem" placeholder="Enter Item Here" />
            </div>
            <button onClick={(event) => this.handleSubmit(event)}>Add</button>
            <button onClick={this.close}>Close</button>
          </div>
        </div>
      </div>
    );    
  }
}   

export default AddItem;

/*
<Button id="addButton" bsStyle="primary" bsSize="large" onClick={this.open}>Add Item</Button>
      <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalItemName">
                <Col sm={2}>
                  Name:
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Item Name"/>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Add Item</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        */