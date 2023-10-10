import React from 'react';
import BrandArea from '../common/BrandArea';
import Header from '../common/Header';
import AboutTwo from './AboutTwo';
import BlogTwo from './BlogTwo';
import CounterTwo from './CounterTwo';
import CtaTwo from './CtaTwo';
import FooterTwo from './HomeTwoFooter';
import HeroSlider from './HeroSlider';
import PortfolioTwo from './PortfolioTwo';
import ServicesTwo from './ServicesTwo';
import TeamTwo from './TeamTwo';
import TestimonialTwo from './TestimonialTwo';
import HeroSliderFour from './HeroSliderFour';
import TechnologyGrid from '../common/TechnologyGrid';
import technologyData from '../../data/technologyData';


const HomeTwoMain = () => {
  return (
    <>
      <Header HeaderTwo={true} />
      <HeroSliderFour/>
      <ServicesTwo/>
      <AboutTwo/>
      <TechnologyGrid technologyData={technologyData} />
      <CounterTwo/>
      <PortfolioTwo/>
      <TestimonialTwo/>
      <BrandArea hideTopBar={true} brand="-2" />
      <TeamTwo/>
      <CtaTwo/>
      <BlogTwo/>
      <FooterTwo/>
    </>
  );
};

export default HomeTwoMain;