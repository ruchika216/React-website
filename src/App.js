import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Gallery from './pages/Gallery';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './components/Cards/Card';
import Feature from './pages/Feature';
import Blog from './pages/Blog';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/feature' component={Feature} />
          <Route path='/blog' component={Blog} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );

}

export default App;
