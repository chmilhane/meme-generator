import './App.css';
import Navbar from './components/Navbar';
import { getMemes } from './Meme';

// getMemes().then(console.log);

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
