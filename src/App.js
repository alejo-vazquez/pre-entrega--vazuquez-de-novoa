import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './components/navbar';
import { Navbar, Nav, Container } from "react-bootstrap"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartWidget from './components/cartwidget';
import ItemListContainer from './components/itemlistcontainer';


function App() {
  return (
<div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='cartwidget' element={ <CartWidget   /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>
<>
<ItemListContainer persona="alejo"/>
</>
</div>
  );
}

export default App;
