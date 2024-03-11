import { Route, Router, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/products' component={Products}/>
           <Route path='/services' component={Services}/>
           <Route path='/sign-up' component={SignUp}/>
        </Switch>
    </>
  );
}

export default App;
