import React, {Component} from 'react';
import CategoryHeader from './CategoryHeader.js';

class CategoryHeaders extends Component {
    render(){
        let categoryHeader = this.props.checklists.map((checklist) => {
            
            return (
                
               <CategoryHeader key={checklist.id}
                    id={checklist.id}
                    selectedCat={this.props.catNumber}
                    title={checklist.title}
                    category={checklist.category}
                    image={checklist.image}
                    imageAlt={checklist.imageAlt}
                    totalItems={checklist.items.length}
                    totalCompleted={checklist.completedItems.length}
                    onClick={() => this.props.onClick(checklist.id)}
               />
            ); 
        });
        return (
            <div className="headerContainer">
    			{categoryHeader}
    		</div>
		);
    }
}

export default CategoryHeaders;