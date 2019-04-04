import React, {Component} from 'react';
import Header from './Header.js';
import CategoryHeaders from './CategoryHeaders.js';
import Sharebuttons from './Sharebuttons.js';
import Lists from './Lists.js';


class OffroadChecklist extends Component {
    
    constructor(){
        super();
        this.state = {
            catNumber: 0,    
            selectedCategory: [],
            items: [],
            completedItems: [],
            width: window.innerWidth
        };
    }
    
    componentWillMount(){
        this.setState({
            catNumber: 0,
            selectedCategory: this.props.checklists[0],
            items: this.props.checklists[0].items,
            completedItems: this.props.checklists[0].completedItems,
            width: window.innerWidth
        });
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }
    
    handleItemClick(name){
        const newItem = name;
        let newItemArray;
        if(this.state.completedItems.indexOf(newItem) > -1){
          newItemArray = this.state.completedItems.filter(s => s !== newItem);
        } else {
          newItemArray = [...this.state.completedItems, newItem];
        }
        this.setState({completedItems: newItemArray}, () => this.props.updateItemsCompleted(newItemArray, this.state.catNumber));
    }
  
    handleCategoryHeaderClick(i){
        this.setState({
            catNumber: i,
            selectedCategory: this.props.checklists[i],
            items: this.props.checklists[i].items,
            completedItems: this.props.checklists[i].completedItems,
        });
    }
    
    handleClearButton(){
        
        this.setState({completedItems: []}, () => this.props.updateItemsCompleted(this.state.completedItems, this.state.catNumber));
    }
    
    handleAddItem(newItem){
        let newItemArray = [...this.state.items, newItem];
        this.setState({items: newItemArray}, () => this.props.addItemToChecklist(newItemArray, this.state.catNumber));
        
    }
    
    handleClearItems(){
        this.handleClearButton();
        this.setState({items: []}, () => this.props.clearMyItems());
    }
    
    render(){
        const width = this.state.width;
        const isMobile = width <= 921; 
        
        //MOBILE
        if (isMobile){
            return (
                <div>
                    <Header/>
                    <div className="border"></div>
                    <CategoryHeaders checklists={this.props.checklists} 
                        onClick={(i) => this.handleCategoryHeaderClick(i)} 
                        catNumber={this.state.catNumber} />
                    
                </div>
            );
        } else {
        //DESKTOP
            return (
                <div>
                    <Header/>
                    
                    <div className="border"></div>
                    
                    <CategoryHeaders checklists={this.props.checklists} 
                        onClick={(i) => this.handleCategoryHeaderClick(i)} 
                        catNumber={this.state.catNumber} />
                    
                    <Lists items={this.state.items} 
                        completedItems={this.state.completedItems} 
                        title={this.state.selectedCategory.title} 
                        controlFunc={(e) => this.handleItemClick(e)} 
                        clearCheckedItems={() => this.handleClearButton()}
                        addItemToChecklist={(newItem) => this.handleAddItem(newItem)}
                        clearItems={() => this.handleClearItems()}
                        catNumber={this.state.catNumber} />
                    
                    <div className="border"></div>
                    
                    <Sharebuttons/>
                </div>
            );
        }
    }
}


export default OffroadChecklist;