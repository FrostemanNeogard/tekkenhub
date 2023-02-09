import '../../stylesheets/TopBar.css';
import { Component } from 'react';
import $ from 'jquery';

class TopBar extends Component {

    render() {
        return (
            <div className="top-bar">
                <button
                    className='home-button'
                    onClick={() => {this.props.func('home')}}>
                        Home
                </button>
                {/* <button>
                    Contact
                </button> */}
                <button
                    onClick={() => {ShowTekkenLegend()}}
                    >
                        Notation
                </button>
            </div>
        )
    }
}

function ShowTekkenLegend() {
    $(".tekken-legend-popup").fadeIn();
}

export default TopBar;