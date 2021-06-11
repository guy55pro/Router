import React from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import { movies } from "./Data";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
      <div className="Nav">
      <Route exact path='/' render={() => <Header text="4anime.to" />} />
      <Route exact path='/' render={() => <Search />} />
      </div>
      <Route exact path='/' render={() => <p className="App-intro">Welcome To my WebSite</p>} />
      <Route exact path='/' render={() => <movies className="movies"/>} />
      </BrowserRouter>
    </div>
  );
};

export default App;