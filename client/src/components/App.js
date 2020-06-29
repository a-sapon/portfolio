import React, { useState, createContext, useEffect } from 'react';
import { Home } from './Home/Home';
import Navbar from './Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';
import { Works } from './Works/Works';
import { About } from './About/About';

export const ScreenContext = createContext();

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    };
    checkScreenWidth();
  }, []);

  return (
    <ScreenContext.Provider value={isMobile}>
      <Navbar />

      <div className='content-wrapper'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/works' component={Works} />
        </Switch>
      </div>

      <Footer />
    </ScreenContext.Provider>
  );
};
