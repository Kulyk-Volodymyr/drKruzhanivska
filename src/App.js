import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/main/Main';
import Doctors from './pages/doctors/Doctors';
import Prices from "./pages/prices/Prices";
import Services from './pages/services/Services';
import Gallery from './pages/gallery/Gallery';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
