import '../../stylesheets/RightSideContent.css'
import Bryan from '../character_pages/Bryan';
import { Component } from 'react';

/* Add some sort of state management that changes which component is rendered here
based on which character is focued in the CharacterSidebar component */
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
        case 'Bryan':
            return <Bryan />;
        default:
            return <h1>Welcome page</h1>
    }
}


export default RightSideContent;