import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Judges = lazy(() => import("./components/Judges"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const Faq = lazy(() => import("./components/Faq"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
        <AboutUs />
        <Judges />
        <Sponsors />
        <Faq />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
