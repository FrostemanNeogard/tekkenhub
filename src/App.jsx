import './stylesheets/App.css';
import CharacterSidebar from './jsx/components/CharacterSidebar';
import TopBar from './jsx/components/TopBar';
import RightSideContent from './jsx/components/RightSideContent';
import { Component } from 'react';

class App extends Component {

	// Set the default loaded page
	state = { charName: 'Bryan' };

	// Function for changing the laoded page that gets run in the character panels as well
	// as the home button
	changeState = (name) => {
		this.setState({ charName: name})
	}

  	render() {
  		return (
  			<div className="App"> 
				<nav>
					<TopBar func={this.changeState}/>
					<CharacterSidebar func={this.changeState}/>
				</nav>

				<div id="content">
					<RightSideContent name={this.state.charName}/>
				</div>
  	    	</div>
  	  	);
  	}
}

export default App;
