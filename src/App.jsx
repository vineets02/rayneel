// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import OurStory from './pages/about/OurStory';
import NeedForChange from './pages/about/NeedForChange';
import Challenges from './pages/about/Challenges';
import SupportingData from './pages/about/SupportingData';
import OurPromise from './pages/about/OurPromise';
import VisionMission from './pages/about/VisionMission';
import OurTeam from './pages/about/OurTeam';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* About sub-routes */}
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/need-for-change" element={<NeedForChange />} />
        <Route path="/about/challenges" element={<Challenges />} />
        <Route path="/about/supporting-data" element={<SupportingData />} />
        <Route path="/about/our-promise" element={<OurPromise />} />
        <Route path='/about/our-team' element={<OurTeam/>}/>
        <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
