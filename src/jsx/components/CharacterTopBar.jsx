import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function CharacterTopbar(props) {

    // Props include a function to change state on the character page, the state itself, as well as the character name

    // Create the navbar at the top of the character pages
    return (
        <section className="character-topbar">
            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo(0, 0)}>
                    <FontAwesomeIcon icon={faArrowUp} />
            </button>

            {/* Character name */}
            <h1>{props.characterName}</h1>

            {/* Frame data/character guide button */}
            <button
                onClick={() => {
                    // If frames are currently displaying, have the button show character guide on click
                    // Otherwise, have the button show frame data on click
                    props.func(!props.displayingFrames);
                }}>
                    <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
        </section>
    )

}