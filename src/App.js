import { Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ToastContainer} from 'react-toastify';
import {useState} from 'react'

import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [user, setUser] = useState({})

  return (
    <div >


      <Routes>
        <Route path="/" element={<Login  user={user}  setUser={setUser} />}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Home" element={<Home user={user}  setUser={setUser}/>}/>
      </Routes>

      <ToastContainer/>
    </div>
  );
}

export default App;
