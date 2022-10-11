import '../../stylesheets/RightSideContent.css'
import HomePage from '../components/HomePage';
import CharacterGuide from '../components/CharacterGuide';
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
        case 'Bryan': return <CharacterGuide name="bryan"/>;
        case 'Lee': return <CharacterGuide name="lee"/>;

        default:
            return <h1>This page does not exist yet.</h1>
    }
}


export default RightSideContent;