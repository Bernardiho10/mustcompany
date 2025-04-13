import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ChevronRightIcon, DownloadIcon, BellIcon } from './IconComponents';
import appLogoImage from '../assets/images/icon_mobile.png';
import appIcon from '../assets/images/appicon.png';
import { appScreenBackgroundImage } from '../assets/images';
import dailyContentImage from '../assets/images/daily-content-image.jpg';
import { nowContentIcon } from '../assets/images';
import icon_pen from '../assets/images/Icon_pen.png';

const PaginationOverlay = styled.div`
  position: absolute;
  bottom: 28px;
  right: -2px;
  background: rgba(0, 0, 0, 0.6); // #00000099
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  box-shadow: 0px 4px 4px 0px #00000040;

  @media (max-width: 768px) {
    left: 85px;
    bottom: 28px;
  }
`;


const SectionContainer = styled.section`
  width: 100%;
  padding: 240px 40px;
  display: flex;
  align-items: center;
  gap: 100px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 80px;
  }

  @media (max-width: 768px) {
    padding: 120px 20px;
    gap: 60px;
  }
`;

const AppInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 72px;
  max-width: 649px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const AppIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const AppIcon = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    border-radius: 16px;
  }
`;

const AppIconShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppIconLogo = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  padding: 3px;

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

const AppDescription = styled.h2`
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

const AppDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AppDetail = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-secondary);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AppReleaseContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AppReleaseDate = styled.p`
  font-family: 'Gowun Batang', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-primary);
`;

const AppName = styled.p`
  font-family: 'Gowun Batang', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-accent);
`;

const DownloadButton = styled.button`
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
  max-width: fit-content;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-bg);
  }
`;

const AppScreenContainer = styled(motion.div)`
  width: 100%;
  max-width: 350px;
  margin-left: auto;
  position: relative;
  
  @media (max-width: 1024px) {
    max-width: 320px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 40px auto 0;
  }
`;

const AppPhoneFrame = styled.div`
  width: 375px;
  height: 812px;
  background-color: var(--color-bg);
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.15);
  position: relative;
  border: 12px solid #f5f5f7;
  
  
  

  @media (max-width: 768px) {
    width: 320px;
    height: 690px;
    border-width: 8px;
    
    
    
  }
`;

const AppScreenContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const AppScreenImage = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 22px 22px 0 0;

  @media (max-width: 768px) {
    height: 320px;
  }
`;

const AppScreenDetails = styled.div`
  padding: 24px 20px;
  background-color: #F8F9FB;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const AppScreenDateContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 0 4px;
`;

const AppScreenDate = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #1E1E1E;
  position: relative;

`;

const StyledChevronIcon = styled(ChevronRightIcon)`
  color: #1E1E1E;
  margin-top: 4px;
`;

const AppScreenContentCard = styled(motion.div)`
  width: 100%;
  background-color: var(--color-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
  }
`;

const AppScreenContentImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const AppScreenContentDetails = styled.div`
  padding: 18px 16px;
  position: relative;
`;

const AppScreenContentDetailsImage = styled.img`
  
`;

const AppScreenContentDetailsImageContainer = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  width: 60.28px;
  box-shadow: 0px 4px 4px 0px #00000040;
  height: 60.28px;
  background-color: #FFFFFF;
  border-radius: 99px;
  border: 1px solid #9CA3AF;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const AppScreenContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const AppScreenContentTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #111827;
  position: relative;
  padding-left: 25px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${nowContentIcon});
    border-radius: 2px;
  }
`;

const AppScreenContentText = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #4B5563;
`;

const AppFooter = styled.div`
  padding: 32px 15px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
  position: absolute;
  bottom: 403px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 5;
  backdrop-filter: blur(2px);

  @media (max-width: 768px) {
    bottom: 355px;
  }
`;

const AppFooterTitle = styled.h3`
  font-family: 'Nanum Myeongjo', serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-bg);
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
`;

const AppFooterDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
`;



const StyledDownloadIcon = styled(DownloadIcon)`
  margin-left: 8px;
`;

const StyledBellIcon = styled(BellIcon)`
  color: white;
  width: 20px;
  height: 20px;
`;

const NotificationBadgeWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: #666666;
  color: white;
  font-size: 9px;
  font-weight: 600;
  padding: 2px 4px;
  border-radius: 9px;
  min-width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5);
`;

const AppMenuBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: transparent;
  z-index: 9;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    height: 50px;
    padding: 0 12px;
  }
