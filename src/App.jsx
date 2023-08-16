import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rutas } from './Rutas'
import Navbar1 from './components/navbar/Navbar'
import Footbar from './components/footbar/Footbar'


function App() {


  return (

    <div>
      <Navbar1 />
      <Rutas/>
      <Footbar/>
    </div>
  )
}

export default App
