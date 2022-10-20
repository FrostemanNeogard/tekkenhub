import { Component } from 'react';
import '../../stylesheets/HomePage.css';

class HomePage extends Component {
    render(){
        return (
            <section className='home-page'>
                <h1>Welcome to Tekken Hub!</h1>

                <p>
                    This is meant to be used as a learning resource for the Tekken games. However, 
                    if you're seeing this as of now 
                    then it's most likely because you're looking to hire me as a web developer.
                </p>

                <p>
                    This is currently a work in progress site which is quite early in 
                    development. It is constantly being worked on and the full project can be found 
                    on <a href='https://github.com/FrostemanNeogard/tekkenhub' target='_blank' rel='noreferrer'>GitHub</a>.
                </p>

            </section>

        )
    }
}

export default HomePage;