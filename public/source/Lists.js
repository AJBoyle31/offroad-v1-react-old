import React, {Component} from 'react';
import List from './List.js';
import AddItem from './AddItem.js';

class Lists extends Component {
    
    generateLists(){
        let lists = this.props.items.map((item) => {
            return (
				<List
                    key={item}
                    name={item}
                    completedItems={this.props.completedItems.indexOf(item) > -1}
                    handleChange={this.props.controlFunc}
                />
            ); 
        });
        return lists;
    }
    
    generateButtons(){
        if (this.props.catNumber == 8){
            return (
                <div>
                    <AddItem addItemToChecklist={this.props.addItemToChecklist} catNumber={this.props.catNumber}/>
                    <button className="button" onClick={this.props.clearCheckedItems}>Clear All</button>
                    <button className="button" onClick={this.props.clearItems}>Remove All</button>
                </div>
            );
        } else {
            return (
                <button className="button" onClick={this.props.clearCheckedItems}>Clear All</button>
            );
        }
    }
    
    render(){
        return (
            <div className="listContainer list">
                <div className="listHeader">
                    <h2>{this.props.title}</h2>
                </div>
                <ul>
                    {this.generateLists()}
                </ul>
                <div>
					{this.generateButtons()}
				</div>
            </div>
		);
    }
}

export default Lists;

