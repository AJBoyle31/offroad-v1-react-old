import React, {Component} from 'react';

class Logo extends Component {
    render(){
        return (
            <div id="logo">
  			    <a href="/"><img src="./images/offroad-checklist-header.jpg" alt="Offroad Checklist"/></a>
  			    <p>Because nobody <i>plans</i> to get stuck</p>
  			</div>
        );
    }
}

export default Logo;