import React, {Component} from 'react';

class Nav extends Component {
    render(){
        return (
            <div id="nav">
                <p className="navbutton"><a className="navLink" href="/">Home</a></p>
  			    <p className="navbutton"><a className="navLink" href="/about-us.html">About Us</a></p>
  			    <p className="navbutton"><a className="navLink" href="/contact-us.html">Contact Us / Feedback</a></p>
  			</div>    
        );
    }
}

export default Nav;