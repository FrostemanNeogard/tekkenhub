export default function ComboSection(props) {

    // Store combo data
    let comboData = JSON.parse(JSON.stringify(props.data));

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
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href={comboData[i].routes[x].demo}
                        >
                            VIDEO
                        </a>
                    </article>
                    
                    <article className="">
                        DAMAGE: {comboData[i].routes[x].damage}
                    </article>

                </section>
            )
        }
    }

    return (
        <>
            {returnHTML}
        </>
    )

}