import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from './IconComponents';
import heroImage from '../assets/images/hero-image.jpg';

const HeroContainer = styled.section`
  width: 100%;
  padding-top: 140px;
  padding-bottom: 60px;
  overflow: hidden;
`;

const HeroInner = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  overflow-x: auto;
  gap: 60px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    gap: 40px;
  }
`;

const HeroSlide = styled(motion.div)`
  position: relative;
  min-width: 100%;
  height: 80vh;
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const MaskGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  max-width: 1200px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 0 20px;
`;

const HeroTitle = styled.h2`
  font-family: 'Gowun Batang', serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-bg);
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 1px;
  background-color: var(--color-bg);
  opacity: 0.8;
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 900px;
`;

const HeroMainText = styled.h1`
  font-family: 'Gowun Batang', serif;
  font-size: 72px;
  font-weight: 700;
  color: var(--color-bg);
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: var(--color-bg);
  line-height: 1.5;
  text-align: center;
  opacity: 0.9;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 30px 40px;
  border-top-left-radius: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 56px;
  z-index: 5;

  @media (max-width: 768px) {
    gap: 32px;
    padding: 20px 30px;
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProgressNumber = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
`;

const ProgressBar = styled.div`
  width: 100px;
  height: 2px;
  background-color: #E5E5E5;
  display: flex;
  overflow: hidden;
  border-radius: 2px;
  
  @media (max-width: 768px) {
    width: 80px;
  }
`;

const ProgressIndicator = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background-color: var(--color-primary);
  transition: width 0.5s ease;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: var(--color-primary);
  color: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: var(--color-accent);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
`;

// Hero section content
const heroSlides = [
  {
    id: 1,
    title: '특별한 나눔',
    mainText: '함께하는 마음이 만드는 소중한 변화',
    subText: '즐거움과 나눔이 있는 감동의 순간',
    image: heroImage,
  },
  {
    id: 2,
    title: '문화와 예술',
    mainText: '삶의 깊이를 더하는 문화적 경험',
    subText: '마음을 울리는 예술과의 만남',
    image: heroImage,
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalSlides = heroSlides.length;

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentSlide(current => (current + 1) % totalSlides);
          return 0;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [totalSlides]);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
    setProgress(0);
  };

  return (
    <HeroContainer>
      <HeroInner>
        <AnimatePresence mode="wait">
          <HeroSlide
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroImage src={heroSlides[currentSlide].image} alt={heroSlides[currentSlide].title} />
            <MaskGroup />
            <HeroContent>
              <HeroTitle>{heroSlides[currentSlide].title}</HeroTitle>
              <Divider />
              <HeroTextContainer>
                <HeroMainText>{heroSlides[currentSlide].mainText}</HeroMainText>
                <HeroSubText>{heroSlides[currentSlide].subText}</HeroSubText>
              </HeroTextContainer>
            </HeroContent>
            <IndicatorContainer>
              <ProgressContainer>
                <ProgressNumber>{currentSlide + 1}</ProgressNumber>
                <ProgressBar>
                  <ProgressIndicator width={progress} />
                </ProgressBar>
                <ProgressNumber>{totalSlides}</ProgressNumber>
              </ProgressContainer>
              <ButtonsContainer>
                <ArrowButton onClick={handlePrevSlide}>
                  <ArrowLeftIcon />
                </ArrowButton>
                <ArrowButton onClick={handleNextSlide}>
                  <ArrowRightIcon />
                </ArrowButton>
              </ButtonsContainer>
            </IndicatorContainer>
          </HeroSlide>
        </AnimatePresence>
      </HeroInner>
    </HeroContainer>
  );
};

export default HeroSection; 