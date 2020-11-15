import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Slidemenu from './Aside/SlideMenu/SlideMenu'
import Content from './Content/Content'

import './App.css';

function App() {
  //Implementirati nakon ubacenog sadrzaja na applikaciju
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isClosedNav, setIsClosedNav] = useState(false)

  const closeNavHandler = () => {
    setIsClosedNav(!isClosedNav)
  }
  //Implementirati nakon ubacenog sadrzaja na applikaciju
  const login = useCallback(() => {
    console.log('Logged In')
  })
  //Implementirati nakon ubacenog sadrzaja na applikaciju
  const logout = useCallback(() => {
    console.log('Loged out')
  })


  return (
    <Router>
      <div className="App">
        <Slidemenu isClosedNav={isClosedNav} closeNavHandler={closeNavHandler} />
        <Content isClosedNav={isClosedNav} />
      </div>
    </Router>
  );
}

export default App;
