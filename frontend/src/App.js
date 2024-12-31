import{BrowserRouter , Route , Routes} from 'react-router-dom'
import Navbar from './Componets/Navbar/Navbar';
import SingIn from './Componets/SingIn/SingIn';
import SingUp from './Componets/SingUp/SingUp';
import './App.css'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './Componets/Home/Home';
import Profile from './Componets/Profile/Profile';
import Createpost from './Componets/Createpost/Createpost';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
           <Route path="/SingUp" element={<SingUp/>} />
          <Route path="/SingIn" element={<SingIn/>} />
          <Route path="/Createpost" element={<Createpost/>} />
        </Routes>
    <ToastContainer theme='dark'/>
    </BrowserRouter>
  );
}

export default App;