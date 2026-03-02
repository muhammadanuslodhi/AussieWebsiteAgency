import React from 'react'

import ServiceHero from "../Components/ServiceHero"
import VisionarySection from '../Components/BrandIdentity';
import AboutService from '../Components/AboutService';
import ServiceTypes from '../Components/ServiceTypes';
import ServiceImages from '../Components/ServiceImages';
import PackagesSlug from '../Components/PackagesSlug';
import RecognitionCTA from "../Components/RecognitionCTA";
import ComboPackage from '../Components/ComboPackage';
import Testimonial from '../Components/Testimonial';
import Form from "../Components/Form";

function ServiceSlug() {
  return (
    <>
      <ServiceHero />
      <VisionarySection />
      <AboutService />
      <ServiceTypes />
      <ServiceImages />
      <PackagesSlug />
      <RecognitionCTA />
      <ComboPackage />
      <Testimonial />
      <Form />
    </>

  );
}

export default ServiceSlug;