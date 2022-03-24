import './stylesheets/App.css';
import CharacterSidebar from './jsx/components/CharacterSidebar';
import TopBar from './jsx/components/TopBar';
import RightSideContent from './jsx/components/RightSideContent';
import { Component } from 'react';

class App extends Component {
  	render() {
  		return (
  			<div className="App">
		  
  	      		<TopBar />
  	      		<CharacterSidebar />
  	      		<RightSideContent name=''/>
		
  	    	</div>
  	  	);
  	}
}

export default App;
