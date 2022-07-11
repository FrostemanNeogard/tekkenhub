import React, { Component } from 'react';
import BryanFrames from '../../data/frames/bryan.json';
import BryanCombos from '../../data/combos/bryan.json';
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
        let characterName = "Bryan Fury";

        // Display frame data if displayFrames is set to true
        if (this.state.displayFrames) {
            return (
                <section className="character-guide">
                    <CharacterTopbar func={this.changeState} displayingFrames={this.state.displayFrames} characterName={characterName}/>
                    <Framedata data={BryanFrames}/>
                </section>
            )
        }

        // Display character guide if displayFrames is set to false
        return (
            <section className='character-guide'>
                <CharacterTopbar func={this.changeState} displayingFrames={this.state.displayFrames} characterName={characterName}/>
                <Overview />
                <TopMoves />
                <Gameplay />
                <Counterplay />
                <Punishment />
                <Combos />
                <Notes />
            </section>
        )   
    }
}

function Overview() {
    return (
        <article className="character-info overview">
            <h2>Overview</h2>
            <img src="https://fauxjacket.com/wp-content/uploads/2021/07/bryan-fury-jacket.jpg" alt="Bryan Fury" />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos similique repudiandae placeat iure cupiditate sunt voluptate? At molestias obcaecati nesciunt officia. Cum nihil magni quae ipsum atque? Dolore iste magnam suscipit nisi! Minima dolorum sunt temporibus excepturi optio repudiandae cupiditate iste quas necessitatibus rem esse porro aperiam facilis qui quisquam, hic voluptatum ratione debitis nemo ipsa dolores vel? Exercitationem temporibus laboriosam cupiditate placeat aliquam consectetur, porro quaerat animi quam velit commodi quo at dicta excepturi, cum blanditiis ducimus esse eveniet eos obcaecati. Dolores, at! Minima incidunt asperiores saepe architecto adipisci illo hic! Corporis ut blanditiis facere quas sint possimus omnis dolores nisi. Minima modi nemo accusamus molestias vero perspiciatis ducimus at fuga nobis! Sequi at distinctio ipsum fuga ducimus atque culpa recusandae earum dolor hic suscipit iure nam nihil corrupti sunt nisi, necessitatibus cumque nesciunt animi? At culpa reiciendis nihil maiores enim nemo molestias nobis ratione quae molestiae placeat ipsum sint doloremque exercitationem non harum porro ipsam, autem cum, beatae, iusto totam. Molestias nam, porro cumque obcaecati libero maxime delectus beatae non asperiores perferendis in facere sed, incidunt repellendus architecto iusto fuga vel omnis ducimus? Deserunt culpa non dolorem expedita ullam dolores aliquam quo quasi quas quod! Soluta, reprehenderit.
            </p>
        </article>
    )
}

function TopMoves() {
    return (
        <section className="character-info top-moves">
            <h2>Top Moves</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam aspernatur exercitationem cum accusantium enim reprehenderit praesentium aliquam? Recusandae explicabo et debitis sunt veniam iste quis similique perspiciatis aliquid reprehenderit placeat minus, vel autem vitae quo amet deserunt eaque deleniti. Incidunt architecto sapiente praesentium doloremque facilis velit. Voluptas perferendis natus repudiandae distinctio laboriosam ab dolorem totam enim hic perspiciatis ipsum ipsa, amet saepe molestias porro nam doloribus architecto quasi blanditiis quo? Expedita sunt libero animi repudiandae, atque asperiores consequuntur fuga magni voluptates odio tempora dolorem rem nemo laborum nam soluta aut numquam at nisi sapiente! Vero tenetur dolores voluptatum eveniet!</p>
        </section>
    )
}

function Gameplay() {
    return (
        <section className="character-info gameplay">
            <h2>Gameplay</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam aspernatur exercitationem cum accusantium enim reprehenderit praesentium aliquam? Recusandae explicabo et debitis sunt veniam iste quis similique perspiciatis aliquid reprehenderit placeat minus, vel autem vitae quo amet deserunt eaque deleniti. Incidunt architecto sapiente praesentium doloremque facilis velit. Voluptas perferendis natus repudiandae distinctio laboriosam ab dolorem totam enim hic perspiciatis ipsum ipsa, amet saepe molestias porro nam doloribus architecto quasi blanditiis quo? Expedita sunt libero animi repudiandae, atque asperiores consequuntur fuga magni voluptates odio tempora dolorem rem nemo laborum nam soluta aut numquam at nisi sapiente! Vero tenetur dolores voluptatum eveniet!</p>
        </section>
    )
}

function Counterplay() {
    return (
        <section className="character-info counterplay">
            <h2>Counterplay</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam aspernatur exercitationem cum accusantium enim reprehenderit praesentium aliquam? Recusandae explicabo et debitis sunt veniam iste quis similique perspiciatis aliquid reprehenderit placeat minus, vel autem vitae quo amet deserunt eaque deleniti. Incidunt architecto sapiente praesentium doloremque facilis velit. Voluptas perferendis natus repudiandae distinctio laboriosam ab dolorem totam enim hic perspiciatis ipsum ipsa, amet saepe molestias porro nam doloribus architecto quasi blanditiis quo? Expedita sunt libero animi repudiandae, atque asperiores consequuntur fuga magni voluptates odio tempora dolorem rem nemo laborum nam soluta aut numquam at nisi sapiente! Vero tenetur dolores voluptatum eveniet!</p>
        </section>
    )
}

