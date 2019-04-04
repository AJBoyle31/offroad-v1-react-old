import React, {Component} from 'react';
import Logo from './Logo.js';
import Nav from './Nav.js';

class Header extends Component {
    render(){
        return (
            <div id="header">
  			   
  			   <Logo/>
  			   
  			   <Nav/>
  			   
  			   <p className="headerDesc">Whether you’re going green laning, hill climbing, rock crawling, mudding, overlanding, or desert riding, use our offroading checklist below to prepare yourself and your 4x4 for any adventure. </p>
  			
  			   <p className="headerDesc">When it’s time to hit the trail, it’s easy to forget essential items that you don’t want to be without. Take your pick of cliche about being prepared: we’ve heard them all and they all ring true. That’s why we’ve put together the most comprehensive off-roading checklist around so that you can stock your ride with every bit and piece of gear you might need out in the sticks. Simply click on an item to check it off. You can even take a break and come back later, as your checkmarks will save for future sessions. Once all categories are fully green, you know that you’re good to go!</p>
  			
  			   <p className="headerDesc">Remember that offroading is an inherently dangerous activity. To mitigate risk, it’s best to distribute these items between several vehicles. It is much safer to travel in a group; offroading alone is never recommended.</p>
		    </div>
        );
    }
}

export default Header;