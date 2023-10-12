import React from 'react'
import NavBar from './components/NavBar'
import State from './components/State'
import Footer from './components/Footer'

import './App.css';
const App = () => {
  return (
    <html>
      <head></head>
      <body>
        <header><NavBar/></header>
        <section><State/></section>
        <footer><Footer/></footer>
      </body>
    </html>
  )
}

export default App