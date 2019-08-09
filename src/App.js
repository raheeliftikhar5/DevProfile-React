import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './views/Landing';
import Register from './views/Register';
import Login from './views/Login';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}></Route>
          <div className="container">
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
