import { Route, Router, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
           <Route path='/' exact component={Home}/>
        </Switch>
    </>
  );
}

export default App;
