import './stylesheets/App.css';
import CharacterSidebar from './jsx/components/CharacterSidebar';
import TopBar from './jsx/components/TopBar';
import RightSideContent from './jsx/components/RightSideContent';

function App() {
  return (
    <div className="App">

      <TopBar />
      <CharacterSidebar />
      <RightSideContent />

    </div>
  );
}

export default App;
