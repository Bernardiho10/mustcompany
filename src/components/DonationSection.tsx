import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeartIcon } from './IconComponents';

const SectionContainer = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 40px;
  }
`;

const DonationInfoContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const DonationTitle = styled.h2`
  font-family: 'Gowun Batang', serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DonationAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const DonationAccountLabel = styled.h3`
  font-family: 'Gowun Batang', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);
  text-align: center;
`;

const DonationAccountDetails = styled.p`
  font-family: 'Gowun Batang', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);
  text-align: center;
`;

const ButtonsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StyledHeartIcon = styled(HeartIcon)`
  margin-right: 6px;
`;

const DonationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 9999px;
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-bg);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const DonationSection: React.FC = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <DonationInfoContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <DonationTitle>기부를 통해 따뜻한 마음을 보내고 싶다면,</DonationTitle>
          <DonationAccountContainer>
            <DonationAccountLabel>후원계좌 안내</DonationAccountLabel>
            <DonationAccountDetails>국민 924501-01-351204 / 사단법인 사색의향기</DonationAccountDetails>
          </DonationAccountContainer>
        </DonationInfoContainer>

        <ButtonsContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <DonationButton>
            <StyledHeartIcon />
            정기 후원
          </DonationButton>
          <DonationButton>
            일시 후원
          </DonationButton>
        </ButtonsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default DonationSection; 