import '../../stylesheets/TopBar.css';
import { Component } from 'react';
import $ from 'jquery';
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
                <button
                    className='notation-button'
                    onClick={() => {ShowTekkenLegend()}}
                    >
                        Notation Quick Reference
                </button>
            </div>
        )
    }
}

function ShowTekkenLegend() {
    $(".tekken-legend-popup").show();
}

export default TopBar;