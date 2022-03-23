import '../../stylesheets/RightSideContent.css'
import Bryan from '../character_pages/Byran';

/*
Add some sort of state management that changes which component is rendered here
based on which character is focued in the CharacterSidebar component
*/
function RightSideContent() {
    return (
        <section className="right-side-content">

            <Bryan />

        </section>
    )
}



export default RightSideContent;