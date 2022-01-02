import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import Barra from './componentes/Barra';
import RegistrarPropietario from './componentes/RegistrarPropietario';
import VerPropietario from './componentes/VerPropietario';
import RegistrarMascota from './componentes/RegistrarMascota';
import VerMascotas from './componentes/VerMascotas';


function App() {
  return (
 
    <Router>

      <Barra />

      <Route path="/registrarpropietario" exact component={RegistrarPropietario} />      
      <Route path="/verpropietario" exact component={VerPropietario} />
      <Route path="/registrarmascota" exact component={RegistrarMascota} />
      <Route path="/vermascotas" exact component={VerMascotas} />

    </Router>

  );
}

export default App;
