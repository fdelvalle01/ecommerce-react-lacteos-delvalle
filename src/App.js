import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Rutas from './routes/Rutas'

function App() {

  const text = 'itemListContainer';

  return (
    <div className="App"> 
    {/* Componennte navbar, menu para la web */}
      {/* <Navbar /> */}

    {/* Componennte body, donde iran la lista de items a futuro. los card ?? */}

      {/* <ItemListContainer tituloItemList={text}/> */}

      <Rutas>

      </Rutas>

    </div>
  );
}

export default App;