`;

const AppMenuLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AppMenuRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const BurgerIcon = styled.div`
  width: 20px;
  height: 14px;
  position: relative;
  
  &::before, &::after, & > span {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  &::before {
    top: 0;
  }
  
  & > span {
    top: 6px;
  }
  
  &::after {
    bottom: 0;
  }
`;

const MenuTabs = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  gap: 20px;
  background-color: transparent;
  z-index: 8;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface MenuTabProps {
  isActive?: boolean;
}

const MenuTab = styled.div<MenuTabProps>`
  font-size: 15px;
  font-weight: ${props => props.isActive ? 700 : 400};
  color: white;
  padding: 8px 4px;
  position: relative;
  white-space: nowrap;
  opacity: ${props => props.isActive ? 1 : 0.75};
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  &:hover {
    opacity: 1;
  }
`;

const AppLogoNav = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

const AppLogoNavImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const AppSection: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary-rgb', '0, 87, 146');
  }, []);

  return (
    <SectionContainer>
      <AppInfoContainer
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AppHeader>
          <AppIconContainer>
            <AppIcon>
                <AppIconShape>
                <AppIconLogo src={appIcon} alt="소소담담 앱 로고" />
              </AppIconShape>
            </AppIcon>
          </AppIconContainer>
          <AppDescription>
            더 나은 세상을<br />
            만들어 가기 위한 노력.
          </AppDescription>
        </AppHeader>

        <AppDetailsContainer>
          <AppDetail>
            바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를 초월한 커뮤니티를 만들어나가려고 노력하고 있습니다.<br /><br />
            작은 담소와 삶의 지혜가 필요하신 모든 분들을 환영합니다.
          </AppDetail>
          <AppDetail>
            삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다. 법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담 서포터즈에게 도움을 요청해주세요.
          </AppDetail>
        </AppDetailsContainer>

        <AppReleaseContainer>
          <AppReleaseDate>2025. 6. 출시 예정</AppReleaseDate>
          <AppName>커뮤니티 APP '소소담담'</AppName>
        </AppReleaseContainer>

        <DownloadButton>
          앱 다운로드
          <StyledDownloadIcon />
        </DownloadButton>
      </AppInfoContainer>

      <AppScreenContainer
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AppPhoneFrame>
          <AppScreenContent>
            <AppScreenImage src={appScreenBackgroundImage} alt="앱 스크린 배경" />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '380px',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0) 100%)',
              borderRadius: '22px 22px 0 0',
              zIndex: 6
            }}></div>
          
            
            <AppMenuBar>
              <AppMenuLeft>
                <AppLogoNav>
                  <AppLogoNavImage src={appLogoImage} alt="소소담담 앱 로고" />
                </AppLogoNav>
              </AppMenuLeft>
              <AppMenuRight>
                <IconButton>
                  <NotificationBadgeWrapper>
                    <StyledBellIcon />
                    <NotificationBadge>10+</NotificationBadge>
                  </NotificationBadgeWrapper>
                </IconButton>
                
                <IconButton>
                  <BurgerIcon><span></span></BurgerIcon>
                </IconButton>
              </AppMenuRight>
            </AppMenuBar>
            
            <MenuTabs>
              <MenuTab isActive={true}>NOW</MenuTab>
              <MenuTab>이벤트</MenuTab>
              <MenuTab>추천</MenuTab>
              <MenuTab>새소식</MenuTab>
              <MenuTab>인기글</MenuTab>
            </MenuTabs>
            
            <AppScreenDetails>
              <AppScreenDateContainer>
                <AppScreenDate>
                  오늘의 향기<br />
                  <AppDetail>
                  2025년 1월 10일 금요일
                </AppDetail>
                </AppScreenDate>
                
                <StyledChevronIcon />
              </AppScreenDateContainer>

              <AppScreenContentCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AppScreenContentImage src={dailyContentImage} alt="오늘의 컨텐츠" />
                <AppScreenContentDetails>
                  <AppScreenContentHeader>
                    <AppScreenContentDetailsImageContainer>
                      <AppScreenContentDetailsImage src={icon_pen} alt="오늘의 컨텐츠" />
                    </AppScreenContentDetailsImageContainer>
                    <AppScreenContentTitle>명언의 발견</AppScreenContentTitle>
                  </AppScreenContentHeader>
                  <AppScreenContentText>
                    당신이 만일 생각하지 않는 사람이라면<br />
                    당신은 무엇을 위한 인간이란 말인가.
                  </AppScreenContentText>
                </AppScreenContentDetails>
              </AppScreenContentCard>
            </AppScreenDetails>
          </AppScreenContent>

          <AppFooter>
            <AppFooterTitle>
              몽골 밤하늘의<br />
              쏟아지는 별을 보며
            </AppFooterTitle>
            <AppFooterDescription>
              테마여행 - 별과 인문학이 함께하는 아름다운 경험
            
            </AppFooterDescription>
            <PaginationOverlay>
                <span>1</span>
            <span>|</span>
              <span>3</span>
            <ChevronRightIcon size={16} />
            </PaginationOverlay>
          </AppFooter>

          
        </AppPhoneFrame>
      </AppScreenContainer>
    </SectionContainer>
  );
};

export default AppSection; 