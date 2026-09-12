import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Domains = lazy(() => import("./components/DomainsPrize"));
const Judges = lazy(() => import("./components/Judges"));
const PrizePool = lazy(() => import("./components/PrizePool"));
const GoodiesMerch = lazy(() => import("./components/GoodiesMerch"));
const MerchPage = lazy(() => import("./components/MerchPage"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const Faq = lazy(() => import("./components/Faq"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <AboutUs />
                <Domains />
                <Judges />
                <PrizePool />
                <GoodiesMerch />
                <Sponsors />
                <Faq />
                <Footer />
              </>
            }
          />
          <Route path="/merch" element={<MerchPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
