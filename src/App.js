import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Navbar from './Portofolio/Navbar';
import Home from './Portofolio/Home';
import About from './Portofolio/About';
import Education from './Portofolio/Education';
import Projects from './Portofolio/Projects';
import Skills from './Portofolio/Skills';
import NotFound from './Portofolio/Navbar'; 

import ThemeContext from './Context/ThemeContext';

import './App.css';

class App extends Component {
  state = {
    isDarkTheme: false,
  }


  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }  


  render(){
    const {isDarkTheme} = this.state

  return(
    <div>
      <ThemeContext.Provider
            value={{
              isDarkTheme,
              toggleTheme: this.toggleTheme,
            }}
          >
          <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Navbar/>} />
          <Route exact path="/" element={<Home />} />     
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    </div>
  ) 
}   
}
export default App;

/*

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './Cuvete/Rejester';
import Login from './Cuvete/Login';
import JobForm from './Cuvete/JobForm';
import EmailForm from './Cuvete/EmailForm';

const App = () => {
    return (
        <Router>
            <div>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/job-post" component={JobForm} />
                <Route path="/send-email" component={EmailForm} />
            </div>
        </Router>
    );
};

export default App;
import Efffect from './Component/Hookss/Efffect'
const App=()=>{
  return(
    <Efffect/>
  )
}
export default App
/*
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Authenticate/Sidebar'
import MovieSearch from './Authenticate/MovieSearch'
import MovieDetail from './Authenticate/MovieDetail'
import Watchlist from './Authenticate/Watchlist'
import './App.css';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some(item => item.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (imdbID) => {
    setWatchlist(watchlist.filter(movie => movie.imdbID !== imdbID));
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MovieSearch addToWatchlist={addToWatchlist} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/lists" element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
*/