import { Route, Router, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
           <Route path='/' exact />
        </Switch>
    </>
  );
}

export default App;
