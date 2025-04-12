import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CultureSection from '../components/CultureSection';
import ChairmanSection from '../components/ChairmanSection';
import ActivitiesSection from '../components/ActivitiesSection';
import DonationSection from '../components/DonationSection';
import AppSection from '../components/AppSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <main>
        <HeroSection />
        <CultureSection />
        <ChairmanSection />
        <ActivitiesSection />
        <DonationSection />
        <AppSection />
        <PartnersSection />
      </main>
      <Footer />
    </PageContainer>
  );
};

export default HomePage; 