import '../../stylesheets/TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

function TopBar() {
    return (
        <div className="top-bar">
            <button><FontAwesomeIcon icon={faHouseChimney} /> Home</button>
        </div>
    )
}

export default TopBar;