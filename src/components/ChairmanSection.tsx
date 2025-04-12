import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from './IconComponents';
import chairmanImage from '../assets/images/chairman-image.jpg';
import directorImage from '../assets/images/director-image.jpg';
import adviserImage from '../assets/images/adviser-image.jpg';
import signature from '../assets/images/signature.png';

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

const ChairmanContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ChairmanInfoContainer = styled(motion.div)`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 40px;
  }
`;

const ChairmanTitle = styled.h2`
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

const ChairmanDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChairmanGreeting = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-secondary);
`;

const ChairmanMessage = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-secondary);
`;

const ChairmanThanks = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-secondary);
`;

const ChairmanSignatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ChairmanSignature = styled.p`
  font-family: 'Gowun Batang', serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);
`;

const SignatureImage = styled.img`
  width: 187px;
  height: 79px;
`;

const MoreLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
`;

const StyledChevronRightIcon = styled(ChevronRightIcon)`
  margin-left: 4px;
`;

const ChairmanImageContainer = styled(motion.div)`
  position: relative;
  width: 600px;
  height: 600px;

  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ChairmanImageBackground = styled.div`
  width: 800px;
  height: 400px;
  background-color: #D0DEF0;
  
  border-radius: 200px;
`;

const ChairmanImageMask = styled.div`
  position: absolute;
  top: -85px;
  left: 200px;
  width: 338px;
  height: 485px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%);

  @media (max-width: 1024px) {
    top: 30px;
    left: 30px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
  }
`;

const ChairmanImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DirectorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 0 20px;
  }
`;

const DirectorCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const DirectorImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  background-color: var(--color-gray);
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const DirectorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DirectorName = styled.h3`
  font-family: 'Gowun Batang', serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);
`;

const ChairmanSection: React.FC = () => {
  return (
    <SectionContainer>
      <ChairmanContainer>
        <ChairmanInfoContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ChairmanTitle>이사장 인사말.</ChairmanTitle>
          <ChairmanDetailsContainer>
            <ChairmanGreeting>
              안녕하세요, 사색의향기 이사장 오덕균 입니다.
            </ChairmanGreeting>
            <ChairmanMessage>
              사색의향기는 '행복한 문화 나눔'을 통해 더 나은 사회를 만들어가고자
              노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.
            </ChairmanMessage>
            <ChairmanThanks>
              많은 관심과 응원 부탁드립니다. 감사합니다.
            </ChairmanThanks>
          </ChairmanDetailsContainer>
          <ChairmanSignatureContainer>
            <ChairmanSignature>사단법인 사색의향기 이사장 오덕균</ChairmanSignature>
            <SignatureImage src={signature} alt="오덕균 이사장 서명" />
          </ChairmanSignatureContainer>
          <MoreLink href="#">
            인터뷰 더 보기
            <StyledChevronRightIcon />
          </MoreLink>
        </ChairmanInfoContainer>
        <ChairmanImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ChairmanImageBackground />
          <ChairmanImageMask>
            <ChairmanImage src={chairmanImage} alt="오덕균 이사장" />
          </ChairmanImageMask>
        </ChairmanImageContainer>
      </ChairmanContainer>

      <DirectorsContainer>
        <DirectorCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <DirectorImageContainer>
            <DirectorImage src={chairmanImage} alt="오덕균 이사장" />
          </DirectorImageContainer>
          <DirectorName>오덕균 이사장</DirectorName>
        </DirectorCard>
        
        <DirectorCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <DirectorImageContainer>
            <DirectorImage src={directorImage} alt="정준호 이사" />
          </DirectorImageContainer>
          <DirectorName>정준호 이사</DirectorName>
        </DirectorCard>
        
        <DirectorCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <DirectorImageContainer>
            <DirectorImage src={adviserImage} alt="권혁준 고문" />
          </DirectorImageContainer>
          <DirectorName>권혁준 고문</DirectorName>
        </DirectorCard>
      </DirectorsContainer>
    </SectionContainer>
  );
};

export default ChairmanSection; 