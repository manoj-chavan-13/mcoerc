// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

/* About nested pages */
import AboutOverview from "./pages/AboutOverview";
import AboutVision from "./pages/AboutVision";
import AboutGovernance from "./pages/AboutGovernance";
import AboutPolicies from "./pages/AboutPolicies";
import AboutCampus from "./pages/AboutCampus";

/* --- DEPARTMENT PAGES IMPORTS --- */
/* Note: Create these files or point them to a generic template */
import AcademicsCompEng from "./pages/AcademicsComp-eng";
import DeptIT from "./pages/AcademicsIt";
import DeptEntc from "./pages/AcademicsEntc";
import DeptEngSci from "./pages/AcademicsEng-sci";
import DeptMech from "./pages/AcademicsMech";
import DeptCivil from "./pages/AcademicsCivil";
import DeptElectrical from "./pages/AcademicsElectrical";
import CentralLibrary from "./pages/AcademicsLibrary";
import DeptAIDS from "./pages/AcademicsAids";
import DeptMCA from "./pages/AcademicsMca";
import DeptElecComp from "./pages/AcademicsElec-comp";

import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import TrainingPlacement from "./pages/TrainingPlacement";
import Alumni from "./pages/Alumni";
import AboutFacilities from "./pages/AboutFacilities";
import GalleryPage from "./pages/Gallery";

export default function App() {
  return (
    <div className="app-root min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/t&p" element={<TrainingPlacement />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/gallery" element={<GalleryPage />} />
          {/* About Section Routes */}
          <Route path="/about/overview" element={<AboutOverview />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/governance" element={<AboutGovernance />} />
          <Route path="/about/policies" element={<AboutPolicies />} />
          <Route path="/about/campus" element={<AboutCampus />} />
          <Route path="/about/facilities" element={<AboutFacilities />} />
          {/* --- ACADEMIC DEPARTMENT ROUTES (ADDED) --- */}
          {/* Computer & IT */}
          <Route path="/academics/comp-eng" element={<AcademicsCompEng />} />
          <Route path="/academics/it" element={<DeptIT />} />
          <Route path="/academics/entc" element={<DeptEntc />} />
          <Route path="/academics/eng-sci" element={<DeptEngSci />} />
          {/* Core Engineering */}
          <Route path="/academics/mech" element={<DeptMech />} />
          <Route path="/academics/civil" element={<DeptCivil />} />
          <Route path="/academics/electrical" element={<DeptElectrical />} />
          <Route path="/academics/library" element={<CentralLibrary />} />
          {/* Advanced Studies */}
          <Route path="/academics/aids" element={<DeptAIDS />} />
          <Route path="/academics/mca" element={<DeptMCA />} />
          <Route path="/academics/elec-comp" element={<DeptElecComp />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
