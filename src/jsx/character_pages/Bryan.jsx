import React, { Component } from 'react';
import CharacterFrames from '../../data/frames/bryan.json';
import CharacterCombos from '../../data/combos/bryan.json';
import CharacterInformation from '../../data/information/bryan.json';
import CharacterPunishment from '../../data/punishment/bryan.json';
import Framedata from '../components/Framedata';
import ComboSection from '../components/ComboSection';
import CharacterTopbar from '../components/CharacterTopBar';
import '../../stylesheets/TekkenNotation.css';

class Bryan extends Component {

    state = { displayFrames: false };

    changeState = (doDisplayFrames) => {
        this.setState({displayFrames: doDisplayFrames});
    }

    render() {   

        // Set the name that displays in the character top bar
        let characterName = CharacterInformation[0].name;

        // Display frame data if displayFrames is set to true
        if (this.state.displayFrames) {
            return (
                <section className="character-guide">
                    <CharacterTopbar func={this.changeState} displayingFrames={this.state.displayFrames} characterName={characterName}/>
                    <Framedata data={CharacterFrames}/>
                </section>
            )
        }

        // Display character guide if displayFrames is set to false
        return (
            <section className='character-guide'>
                <CharacterTopbar func={this.changeState} displayingFrames={this.state.displayFrames} characterName={characterName}/>
                <GenerateHeaders />
            </section>
        )   
    }
}

function GenerateHeaders() {
    let returnHTML = [];
    for (let i = 0; i < CharacterInformation.length; i++) {
        if (CharacterInformation[i].header === "Overview") continue;
        if (!CharacterInformation[i].header) console.log(`ERROR: No header for ${this.characterName} detected at: ${CharacterInformation[i]}`)

        if (i === 4) {
            returnHTML.push(<Punishment key={`character-info-${i}-punishment`}/>)
            returnHTML.push(<Combos key={`character-info-${i}-combos`}/>);
        }

        returnHTML.push(
            <article className="character-info" key={`character-info-${i}`}>
                <h2>{CharacterInformation[i].header}</h2>
                <p>{CharacterInformation[i].data}</p>
            </article>
        )
    }

    return(
        <>
            <article className='character-info overview'>
                <h2>Overview</h2>
                <img src={CharacterInformation[0].image} alt={CharacterInformation[0].name} />
                <p>{CharacterInformation[0].data}</p>
            </article>
            {returnHTML}
        </>
    )
}

function Punishment() {

    let standingPunishmentTable = [];
    let crouchingPunishmentTable = [];
    for (let i = 0; i < CharacterPunishment.standing.length; i++) {
        standingPunishmentTable.push(
            <tr key={`standing-punishment-tr${i}`}>
                <td>{CharacterPunishment.standing[i].impact}</td>
                <td>{CharacterPunishment.standing[i].input}</td>
                <td>{CharacterPunishment.standing[i].damage}</td>
                <td>{CharacterPunishment.standing[i].hit}</td>
                <td>{CharacterPunishment.standing[i].notes}</td>
            </tr>
        )
    }
    for (let i = 0; i < CharacterPunishment.crouching.length; i++) {
        crouchingPunishmentTable.push(
            <tr key={`crouching-punishment-tr${i}`}>
                <td>{CharacterPunishment.crouching[i].impact}</td>
                <td>{CharacterPunishment.crouching[i].input}</td>
                <td>{CharacterPunishment.crouching[i].damage}</td>
                <td>{CharacterPunishment.crouching[i].hit}</td>
                <td>{CharacterPunishment.crouching[i].notes}</td>
            </tr>
        )
    }

    return (
        <section className="character-info punishment">
            <h2>Punishment</h2>

            {/* Standing Punishment */}
            <h3>Standing</h3>
            <table className='punishment'>
                <tbody>
                    <tr>
                        <th>Impact</th>
                        <th>Input</th>
                        <th>Damage</th>
                        <th>Hit</th>
                        <th>Notes</th>
                    </tr>
                    {standingPunishmentTable}
                </tbody>
            </table>

            {/* Crouching Punishment */}
            <h3>Crouching</h3>
            <table className='punishment'>
                <tbody>
                    <tr>
                        <th>Impact</th>
                        <th>Input</th>
                        <th>Damage</th>
                        <th>Hit</th>
                        <th>Notes</th>
                    </tr>
                    {crouchingPunishmentTable}
                </tbody>
            </table>
        </section>
    )
}

function Combos() {
    // Render combos from the proper JSON file
    return (
        <section className="character-info combos">
            <h2>Combos</h2>
            <ComboSection data={CharacterCombos}/>
        </section>
    )
}

export default Bryan;