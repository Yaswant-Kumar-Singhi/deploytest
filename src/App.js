import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import Row from './Row'

function App() {
  return (
    <div className="App-header">
      <Header />
      <Navbar />
      <Row />
      <Footer />

    </div>
  );
}
export default App;
