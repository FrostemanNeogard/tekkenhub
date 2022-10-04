import '../../stylesheets/TopBar.css';
import { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

class TopBar extends Component {
    render() {   
        return (
            <div className="top-bar">
                <button
                    className='home-button'
                    onClick={() => {this.props.func('home')}}>
                        Home
                </button>

                {/* TODO: Create the tekken notation popup */}
                {/* Absolute positioning on a pop up which appears on button click? */}
                <button
                    className='notation-button'
                    // onClick={() => {this.props.func('home')}}
                    >
                        Notation
                </button>
            </div>
        )
    }
}

export default TopBar;