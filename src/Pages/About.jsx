import React from 'react'

import AboutBanner from "../Components/AboutBanner"
import DigitalSuccess from '../Components/DigitalSuccess';
import OurFacts from '../Components/OurFacts';
import PremiumServices from '../Components/PremiumServices';
import Testimonial from '../Components/Testimonial';
import Form from "../Components/Form";

function About() {
  return (
    <>
      <AboutBanner />
      <DigitalSuccess />
      <OurFacts />
      <PremiumServices />
      <Testimonial />
      <Form />
    </>

  );
}

export default About