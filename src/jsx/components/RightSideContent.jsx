import '../../stylesheets/RightSideContent.css'
import HomePage from '../components/HomePage';
import Bryan from '../character_pages/Bryan';
import DevilJin from '../character_pages/DevilJin';
import { Component } from 'react';

class RightSideContent extends Component {
    render() {
        return(
            <section className="right-side-content">
                {GetSelectedCharacter(this.props)}
            </section>
    )}
}

function GetSelectedCharacter(props) {
    switch(props.name) {
        case 'home': return <HomePage />;
        case 'Bryan': return <Bryan />;
        case 'Devil Jin': return <DevilJin />;

        default:
            return <h1>This page does not exist yet.</h1>
    }
}


export default RightSideContent;