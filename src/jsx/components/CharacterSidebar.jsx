import '../../stylesheets/CharacterSidebar.css';
import React, { useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function CharacterSidebar(props) {

    let [displayingSidebar, updateSidebarState] = useState(false)

    const ToggleSidebar = () => {
        if (!$(".character-sidebar")) return
        updateSidebarState(!displayingSidebar)
        $(".character-sidebar").toggleClass("hidden")
        $(".dim-background").css("display") === "none" ? $(".dim-background").fadeIn(() => $(".dim-background").show()) : $(".dim-background").fadeOut(() => $(".dim-background").hide())
    }


    // Function to create an article for each character including an image and a heading
    const GetCharacterPanels = (props) => {

        let returnHTML = [];

        // TEMPORARY way of getting an array of all characters
        let characterArray = GetCharacters();

        // Get all images from ../images/character_panels/small
        let characterImages = ImportAll(require.context('../../images/character_panels/small', false, /\.png$/));

        // For each character, create a character-panel article for them
        for (let i = 0; i < characterArray.length; i++) {
            let characterName = characterArray[i];
            let wip = false;
            if (characterArray[i].startsWith('-')) {
                wip = true;
                characterName = characterName.substring(1);
            }

            returnHTML.push(
                <article
                    className={`character-panel ${wip ? "work-in-progress" : ""}`}
                    key={`character-panel-${characterName}`}
                    onClick={() => {
                        // Somewhat dumb solution to scroll to character page once loaded
                        props.func(characterName)
                        let topbar = document.getElementsByClassName("character-topbar")[0]
                        if (!topbar) setTimeout(() => {
                            topbar = document.getElementsByClassName("character-topbar")[0]
                            topbar.scrollIntoView()
                        }, 50)
                        else topbar.scrollIntoView()
                        ToggleSidebar()
                    }}
                >
                    <img src={characterImages[i]} alt={characterName} />
                    <h2>{characterName}</h2>
                </article>
            )
        }

        // Return the resulting HTML code
        return (
            <section className="character-list">
                {returnHTML}
            </section>
        )
    }

    return (
        <section className="character-sidebar">
            <div className='dim-background'></div>
            <div className='show-character-sidebar' onClick={() => {
                ToggleSidebar()
            }}>
                <div>
                    <h4>Character List</h4>
                    <p><FontAwesomeIcon icon={faArrowRight}/></p>
                </div>
            </div>
            <GetCharacterPanels func={props.func}/>
        </section>
    )

}



// TODO: Maybe fix this, I'm not sure if it's THAT bad or not.
// (currently temporary) function to get the names of all characters
// which is used in the creation of their panels in the sidebar
// If name starts with "-", it is work in progress.
function GetCharacters() {
    return [
        '-Akuma',
        '-Alisa',
        '-Anna',
        '-Armor King',
        '-Asuka',
        '-Bob',
        'Bryan',
        '-Claudio',
        '-Devil Jin',
        '-Dragunov',
        '-Eddy',
        '-Eliza',
        '-Fahkumram',
        '-Feng',
        '-Ganryu',
        '-Geese',
        '-Gigas',
        '-Heihachi',
        '-Hwoarang',
        '-Jack-7',
        '-Jin',
        '-Josie',
        '-Julia',
        '-Katarina',
        '-Kazumi',
        '-Kazuya',
        '-King',
        '-Kuma/Panda',
        '-Kunimitsu',
        '-Lars',
        '-Law',
        '-Lee',
        '-Lei',
        '-Leo',
        '-Leroy',
        '-Lidia',
        '-Lili',
        '-Lucky Chloe',
        '-Marduk',
        '-Master Raven',
        '-Miguel',
        '-Negan',
        '-Nina',
        '-Noctis',
        '-Paul',
        '-Shaheen',
        '-Steve',
        '-Xiaoyu',
        '-Yoshimitsu',
        '-Zafina'
    ]
}

// Function to get all character panels from the character_panels folder
function ImportAll(r) {
    return r.keys().map(r);
}

export default CharacterSidebar;