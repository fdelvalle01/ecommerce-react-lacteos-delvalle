import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const text = 'itemListContainer';

  return (
    <div className="App"> 
    {/* Componennte navbar, menu para la web */}
      <Navbar />

    {/* Componennte body, donde iran la lista de items a futuro. los card ?? */}
      <ItemListContainer tituloItemList={text}/>
    </div>
  );
}

export default App;
