import './stylesheets/App.css';
import CharacterSidebar from './jsx/components/CharacterSidebar';
import TopBar from './jsx/components/TopBar';
import RightSideContent from './jsx/components/RightSideContent';
import { Component } from 'react';

class App extends Component {

	state = { charName: '' };

	changeState = (name) => {
		this.setState({ data: name})
	}

  	render() {
  		return (
  			<div className="App">
		  
  	      		<TopBar />
  	      		<CharacterSidebar func={this.changeState}/>
  	      		<RightSideContent name={this.state.data}/>
		
  	    	</div>
  	  	);
  	}
}

export default App;
