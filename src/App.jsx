import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Mainpg from './components/Mainpg';
import Navbar from './components/Navbar';
import HealthNgo from './components/HealthNgo';
import EnvironNgo from './components/EnvironNgo';
import EduNgo from './components/EduNgo';
import SocialNgo from './components/SocialNgo';
import Notification from './components/Notification';
import Login from "./components/Login";
import Home from './components/Home'
function App() {
      

  return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Mainpg' element={<Mainpg/>}></Route>
        <Route path='/HealthNgo' element={<HealthNgo/>}></Route>
        <Route path='/EnvironNgo' element={<EnvironNgo/>}></Route>
           <Route path='/EduNgo' element={<EduNgo/>}></Route>
           <Route path='/SocialNgo' element={<SocialNgo/>}></Route>
           <Route path='/Notification' element={<Notification/>}></Route>
          
        </Routes>
      </Router>

  )
}

export default App
