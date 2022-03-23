import '../../stylesheets/CharacterSidebar.css';

function CharacterSidebar() {
    return (
        <section className="character-sidebar">
            <GetCharacterPanels />
        </section>
    )
}

// Function to create an article for each character including an image and a heading
function GetCharacterPanels() {

    let returnHTML = [];

    // TEMPORARY way of getting an array of all characters
    let characterArray = GetCharacters();

    // Get all images from ../images/character_panels
    let characterImages = ImportAll(require.context('../../images/character_panels/small', false, /\.png$/));

    // For each character, create a character-panel article for them
    for (let i = 0; i < characterArray.length; i++) {
        returnHTML.push (
            <article className="character-panel" key={`character-panel-${i}`}>

                <img src={characterImages[i]} alt={characterArray[i]} />
                <h2>{characterArray[i]}</h2>

            </article>
        )
    }

    // Return the resulting HTML code
    return returnHTML;
}

// (currently temporary) function to get the names of all characters
// which is used in the creation of their panels in the sidebar
function GetCharacters() {
    return [
        'Akuma',
        'Alisa',
        'Anna',
        'Armor King',
        'Asuka',
        'Bob',
        'Bryan',
        'Claudio',
        'Devil Jin',
        'Dragunov',
        'Eddy',
        'Eliza',
        'Fahkumram',
        'Feng',
        'Ganryu',
        'Geese',
        'Gigas',
        'Heihachi',
        'Hwoarang',
        'Jack-7',
        'Jin',
        'Josie',
        'Julia',
        'Katarina',
        'Kazumi',
        'Kazuya',
        'King',
        'Kuma/Panda',
        'Kunimitsu',
        'Lars',
        'Law',
        'Lee',
        'Lei',
        'Leo',
        'Leroy',
        'Lidia',
        'Lili',
        'Lucky Chloe',
        'Marduk',
        'Master Raven',
        'Miguel',
        'Negan',
        'Nina',
        'Noctis',
        'Paul',
        'Shaheen',
        'Steve',
        'Xiaoyu',
        'Yoshimitsu',
        'Zafina'
    ]
}

// Function to get all character panels from the character_panels folder
function ImportAll(r) {
    return r.keys().map(r);
}

export default CharacterSidebar;