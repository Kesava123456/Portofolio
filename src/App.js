import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Navbar from './Portofolio/Navbar';
import Home from './Portofolio/Home';
import About from './Portofolio/About';
import Education from './Portofolio/Education';
import Projects from './Portofolio/Projects';
import Skills from './Portofolio/Skills';
import NotFound from './Portofolio/Navbar'; 
import Experience from './Portofolio/Experience/Experience';

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
          <Route exact path="/Expirence" element={<Experience />} />
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