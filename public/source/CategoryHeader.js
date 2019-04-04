import React, {Component} from 'react';

class CategoryHeader extends Component {
    
    render(){
        let multipleClasses = "categoryHeader";
        if(this.props.selectedCat == this.props.id){
            multipleClasses += " greenBorder";    
        }
        if (this.props.totalCompleted == this.props.totalItems && this.props.totalItems > 0){
            multipleClasses += " greenCategory";
        }
        return (
    			<div className={multipleClasses} onClick={() => this.props.onClick(this.props.id)}>
    				<img src={this.props.image} alt={this.props.imageAlt}/>
    				<h2 className="title">{this.props.title}</h2>
    				<p><span className="itemsComplete">{this.props.totalCompleted}</span>/{this.props.totalItems}</p>
    			</div>
		);
    }
}

export default CategoryHeader;