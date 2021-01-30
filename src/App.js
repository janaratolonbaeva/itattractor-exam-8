import React from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import AddQuote from "./container/AddQuote/AddQuote";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/add-quote" exact component={AddQuote}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
