import React from "react";

import Hero from "../Components/Hero"
import ServiceTabs from "../Components/ServiceTabs"
import CTASection from "../Components/CTASection";
import PortfolioHome from "../Components/PortfolioHome";
import Packages from "../Components/Packages";
import RecognitionCTA from "../Components/RecognitionCTA";
import TestimonialsHeading from "../Components/TestimonialsHeading";
import Testimonial from "../Components/Testimonial";
import Form from "../Components/Form";

function Home() {
  return (
    <>
    <Hero />
    <ServiceTabs />
    <CTASection />
    <PortfolioHome />
    <Packages />
    <RecognitionCTA />
    <TestimonialsHeading />
    <Testimonial />
    <Form />
    </>
    
  );
}

export default Home