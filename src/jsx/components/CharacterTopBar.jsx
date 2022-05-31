import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

export default function CharacterTopbar(props) {

    // If displayingFrames is true, return a character guide button...
    if (props.displayingFrames) {
        return (
            <section className="character-topbar">
                <h1>Byran Fury</h1>
                <button className='frame-data-button'
                    onClick={() => {
                        props.func(false);
                    }}>
                        <FontAwesomeIcon icon={faArrowsRotate} />
                </button>
            </section>
        )
    }

    // ...otherwise (if displayingFrames is false), return a frame data button
    return (
        <section className="character-topbar">
            <h1>Byran Fury</h1>
            <button className='frame-data-button'
                onClick={() => {
                    props.func(true);
                }}>
                    <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
        </section>
    )

}