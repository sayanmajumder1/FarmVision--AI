import "./css/PlantIdentification.css";
import "./css/Header.css";
import "./css/Services.css";
import "./css/About.css";
import "./css/App.css";
import "./css/Testimonials.css";
import "./css/Contact.css";
import "./css/RegisterLogin.css";
import "./css/AdminPage.css";
import "./css/Review.css";
import "./css/SplashScreen.css";
import "./css/WeatherDashboard.css";
import "./css/Review.css";
import "./css/SplashScreen.css";
import "./css/AboutUs.css";
import "./css/Footer.css";
import "./css/AdminTwo.css";
import "./css/DiseaseIdentification.css";
import Header from "./Header.js";
import Services from "./Services.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import RegisterLogin from "./RegisterLogin.js";
import AdminPage from "./AdminPage.js";
import GardenMaking from "./GardenMaking.js";
import PlantIndentiFication from "./PlantIdentiFication.js";
import DiseaseIdentification from "./DiseaseIdentification.js";
import PlantingUpgrade from "./PalntingUpgrade.js";
import GardenMaintainence from "./GardenMaintainence.js";
import BonsaiCare from "./BonsaiCare.js";
import PlantCutting from "./PlantCutting.js";
import WeatherInformation from "./WeatherInformation.js";
import PalntWater from "./PlantWater.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen.js";
import Revew from "./Revew.js";
import Profile from "./Profile.js";
import AboutUs from "./AboutUs.js";
import AdminTwo from "./AdminTwo.js";
import TestMessage from "./TestMessage.js";
function App() {
  const [loading, setLoading] = useState(
    !sessionStorage.getItem("splashShown")
  );
  useEffect(() => {
    if (loading) {
      // Set a timer for the splash screen duration
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("splashShown", "true"); // Set flag in localStorage
      }, 4000); // Adjust time as needed
      // Clean up timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Services />
                <About />
                <Testimonials />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services/garden-making" element={<GardenMaking />} />
          <Route
            path="/services/plant-identification"
            element={<PlantIndentiFication />}
          />
          <Route
            path="/services/plant-disease-identification"
            element={<DiseaseIdentification />}
          />
          <Route
            path="/services/planting-upgrade"
            element={<PlantingUpgrade />}
          />
          <Route path="/services/bonsai-care" element={<BonsaiCare />} />
          <Route
            path="/services/garden-maintenance"
            element={<GardenMaintainence />}
          />
          <Route path="/services/plant-water" element={<PalntWater />} />
          <Route path="/services/plant-cutting" element={<PlantCutting />} />
          <Route
            path="/services/weather-information"
            element={<WeatherInformation />}
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-page" element={<Contact />} />
          <Route path="/register-login-page" element={<RegisterLogin />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/revew-Page" element={<Revew />} />
          <Route path="/profile-detail" element={<Profile />} />
          <Route path="/admin-dashboard" element={<AdminTwo />} />
          <Route path="/test-message" element={<TestMessage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
};

export default App;
