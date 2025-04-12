import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from './IconComponents';
import logoImage from '../assets/images/logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--color-bg);
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 60px;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 32px 40px;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const Logo = styled.div`
  img {
    height: 40px;
  }

  @media (max-width: 768px) {
    img {
      height: 32px;
    }
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div<{ isActive?: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.isActive ? 'var(--color-accent)' : 'var(--color-primary)'};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 24px;
  background-color: var(--color-secondary);
  color: var(--color-bg);
  font-size: 16px;
  font-weight: 500;
  border-radius: 9999px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary);
  }

  @media (max-width: 1024px) {
    padding: 12px 20px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 24px;
  color: var(--color-primary);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header: React.FC = () => {
  const [language, setLanguage] = useState<string>('KOR');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'KOR' ? 'ENG' : 'KOR');
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <Link to="/">
            <img src={logoImage} alt="사색의향기 로고" />
          </Link>
        </Logo>
        <NavContainer>
          <NavItem isActive>소개</NavItem>
          <NavItem>소소담담 APP</NavItem>
          <NavItem>활동</NavItem>
          <LanguageButton onClick={toggleLanguage}>
            {language}
            <ChevronDownIcon />
          </LanguageButton>
        </NavContainer>
        <MobileMenuButton>
          <span>☰</span>
        </MobileMenuButton>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header; 