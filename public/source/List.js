import React, {Component} from 'react';

class List extends Component {

	toggleChange = () => {
		this.props.handleChange(this.props.name);
	}
	
	render(){
		
        return (
        	<li>
				<label className={this.props.completedItems ? "container lineThrough" : "container"}>
					{this.props.name}
					<input 
						type="checkbox" 
						className="" 
						checked={this.props.completedItems} 
						onChange={this.toggleChange}
						
					/>
					<span className="checkmark"></span>
				</label>
			</li>
		);
    }
}

export default List;

