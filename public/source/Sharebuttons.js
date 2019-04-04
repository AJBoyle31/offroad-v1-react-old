import React, {Component} from 'react';

class Sharebuttons extends Component {
    render(){
        return (
            <div className="shareBox">
				<ul className="share-buttons">
					<li><a className="social" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.offroadchecklist.com&quote=The%20Offroad%20Checklist" target="_blank" rel="noopener" title="Share on Facebook"><i className="fab fa-facebook-square fa-3x" aria-hidden="true"></i><span className="sr-only">Share on Facebook</span></a></li>
				    <li><a className="social" href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fwww.offroadchecklist.com&text=The%20Offroad%20Checklist:%20https%3A%2F%2Fwww.offroadchecklist.com" target="_blank" rel="noopener" title="Tweet"><i className="fab fa-twitter-square fa-3x" aria-hidden="true"></i><span className="sr-only">Tweet</span></a></li>
				    <li><a className="social" href="http://www.reddit.com/submit?url=https%3A%2F%2Fwww.offroadchecklist.com&title=The%20Offroad%20Checklist" target="_blank" rel="noopener" title="Submit to Reddit"><i className="fab fa-reddit-square fa-3x" aria-hidden="true"></i><span className="sr-only">Submit to Reddit</span></a></li>
				    <li><a className="social" href="mailto:?subject=The%20Offroad%20Checklist&body=Helping%20you%20prepare%20for%20your%20offroading%20adventures.:%20https%3A%2F%2Fwww.offroadchecklist.com" target="_blank" rel="noopener" title="Send email"><i className="fas fa-envelope-square fa-3x" aria-hidden="true"></i><span className="sr-only">Send email</span></a></li>
				</ul>
		    </div>
		);
    }
}

export default Sharebuttons;