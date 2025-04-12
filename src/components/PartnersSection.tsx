import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from './IconComponents';
import partnerLogo1 from '../assets/images/partner-logo-1.jpg';
import partnerLogo2 from '../assets/images/partner-logo-2.jpg';
import partnerLogo3 from '../assets/images/partner-logo-3.jpg';
import partnerLogo4 from '../assets/images/partner-logo-4.jpg';

const SectionContainer = styled.section`
  width: 100%;
  background-color: var(--color-bg);
  padding: 0px 40px 240px;
  display: flex;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 80px;
    padding: 0 40px 180px;
  }

  @media (max-width: 768px) {
    padding: 0 20px 120px;
    gap: 60px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 60px;
  min-width: 300px;

  @media (max-width: 1024px) {
    min-width: unset;
    width: 100%;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Gowun Batang', serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const ArrowButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
`;

const ArrowButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-accent);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

const StyledArrowLeftIcon = styled(ArrowLeftIcon)``;

const StyledArrowRightIcon = styled(ArrowRightIcon)``;

const PartnersSlider = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  height: 400px;
  
  @media (max-width: 1024px) {
    width: 100%;
    height: 350px;
  }
  
  @media (max-width: 768px) {
    height: 320px;
  }
`;

const PartnersTrack = styled(motion.div)`
  display: flex;
  gap: 60px;
  position: absolute;
  left: 0;
  top: 0;
  width: max-content;
  height: 100%;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const PartnerCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  min-width: 308px;
  max-width: 308px;
  height: 100%;

  @media (max-width: 1024px) {
    min-width: 280px;
    max-width: 280px;
  }

  @media (max-width: 768px) {
    min-width: 250px;
    max-width: 250px;
    gap: 24px;
  }
`;

const PartnerLogoContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg);

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    border-radius: 80px;
  }
`;

const PartnerLogo = styled.img`
  
  object-fit: cover;
`;

const PartnerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

const PartnerName = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PartnerDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Partner data
const partners = [
  {
    id: 1,
    name: '(주)행복한사람들',
    description: '행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.',
    logo: partnerLogo1,
  },
  {
    id: 2,
    name: '바른댓글 실천연대',
    description: '바른댓글 정착으로 아름다운 사회를 만들어갑니다.',
    logo: partnerLogo2,
  },
  {
    id: 3,
    name: '아트리안',
    description: '생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트.',
    logo: partnerLogo3,
  },
  {
    id: 4,
    name: '대한민국위멘위원회',
    description: '어린이를 위한 위대한 멘토, 위멘이 함께 합니다.',
    logo: partnerLogo4,
  },
  {
    id: 5,
    name: '문화예술재단',
    description: '모두가 접근할 수 있는 풍요로운 문화예술 환경 조성에 앞장섭니다.',
    logo: partnerLogo1,
  },
];

const PartnersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [maxIndex, setMaxIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(368); // 308 + 60 gap

  // Add a reference to track the partners rendering
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
      
      // Adjust card widths based on screen size
      if (isMobile) {
        setCardWidth(290); // 250 + 40 gap
        setVisibleCards(1);
      } else if (isTablet) {
        setCardWidth(330); // Intermediate size for tablets
        setVisibleCards(2);
      } else {
        setCardWidth(368); // 308 + 60 gap for desktop
        setVisibleCards(3);
      }
      
      // Reset current index if needed
      setCurrentIndex(prev => {
        const newMaxIndex = Math.max(0, partners.length - visibleCards);
        return Math.min(prev, newMaxIndex);
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleCards]);

  // Update maxIndex whenever visibleCards changes
  useEffect(() => {
    setMaxIndex(Math.max(0, partners.length - visibleCards));
  }, [visibleCards]);

  // Add a useEffect to ensure track is properly positioned
  useEffect(() => {
    if (trackRef.current && sliderRef.current) {
      // Make sure the track has enough width for all partners
      const totalWidth = cardWidth * partners.length;
      trackRef.current.style.width = `${totalWidth}px`;
      
      // Adjust the current index if needed
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    }
  }, [cardWidth, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(maxIndex, prevIndex + 1));
  };

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          함께하는<br />이들
        </SectionTitle>
        <ArrowButtonContainer>
          <ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
            <StyledArrowLeftIcon />
          </ArrowButton>
          <ArrowButton onClick={handleNext} disabled={currentIndex === maxIndex}>
            <StyledArrowRightIcon />
          </ArrowButton>
        </ArrowButtonContainer>
      </SectionHeader>

      <PartnersSlider ref={sliderRef}>
        <PartnersTrack
          ref={trackRef}
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * cardWidth }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PartnerLogoContainer>
                <PartnerLogo src={partner.logo} alt={partner.name} />
              </PartnerLogoContainer>
              <PartnerDetailsContainer>
                <PartnerName>{partner.name}</PartnerName>
                <PartnerDescription>{partner.description}</PartnerDescription>
              </PartnerDetailsContainer>
            </PartnerCard>
          ))}
        </PartnersTrack>
      </PartnersSlider>
    </SectionContainer>
  );
};

export default PartnersSection; 