function Punishment() {
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
                    <tr>
                        <td>i10</td>
                        <td>1,4</td>
                        <td>21</td>
                        <td>+4</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>i10</td>
                        <td>2,3</td>
                        <td>24</td>
                        <td>+6</td>
                        <td>Shorter range than 1,4</td>
                    </tr>
                    <tr>
                        <td>i12</td>
                        <td>4,3</td>
                        <td>27</td>
                        <td>+2</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>i13</td>
                        <td>d/f+2,1</td>
                        <td>23</td>
                        <td>+8</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>i14</td>
                        <td>f,b+2</td>
                        <td>20</td>
                        <td>Launch</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>i14 (long range)</td>
                        <td>f,f+2</td>
                        <td>32</td>
                        <td>KND</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>i15 (mid)</td>
                        <td>f+2,1,4</td>
                        <td>42</td>
                        <td>KND</td>
                        <td>Mid</td>
                    </tr>
                    <tr>
                        <td>i15 (wallbreak)</td>
                        <td>d/b+1+2</td>
                        <td>39</td>
                        <td>KND</td>
                        <td>Mid, wallbreak</td>
                    </tr>
                    <tr>
                        <td>i16 (wall)</td>
                        <td>b+4</td>
                        <td>18</td>
                        <td>+15</td>
                        <td>Mid</td>
                    </tr>
                    <tr>
                        <td>i18</td>
                        <td>f+4,1</td>
                        <td>20</td>
                        <td>Juggle</td>
                        <td>Mid, long range</td>
                    </tr>
                    <tr>
                        <td>i18 (rage)</td>
                        <td>RD</td>
                        <td>30</td>
                        <td>Launch</td>
                        <td>Mid, long range</td>
                    </tr>
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
                    <tr>
                        <td>i10</td>
                        <td>FC1</td>
                        <td>5</td>
                        <td>+6</td>
                        <td>Generic</td>
                    </tr>
                    <tr>
                        <td>i11</td>
                        <td>WS+4</td>
                        <td>16</td>
                        <td>+5</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>i12</td>
                        <td>WS+3</td>
                        <td>18</td>
                        <td>+4</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>i30 (Dragon tail)</td>
                        <td>cc, d/f+3</td>
                        <td>27</td>
                        <td>Launch</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

function Combos() {


    // TODO: Have this combo section be generated from data in a JSON file
    return (
        <section className="character-info combos">
            <h2>Combos</h2>

            <ComboSection data={BryanCombos}/>

            <article>

                <h3><a target="_blank" rel="noreferrer" href="https://gfycat.com/IncompatibleSlimyDuiker.gif">Jet Upper Combos (f,b+2)</a></h3>
                <p className='combo-notation combo'>
                    <span className='tn tn-f'>f,</span>
                    <span className='tn tn-b'>b+</span>
                    <span className='tn tn-2'>2</span>
                    <span className="tn tn-next"></span>
                    <span className='tn tn-f'>f+</span>
                    <span className='tn tn-12'>1+2</span>
                    <span className='tn tn-next'></span>
                    <span className="tn tn-1">1</span>
                    <span className='tn tn-next'></span>
                    <span className="tn tn-b">b+</span>
                    <span className="tn tn-2">2</span>
                    <span className="tn tn-1">1</span>
                    <span className="tn tn-4">4</span>
                    <span className='tn tn-next'></span>
                    S!<span className='tn tn-next'></span>
                    <span className="tn tn-b">b+</span>
                    <span className="tn tn-3">3~</span>
                    <span className="tn tn-f">f+</span>
                    <span className="tn tn-2">2</span>
                    <span className="tn tn-1">1</span>
                    <span className='tn tn-next'></span>
                    <span className="tn tn-b">b+</span>
                    <span className="tn tn-3">3~</span>
                    <span className="tn tn-f">f+</span>
                    <span className="tn tn-2">2</span>
                    <span className="tn tn-1">1</span>
                    <span className='tn tn-next'></span>
                    <span className="tn tn-b">B+</span>
                    <span className="tn tn-3">3~</span>
                    <span className="tn tn-f">f+</span>
                    <span className="tn tn-2">2</span>
                    <span className="tn tn-1">1</span>
                    <a target="_blank" rel="noreferrer" href="https://gfycat.com/IncompatibleSlimyDuiker.gif">Video</a>
                </p>
            </article>


        </section>
    )
}

function Notes() {
    return (
        <section className="character-info notes">
            <h2>Other Notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam aspernatur exercitationem cum accusantium enim reprehenderit praesentium aliquam? Recusandae explicabo et debitis sunt veniam iste quis similique perspiciatis aliquid reprehenderit placeat minus, vel autem vitae quo amet deserunt eaque deleniti. Incidunt architecto sapiente praesentium doloremque facilis velit. Voluptas perferendis natus repudiandae distinctio laboriosam ab dolorem totam enim hic perspiciatis ipsum ipsa, amet saepe molestias porro nam doloribus architecto quasi blanditiis quo? Expedita sunt libero animi repudiandae, atque asperiores consequuntur fuga magni voluptates odio tempora dolorem rem nemo laborum nam soluta aut numquam at nisi sapiente! Vero tenetur dolores voluptatum eveniet!</p>
        </section>
    )
}

export default Bryan;