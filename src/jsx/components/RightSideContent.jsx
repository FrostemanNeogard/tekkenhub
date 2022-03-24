import '../../stylesheets/RightSideContent.css'
import Bryan from '../character_pages/Bryan';
import Devil_jin from '../character_pages/Devil jin';
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
        case 'Bryan':
            return <Bryan />;
        case 'Devil Jin':
            return <Devil_jin />;
        default:
            return <h1>Welcome page</h1>
    }
}


export default RightSideContent;