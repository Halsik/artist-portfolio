import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/ContactPage/Contact';
import Portfolio from './components/PortfolioPage/Portfolio';
import About from './components/AboutPage/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  const [theme, seteTheme] = useState(false) 
  console.log(theme)

  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<HomePage 
                                  theme={theme}/>} /> 
         <Route path='/about' element={<About />} /> 
         <Route path='/Portfolio' element={<Portfolio />} /> 
         <Route path='/Contact' element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
