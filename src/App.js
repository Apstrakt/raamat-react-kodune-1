import './App.css'
import lotr from './LOTR.jpg'
import Raamat from './Raamat';

function App() {
  return (
    <div className="container">
      <h1>Sõrmuste isand</h1>
      <Raamat />
      <img className="img-fluid esikaas" src={lotr} alt='lotr' />
    </div>
  );
}

export default App;
