import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Homepage2 from './Components/Homepage2';
// import QrCode from './Components/Qr-code';
import Footer from './Components/Footer';
import AboutUs from './Components/About-us';
import Contactus from './Components/Contact_us';
import Mosquito from './Services/Mosquito';
import Bedbug from './Services/Bedbug';
import Woodwork from './Services/Woodwork';
import Allservices from './Services/Allservices';
import Emailss from './Emails/Email';
import Termite from './Services/Termite';
// import Practicemail from './Practicemeail';
import CockroachControl from './HomepageLearnmore/Cockroachcontrol';
import TermiteControlPage from './HomepageLearnmore/TermiteHomepage';
import MosquitoControlPage from './HomepageLearnmore/MosquitoHomepage';
// import TermiteTreat from './HomepageLearnmore/TermiteControlPage';
import Termiteblog from './Blog/Termiteblog';
import Cockroachblog from './Blog/Cockroachblog';
import MosquitoBlog from './Blog/Mosquitoblog';
import Rat from './Services/Rat';
import Birds from './Services/Birds';
import Offer from './Components/Offer/Offerpage';
import Offervisual from './Components/Offer/Offervisual';
import Blogfullpage from './Blog/Blogfullpage';
import FeedbackPage from './Feedback';
function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Homepage /><Homepage2 /><Footer /></>} />
        {/* <Route path="/about_us" element={<QrCode />} /> */}
        <Route path="/services" element={<Homepage />} />
        <Route path="/services/pest-control" element={<Homepage />} />
        <Route path="/services/bird-netting" element={<Homepage />} />
        <Route path="/services/pest-control-services" element={<Homepage />} />
        <Route path="/services/cockroach-control" element={<CockroachControl />} />
        <Route path="/services/termite-control" element={<TermiteControlPage />} />
        <Route path="/services/bedbug-control" element={<Homepage />} />
        <Route path="/services/mosquito-control" element={<MosquitoControlPage />} />
        <Route path="/services/wood-borer" element={<Homepage />} />
        <Route path="/services/rodent-control" element={<Homepage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/offer/visual" element={<Offervisual/>} />
        {/* <Route path="/about_us" element={<AboutUs />} /> */}
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/Services/Mosquito" element={<Mosquito />} />
        <Route path="/Services/Bedbug" element={<Bedbug />} />
        <Route path="/Services/Woodwork" element={<Woodwork />} />
         <Route path="/Services/termite" element={<Termite />} />
          <Route path="/Services/Rat" element={<Rat />} />
           <Route path="/Services/Birds" element={<Birds />} />
         <Route path="/Allservices" element={<Allservices />} />
        <Route path="/Email" element={<Emailss />} />
         <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />

                           {/* BLOG */}
        <Route path="/blog/termite-signs" element={<Termiteblog />} />
         <Route path="/blog/cockroach-prevention" element={<Cockroachblog />} />
          <Route path="/blog/mosquito-fogging" element={<MosquitoBlog />} />
          <Route path="/blog" element={<Blogfullpage />} />
      </Routes>
    </Router>
  );
}

export default Routess;
