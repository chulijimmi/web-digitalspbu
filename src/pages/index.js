import React from "react"
import SEO from "../components/seo"
import LineColorfull from "../components/layout/LineColorfull"
import LandingBackground from "../components/layout/LandingBackground"
import MainMenu from "../components/layout/MainMenu"
import LandingBanner from "../components/landing-page/LanddingBanner"
import LandingFeatures from "../components/landing-page/LandingFeatures"
import ClientTestimonials from "../components/landing-page/CientTestimonials"
import Footer from "../components/layout/Footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <LandingBackground>
      <LineColorfull />
      <MainMenu />
      <LandingBanner />
      <LandingFeatures />
    </LandingBackground>
    <ClientTestimonials />
    <Footer />
  </>
)

export default IndexPage
