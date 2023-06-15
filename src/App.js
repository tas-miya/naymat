import React, { useState } from 'react';
import Home from './components/Home/Index';
import Footer from './components/Footer/Index';
import { GlobalStyle } from './globalStyle';
import Navbar from './components/Navbar/Index';
import Sidebar from './components/Sidebar/Index';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './components/About/Index';
import ContactUs from './components/ContactUs/Index';
import WeeklyMenu from './components/WeeklyMenu/Index';
import FrozenFood from './components/WeeklyMenu/Index';

function App() {

  const[isOpen, setisOpen] = useState(false);

  const toggle = () => {
      setisOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
      <Route component={ContactUs} path='/contactus' />
      <Route component={WeeklyMenu} path='/weeklymenu' />
      <Route component={FrozenFood} path='/frozenfood' />
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
