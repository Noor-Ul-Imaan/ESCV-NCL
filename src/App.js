import React from 'react';
import Navbar from './components/Navbar';
import Hero   from './components/Hero';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import Products from './components/pages/Products';
import CapacityBuilding from './components/pages/CapacityBuilding';
import Collaborations from './components/pages/Collaborations';
import About from './components/pages/About';
import News from './components/pages/News';
import Masters from './components/pages/Masters';
import Phd from './components/pages/Phd';
import RAs from './components/pages/RAs';
import Interns from './components/pages/Interns';
import NewsPost from './components/pages/NewsPost.js';
import Fydp2022 from './components/pages/Fydp2022.js';

import Achievement from './components/pages/Achievement';
import Publications from './components/pages/Publications.js';
import Fydp2023 from './components/pages/Fydp2023.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import './App.css';
import './index.css';
const PlaceholderComponent = () => <div></div>;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/team'  Component={Team} />
          <Route path='/honors-and-achievements' Component={Achievement} />
          <Route path='/products' Component={Products} />
          <Route path='/publications' Component={Publications} />
          <Route path='/capacity-building' Component={CapacityBuilding} />
          <Route path='/collaborations' Component={Collaborations} />
          <Route path='/about-page' Component={About} />
          <Route path='/news' Component={News} />
          <Route path='/newsPost/:id' Component={NewsPost} />
         
          <Route path='/masters' Component={Masters} />
          <Route path='/phd' Component={Phd} />
          <Route path='/ras' Component={RAs} />
          <Route path='/interns' Component={Interns} />
          <Route path='/fydp-2022' Component={Fydp2022} />
          <Route path='/fydp-2023' Component={Fydp2023}/>
      

        </Routes>
      </Router>
    </>
  );
}

export default App;
