import './App.css';
import Rutas from './routes/Rutas'
import GlobalContext from './context/CartContext';


function App() {

  return (
    <div className='App'> 

    <GlobalContext>
        <Rutas />
    </GlobalContext>

    </div>
  );
}

export default App;
