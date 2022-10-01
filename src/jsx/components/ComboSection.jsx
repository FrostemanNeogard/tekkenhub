import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

class ComboSection extends Component {

    state = {
        value: 'hello',
        copied: false,
    };

    render() {
        // Store combo data
        let comboData = JSON.parse(JSON.stringify(this.props.data));

        // Varuable that holds all HTML which gets returned in the end
        let returnHTML = [];

        // Loop through each launcher to create HTML blocks for 
        // each launcher
        // --- This code is honestly sort of a mess and I should really fix it ---
        for (let i = 0; i < comboData.length; i++) {

            returnHTML.push (
                <h3 
                    key={`launcher-${i}`}
                >
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href={comboData[i].launcherDemo}
                    >
                        {comboData[i].launcherName} Combos ({comboData[i].launcherNotation})
                    </a>
                </h3>
            )

            // Loop through each combo for the current launcher
            for (let x = 0; x < comboData[i].routes.length; x++) {
                // Format the combo notation to give the proper 
                // CSS classes to the displayed notation
                let seperatedNotation = comboData[i].routes[x].formattedNotation.split(',');
                let currentComboNotation = [];
                for (let y = 0; y < seperatedNotation.length; y++) {
                    currentComboNotation.push(
                        <span 
                            key={`launcher-${i}-combo-${x}-notation-${y}`}
                            className={`tn tn-${seperatedNotation[y]}`}
                        />
                    )
                }

                returnHTML.push(
                    <section
                        key={`launcher-${i}-combo-${x}`}
                    >
                        <article
                            className="combo-notation combo"
                        >
                            {currentComboNotation}

                            <nav className="combo-navigation">
                                <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href={comboData[i].routes[x].demo}
                                >
                                    <button>
                                        <FontAwesomeIcon icon={faVideoCamera} />
                                    </button>
                                </a>
                                <CopyToClipboard 
                                    text={comboData[i].routes[x].displayedNotation}
                                    onCopy={() => 
                                        this.setState({ copied: true })}
                                >
                                    <button>
                                        <FontAwesomeIcon icon={faClipboard} />
                                    </button>
                                </CopyToClipboard>
                            </nav>
                        </article>

                        <div className="combo-notes">
                            <p>
                                DAMAGE: {comboData[i].routes[x].damage}
                                <br />
                                NOTES: {comboData[i].routes[x].notes}
                            </p>
                        </div>
                    </section>
                )
            }
        }


        if (this.state.copied) {
            $(".clipboard-popup").show();
            setTimeout(() => {
                $(".clipboard-popup").hide();
            }, 2000);
        }

        return returnHTML;
    }
}


export default ComboSection;