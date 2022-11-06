import { Container } from '@mui/material';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Advance from './components/advance';
import Home from './components/Home';
import Hooks from './components/Hooks';
import Navbar from './components/NavBar';

export class RouteApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Container maxWidth='xl'>
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route path='/home' element={ <Home />}/>
                <Route path='/hooks' element={ <Hooks />}/>
                <Route path='/advance' element={ <Advance />} />
            </Routes>
        </Container>
      </BrowserRouter>
    )
  }
}

export default RouteApp