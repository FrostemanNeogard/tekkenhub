import { Component } from 'react';
import '../../stylesheets/HomePage.css';

class HomePage extends Component {
    render(){
        return (
            <section className='home-page'>
                <img className='tekken7-banner' src="http://static1.1.sqspcdn.com/static/f/721581/26174813/1430119853417/img_popbanner.jpg?token=Nxaq4dIsO%2F0bD77efv5%2By2Ungzk%3D" alt="Tekken 7 Banner" />
                <h1>Welcome to WEBSITE NAME!</h1>

                <p>
                    This is meant to be used as a hub for learning 
                </p>

                <p>
                    This is currently a work in progress site developed 
                    by <a href='https://twitter.com/funnyorangcat' target='_blank' rel='noreferrer'>Garfield</a>. 
                    It is constantly being worked on and the full project can be found 
                    on <a href='https://github.com/FrostemanNeogard/tekkenwebsitev2' target='_blank' rel='noreferrer'>GitHub</a>.
                </p>

                <p>
                    The frame data on this site has been taken 
                    from <a href="https://geppopotamus.info/game/tekken7fr/index_en.htm" target="_blank" rel="noreferrer">Geppopotamus</a> and
                     all credit goes to them.
                </p>
            </section>

        )
    }
}

export default HomePage;