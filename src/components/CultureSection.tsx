import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import cultureImage from '../assets/images/culture-image.jpg';

const SectionContainer = styled.section`
  width: 100%;
  padding: 240px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media (max-width: 1024px) {
    padding: 180px 40px;
  }

  @media (max-width: 768px) {
    padding: 120px 20px;
    gap: 20px;
  }
`;

const CultureInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const CultureTitle = styled(motion.h2)`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CultureDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CultureDetail = styled(motion.h3)`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CultureImageContainer = styled(motion.div)`
  width: 280px;
  height: 94px;
  border-radius: 100px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 160px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 40px;
  }
`;

const CultureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CultureSubtitle = styled(motion.h3)`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-primary);

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CultureDescription = styled(motion.p)`
  max-width: 1000px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-primary);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CultureSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <SectionContainer
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <CultureInfoContainer>
        <CultureTitle variants={itemVariants}>새로운 문화 나눔을 만들어갑니다.</CultureTitle>
        <CultureDetailsContainer>
          <CultureDetail variants={itemVariants}>우리는</CultureDetail>
          <CultureImageContainer variants={itemVariants}>
            <CultureImage src={cultureImage} alt="사색의향기 문화" />
          </CultureImageContainer>
        </CultureDetailsContainer>
        <CultureSubtitle variants={itemVariants}>사색의향기입니다.</CultureSubtitle>
      </CultureInfoContainer>
      <CultureDescription variants={itemVariants}>
        사색의향기는 문학인들의 커뮤니티로서 "행복한 문화 나눔"을 통한 사회 공헌과 선진적이고
        건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.
      </CultureDescription>
    </SectionContainer>
  );
};

export default CultureSection; 