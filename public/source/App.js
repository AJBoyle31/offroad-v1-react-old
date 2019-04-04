import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import masterChecklists from './masterChecklist.js';
import OffroadChecklist from './OffroadChecklist.js';


function isLocalStorageSupported(){
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  }
  catch (e) {
    return false;
  }
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      checklists: masterChecklists
    };
  }
  
  componentWillMount(){
    let uploadedChecklist;
    if(isLocalStorageSupported){
      //storage logic
      //nothing in local storage
      if (localStorage["offroadChecklist"] === undefined){
        localStorage.setItem("offroadChecklist", JSON.stringify(masterChecklists));
        uploadedChecklist = masterChecklists;
      }
      //there is saved data in local storage
      else {
        let retrievedData = localStorage.getItem("offroadChecklist");
        uploadedChecklist = JSON.parse(retrievedData);
      }
    } else {
      uploadedChecklist = masterChecklists;
    }
    
    this.setState({ checklists: uploadedChecklist });
  }
  
  updateMasterChecklistCompletedItems(newCompletedItems, id){
    let newChecklist = this.state.checklists;
    newChecklist[id].completedItems = newCompletedItems;
    this.setState({checklists: newChecklist});
    localStorage.setItem("offroadChecklist", JSON.stringify(newChecklist));
  }
  
  addItemToChecklist(newItemArray, id){
    let newChecklist = this.state.checklists;
    newChecklist[id].items = newItemArray;
    this.setState({checklists: newChecklist});
    localStorage.setItem("offroadChecklist", JSON.stringify(newChecklist));
  }
  
  clearMyItems(){
    let newChecklist = this.state.checklists;
    newChecklist[8].items = [];
    this.setState({checklists: newChecklist});
    localStorage.setItem("offroadChecklist", JSON.stringify(newChecklist));
  }
  
  render(){
    return (
        <div>
          <OffroadChecklist 
              checklists={this.state.checklists} 
              updateItemsCompleted={(newCompletedItems, id) => this.updateMasterChecklistCompletedItems(newCompletedItems, id)} 
              addItemToChecklist={(newItem, id) => this.addItemToChecklist(newItem, id)}
              clearMyItems={() => this.clearMyItems()}
          />
        </div>  
      );  
    }
}


ReactDOM.render(<App />, document.getElementById("app"));
