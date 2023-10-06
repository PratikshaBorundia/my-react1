import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import{link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
export default function myroute() {
  return (
    <>
    <BrowserRouter>
    <Route>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<contact/>} />
</Route>
</BrowserRouter>
</>
);
}

