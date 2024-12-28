import{BrowserRouter , Route , Routes} from 'react-router-dom'
import Navbar from './Componets/Navbar/Navbar';
import SingIn from './Componets/SingIn/SingIn';
import SingUp from './Componets/SingUp/SingUp';
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/SingUp" element={<SingUp />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;