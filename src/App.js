import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Home from './components/home/Home';
import Backdrop from './common/Backdrop';
import Footer from './common/Footer';
import MobileNav from './common/MobileNav';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import ChangePassword from './components/authentication/ChangePassword';
function App() {
  const [sideNav, setSideNav] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Backdrop setSideNav={setSideNav} sideNav={sideNav}/>
        <Navbar setSideNav={setSideNav} sideNav={sideNav} />
        <MobileNav setSideNav={setSideNav} sideNav={sideNav} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/change-password' element={<ChangePassword/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
