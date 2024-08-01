import './App.css'
import LoginPage from './Layouts/LoginPage/Index'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgot from './Layouts/Forgot/Index';
import Register from './Layouts/Register/Index';

function App() {
  
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/Forgot-Password' element={<Forgot/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
