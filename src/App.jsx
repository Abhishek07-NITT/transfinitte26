import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Timer = lazy(() => import("./components/Timer"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Domains = lazy(() => import("./components/DomainsPrize"));
const Timeline = lazy(() => import("./components/Timeline"));
const Judges = lazy(() => import("./components/Judges"));
const PrizePool = lazy(() => import("./components/PrizePool"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const Faq = lazy(() => import("./components/Faq"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
        <Timer />
        <AboutUs />
        <Domains />
        <Timeline />
        <Judges />
        <PrizePool />
        <Sponsors />
        <Faq />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
