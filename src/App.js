import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Persons from './components/Persons'

function App() {
  return (
    <Container className="container">
      <h2>Person App</h2>
      <Persons />
    </Container>


  );
}

export default App;