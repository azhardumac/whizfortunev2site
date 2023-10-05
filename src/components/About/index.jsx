import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import TestimonialFour from '../Home-four/TestimonialFour';
import AboutArea from './AboutArea';
import AboutCounter from './AboutCounter';
import CtaImages from './CtaImages';
import NeroxAwards from './NeroxAwards';
import AboutMeTabs from '../AboutMe/AboutMeTabs';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="About Whizfortune" subtitle=" About Us" />
      <AboutArea/>
      {/* <AboutCounter/> */}
      <AboutMeTabs/>
      <CtaImages/>
      <BrandArea brand="-2" about="about-brand" />
      <TestimonialFour/>
      <NeroxAwards/>
      <FooterTwo/>
    </>
  );
};

export default index;