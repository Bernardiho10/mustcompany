import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import activityConcertImage from '../assets/images/activity-concert.jpg';
import activityFestivalImage from '../assets/images/activity-festival.jpg';
import activityBazaarImage from '../assets/images/activity-bazaar.jpg';
import activityDonationImage from '../assets/images/activity-donation.jpg';

const SectionContainer = styled.section`
  width: 100%;
  padding: 240px 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1024px) {
    padding: 180px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 120px 20px;
    gap: 30px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const TabItem = styled.button<{ isActive: boolean }>`
  font-family: 'Gowun Batang', serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.5;
  color: ${props => props.isActive ? 'var(--color-primary)' : 'var(--color-gray)'};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TabDivider = styled.span`
  font-family: 'Gowun Batang', serif;
  font-size: 60px;
  font-weight: 700;
  color: var(--color-gray-light);

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ActivitiesGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 52px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const ActivityItem = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const ActivityImageContainer = styled.div`
  width: 852px;
  height: 171px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 320px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
  }
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ActivityDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }

  ${ActivityItem}:nth-child(even) & {
    align-items: flex-end;
    text-align: right;

    @media (max-width: 768px) {
      align-items: flex-start;
      text-align: left;
    }
  }
`;

const ActivityDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-primary);
  max-width: 308px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ActivityTitle = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

// Activities data
const activities = [
  {
    id: 1,
    title: '인문학 콘서트',
    description: '깊은 사유와 따뜻한 대화가 어우러진 시간\n마음을 울리는 문학과 인문학의 이야기',
    image: activityConcertImage,
    category: 'activities'
  },
  {
    id: 2,
    title: '지역 축제',
    description: '지역의 숨결을 느끼며 함께 웃는 하루\n소박한 만남속에 커지는 온기',
    image: activityFestivalImage,
    category: 'activities'
  },
  {
    id: 3,
    title: '나눔 바자회',
    description: '행복이 전해지는 물건들,\n그 속의 이야기들',
    image: activityBazaarImage,
    category: 'activities'
  },
  {
    id: 4,
    title: '따뜻한 후원',
    description: '작은 나눔이 모여 큰 울림이 됩니다\n사색의향기와 함께 만들어가는 더 나은 내일',
    image: activityDonationImage,
    category: 'activities'
  },
];

const traces = [
  {
    id: 5,
    title: '문학상 수상',
    description: '뛰어난 작가들의 업적을 기리며\n문학의 발전에 기여하는 순간',
    image: activityConcertImage,
    category: 'traces'
  },
  {
    id: 6,
    title: '도서 출판',
    description: '가치 있는 생각을 담은 책으로\n세상에 지혜를 전하는 여정',
    image: activityFestivalImage,
    category: 'traces'
  },
];

const ActivitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'activities' | 'traces'>('activities');
  const displayData = activeTab === 'activities' ? activities : traces;

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <SectionContainer>
      <TabContainer>
        <TabItem 
          isActive={activeTab === 'activities'} 
          onClick={() => setActiveTab('activities')}
        >
          함께하는 일
        </TabItem>
        <TabDivider>·</TabDivider>
        <TabItem 
          isActive={activeTab === 'traces'} 
          onClick={() => setActiveTab('traces')}
        >
          우리의 흔적
        </TabItem>
      </TabContainer>

      <ActivitiesGrid
        as={motion.div}
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayData.map((item) => (
          <ActivityItem key={item.id} variants={itemVariants}>
            <ActivityImageContainer>
              <ActivityImage src={item.image} alt={item.title} />
            </ActivityImageContainer>
            <ActivityDetails>
              <ActivityDescription>{item.description}</ActivityDescription>
              <ActivityTitle>{item.title}</ActivityTitle>
            </ActivityDetails>
          </ActivityItem>
        ))}
      </ActivitiesGrid>
    </SectionContainer>
  );
};

export default ActivitiesSection; 