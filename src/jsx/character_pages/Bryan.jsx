import React, { Component } from 'react';
import CharacterFrames from '../../data/frames/bryan.json';
import CharacterCombos from '../../data/combos/bryan.json';
import CharacterTopMoves from '../../data/top_moves/bryan.json';
import CharacterInformation from '../../data/information/bryan.json';
import CharacterPunishment from '../../data/punishment/bryan.json';
import Framedata from '../components/Framedata';
import ComboSection from '../components/ComboSection';
import CharacterTopbar from '../components/CharacterTopBar';
import '../../stylesheets/TekkenNotation.css';

// TODO: Make this code work for every character page as to avoid copy pasting this file for everyone

class Bryan extends Component {

    state = { displayFrames: false };

    changeState = (doDisplayFrames) => {
        this.setState({displayFrames: doDisplayFrames});
    }

    render() {   

        // Set the name that displays in the character top bar
        let characterName = CharacterInformation[0].name;

        // Display character guide or frame data depending on displayingFrames state
        return (
            <section className="character-guide">
                <CharacterTopbar func={this.changeState} displayingFrames={this.state.displayFrames} characterName={characterName}/>
                {this.state.displayFrames ? <Framedata data={CharacterFrames}/> : <CharacterPage />}
            </section>
        ) 
    }
}

// Creates the entire character page
function CharacterPage() {
    return (
        <>
            <Overview />
            <TopMoves />
            <Punishment />
            <Combos />
            <GenerateHeaders />
        </>
    )
}

// Overview Section
function Overview() {
    return (
        <article className='character-info overview'>
            <h2>Overview</h2>
            <img src={CharacterInformation[0].image} alt={CharacterInformation[0].name} />
            {FormatData(CharacterInformation[0].data)}
        </article>
    )
}

// Top Moves section
function TopMoves() {
    let returnHTML = [];
    for (let i = 0; i < CharacterTopMoves.length; i++) {
        returnHTML.push (
            <section className='key-move-section' key={i}>
                <h3>
                    <a target="_blank" rel="noreferrer" href={CharacterTopMoves[i].demo}>
                        {`${CharacterTopMoves[i].moveName} (${CharacterTopMoves[i].input})`}
                    </a><span style={{fontWeight: "100"}}>{` (i${CharacterTopMoves[i].impact} ${CharacterTopMoves[i].hitProperty})`}</span>
                </h3>
                <span>Damage: {CharacterTopMoves[i].damage}</span>
                <span>Block: {CharacterTopMoves[i].onBlock}</span>
                <span>Hit: {CharacterTopMoves[i].onHit}</span>
                <span>CH: {CharacterTopMoves[i].onCounter}</span>
                {FormatData(CharacterTopMoves[i].information)}
            </section>
        )
    }

    // TODO: Add move tracking section

    return (
        <article className='character-info key-moves'>
            <h2>Key Moves</h2>
            {returnHTML}
        </article>
    )
}

// Generates the user made headers that are not Overview or Top Moves
function GenerateHeaders() {
    let remainingHeaders = [];
    // Loop starts at 1 as to skip the first entry, that being Overview.
    for (let i = 1; i < CharacterInformation.length; i++) {

        if (!CharacterInformation[i].header) console.log(`ERROR: No header for ${this.characterName} detected at: ${CharacterInformation[i]}`)

        remainingHeaders.push(
            <article className="character-info" key={`character-info-${i}`}>
                <h2>{CharacterInformation[i].header}</h2>
                {FormatData(CharacterInformation[i].data)}
            </article>
        )
    }

    return(
        remainingHeaders
    )
}

// Punishment section
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

// Combo section
function Combos() {
    // Render combos from the proper JSON file
    return (
        <section className="character-info combos">
            <h2>Combos</h2>
            <ComboSection data={CharacterCombos}/>
        </section>
    )
}

// Formats the data to allow for paragraph division
// Splits multiple lines into multiple p elements rarther than concatenating the strings
function FormatData(dataArray) {
    let returnHTML = [];
    for (let i = 0; i < dataArray.length; i++) {
        returnHTML.push(<p key={i}>{dataArray[i]}</p>)
    }
    return returnHTML;
}

export default Bryan;