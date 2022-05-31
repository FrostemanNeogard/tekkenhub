import React, { Component } from 'react';
import BryanFrames from '../../data/frames/bryan.json';
import Framedata from '../components/Framedata';
import CharacterTopbar from '../components/CharacterTopBar';

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
                    <Framedata frames={BryanFrames}/>
                </section>
            )
        }

        // Display character guide if displayFrames is set to false
        return (
            <section className='character-guide'>
                <CharacterTopbar func={this.changeState} displayingFrames={this.state.displayFrames} characterName={characterName}/>
                <Overview />
                <Playstyle />
                <Punishment />
                <Combos />
                <Counterplay />
            </section>
        )   
    }
}

function Overview() {
    return (
        <article className="character-info overview">
            <h2>Overview</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates odit at, aperiam cumque dignissimos in vitae officiis assumenda. Doloremque laborum suscipit quaerat, nisi quibusdam quia quae ullam aperiam quas sunt! Quos assumenda autem asperiores dignissimos laudantium. Id, laboriosam obcaecati quidem sunt deserunt temporibus? Reprehenderit vero est a ratione veritatis magni sit suscipit eaque eius repellendus numquam voluptas pariatur, temporibus iste earum nulla rem nam voluptatibus dignissimos beatae, aut dicta placeat. Minus quibusdam optio iusto nemo necessitatibus. Facere eos beatae adipisci natus sequi, unde odit similique! Nisi doloribus tempore laudantium? Expedita, consequatur soluta non delectus voluptate beatae quae esse ullam.</p>
        </article>
    )
}

function Playstyle() {
    return (
        <section className="character-info playstyle">
            <h2>Playstyle</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat consequatur adipisci, sit odit aspernatur ipsam dolores cum laudantium alias enim, est laboriosam doloribus corrupti labore praesentium impedit ipsum nobis natus ex distinctio et dignissimos temporibus! Quas animi, odio iste error nostrum exercitationem repellendus sapiente numquam nesciunt consectetur aperiam saepe excepturi distinctio? Fuga quisquam, ex neque ullam reiciendis corrupti doloribus asperiores, reprehenderit sapiente assumenda ducimus ratione quae laboriosam perferendis mollitia inventore odit adipisci illo culpa itaque, odio totam molestiae. Blanditiis est dolore ipsam! Animi laudantium delectus magni recusandae iusto amet. Odio odit eveniet dolores! Numquam similique deleniti fugiat error iste unde qui sit animi illum nisi corrupti nemo provident corporis fugit in voluptas, nihil id sequi maiores voluptates fuga aut hic veritatis. Repellat nisi fugiat nesciunt atque inventore dolorum a modi veniam sunt est, itaque cum, quae minima fugit voluptate ipsam nulla tempora ullam cumque eum tenetur? Temporibus commodi ipsa corporis?</p>
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
    return (
        <section className="character-info combos">
            <h2>Combos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusantium beatae, neque qui omnis nisi officia provident facilis doloremque, iure sapiente. Assumenda, in! Cum aut cupiditate sed beatae, ipsam quia illum dolorum repudiandae vitae similique? Aperiam quos praesentium laboriosam delectus nostrum ipsum quasi blanditiis sed, expedita omnis aut est unde?</p>
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

export default Bryan;