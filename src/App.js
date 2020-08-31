import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';



import Navigation from './components/Navigation'
import Contacto from './components/Contacto'
import Footer from'./components/Footer' 


function App() { 
 return(

  <Router>
      <Navigation />
       <div className="container-body">
            <Route path="/contacto" component={Contacto}/>
          
            <Footer/>  
       </div>
      
  </Router>
 );
}

export default App;
