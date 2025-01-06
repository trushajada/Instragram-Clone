import{BrowserRouter , Route , Routes} from 'react-router-dom'
import React ,{createContext , useState} from "react";
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import SingIn from './Componets/SingIn/SingIn';
import SingUp from './Componets/SingUp/SingUp';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './Componets/Home/Home';
import Profile from './Componets/Profile/Profile';
import Createpost from './Componets/Createpost/Createpost';
import { Logincontext } from './Context/Logincontext';
import Modal from './Componets/Modal';



function App() {
  const [userLogin ,setuserLogin] =useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <BrowserRouter>
    <Logincontext.Provider value={{setuserLogin ,setIsModalOpen}}>
    <Navbar login={userLogin}/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
           <Route path="/SingUp" element={<SingUp/>} />
          <Route path="/SingIn" element={<SingIn/>} />
          <Route path="/Createpost" element={<Createpost/>} />
        </Routes>
    <ToastContainer theme='dark'/>  
   
    {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/> } 
    </Logincontext.Provider>
    </BrowserRouter>
  );
}
export default App;

// 