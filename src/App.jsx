import "./App.css";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load components
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const JourneySection = lazy(() => import("./components/JourneySection"));
const FacilitySection = lazy(() => import("./components/FacilitySection"));
const Donate = lazy(() => import("./components/Donate"));
const AddressSection = lazy(() => import("./components/AddressSection"));
const WhatsAppChat = lazy(() => import("./components/WhatsAppChat"));
const LanguageModal = lazy(() => import("./components/LanguageModal"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LanguageModal />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <FacilitySection />
        <Donate />
        <AddressSection />
        <Footer />
        <WhatsAppChat />
      </Suspense>
    </>
  );
}

export default App;
