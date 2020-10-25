import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import Home from './pages/Home';


function App() {
  return (
      
    <div>
     <BrowserRouter>
      <Navbar/> 
      <div className='container'>
      <Route exact path={'/'} component={Home}/>
      <Route path={'/about'} component={About}/>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
