import { Component } from 'react';
import '../../stylesheets/HomePage.css';

class HomePage extends Component {
    render(){
        return (
            <section className='home-page'>
                <h1>Welcome to Tekken Hub!</h1>

                <p>
                    This is currently a work in progress site which is quite early in 
                    development. It is constantly being worked on and the full project can be found 
                    on <a href='https://github.com/FrostemanNeogard/tekkenhub' target='_blank' rel='noreferrer'>GitHub</a>.
                </p>

                <p>
                    <span style={{fontWeight: "bold"}}>To get started</span>, open up the Character List by pressing it and then pick a character to view.
                </p>

            </section>

        )
    }
}

export default HomePage;