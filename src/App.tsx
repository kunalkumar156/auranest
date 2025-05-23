import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ExampleSection from "./components/ExampleSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import GeneratePage from "./pages/generate/GeneratePage";

function App() {
  useEffect(() => {
    document.title = "auraNest – The Expert AI Builder from AuraUI";

    // Smooth scrolling for anchor links - this should primarily affect the homepage
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const href = anchor.getAttribute("href");
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        {/* Route for the homepage, including Header and Footer */}
        <Route
          path="/"
          element={
            <>
              <Header /> {/* Header specific to the homepage */}
              <main>
                <HeroSection />
                <FeatureSection />
                <ExampleSection />
                <FaqSection />
                <CtaSection />
              </main>
              <Footer /> {/* Footer specific to the homepage */}
            </>
          }
        />
        <Route path="/generate" element={<GeneratePage />} />
      </Routes>
    </div>
  );
}

export default App;
