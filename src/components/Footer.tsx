import React from 'react';
import styled from 'styled-components';
import { ArrowRightIcon } from './IconComponents';
import logoImage from '../assets/images/logo.png';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--color-bg-dark);
  padding: 120px 0;
  color: var(--color-bg);
`;

const FooterContent = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const FooterLogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 76px;

  @media (max-width: 1024px) {
    gap: 40px;
  }
`;

const Logo = styled.div`
  margin-bottom: 20px;
  
  img {
    height: 40px;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    img {
      height: 32px;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InfoLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const InfoLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-bg);
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const CustomerServiceInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #7C7C7C;
`;

const InfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoDetailsRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const OrganizationName = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-bg);
  opacity: 0.8;
`;

const InfoDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const InfoDetailLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #7C7C7C;
`;

const InfoDetailValue = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-bg);
  opacity: 0.8;
`;

const AddressContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AddressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CopyrightNotice = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-bg);
  opacity: 0.8;
`;

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const NewsletterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NewsletterTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-bg);
`;

const NewsletterDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--color-bg);
  max-width: 500px;
`;

const SubscribeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 9999px;
  border: 1px solid var(--color-bg);
  background: transparent;
  color: var(--color-bg);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogoContainer>
          <Logo>
            <img src={logoImage} alt="사색의향기 로고" />
          </Logo>
          <InfoContainer>
            <InfoLinks>
              <InfoLink href="#">개인정보 처리방침</InfoLink>
              <InfoLink href="#">이용약관</InfoLink>
              <CustomerServiceInfo>고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</CustomerServiceInfo>
            </InfoLinks>

            <InfoDetailsContainer>
              <InfoDetailsRow>
                <OrganizationName>사단법인 사색의향기</OrganizationName>
                <InfoDetailItem>
                  <InfoDetailLabel>이사장</InfoDetailLabel>
                  <InfoDetailValue>오덕균</InfoDetailValue>
                </InfoDetailItem>
                <InfoDetailItem>
                  <InfoDetailLabel>고유번호</InfoDetailLabel>
                  <InfoDetailValue>355-82-00129</InfoDetailValue>
                </InfoDetailItem>
              </InfoDetailsRow>

              <AddressContainer>
                <AddressRow>
                  <InfoDetailLabel>주소</InfoDetailLabel>
                  <InfoDetailValue>서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)</InfoDetailValue>
                </AddressRow>
                <AddressRow>
                  <InfoDetailLabel>전화</InfoDetailLabel>
                  <InfoDetailValue>02-539-5101</InfoDetailValue>
                </AddressRow>
                <AddressRow>
                  <InfoDetailLabel>팩스</InfoDetailLabel>
                  <InfoDetailValue>070-8668-5091</InfoDetailValue>
                </AddressRow>
                <AddressRow>
                  <InfoDetailLabel>이메일</InfoDetailLabel>
                  <InfoDetailValue>culppy@culppy.com</InfoDetailValue>
                </AddressRow>
              </AddressContainer>

              <CopyrightNotice>Copyright ⓒ 2025 사색의향기. All Rights Reserved</CopyrightNotice>
            </InfoDetailsContainer>
          </InfoContainer>
        </FooterLogoContainer>

        <NewsletterContainer>
          <NewsletterInfoContainer>
            <NewsletterTitle>뉴스레터 구독하기</NewsletterTitle>
            <NewsletterDescription>
              이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을 빠르게 받아보실 수 있습니다.
            </NewsletterDescription>
          </NewsletterInfoContainer>

          <SubscribeButton>
            이메일 구독신청
            <ArrowRightIcon />
          </SubscribeButton>
        </NewsletterContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 