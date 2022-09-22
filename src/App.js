
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as  Router,Switch ,Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import ContactUs from './components/Pages/ContactUs';

function App() {
  return (
    <>
    
     <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
   
            <Route path="/services">
              <Services />
            </Route>

            <Route path="/products">
              <Products />
            </Route>

            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
        </div>
    </Router>
    
    </>
  );
}

export default App;


