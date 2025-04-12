import React from 'react';
import styled from 'styled-components';
import * as FiIcons from 'react-icons/fi';

// Function to safely render icons using a proven approach
const createStyledIconComponent = (IconComponent, styles) => {
  const IconWrapper = (props) => {
    return (
      <span className={props.className} style={{ display: 'inline-flex', alignItems: 'center' }}>
        {React.createElement(IconComponent)}
      </span>
    );
  };
  
  return styled(IconWrapper)`${styles}`;
};

// Create styled icon components with the desired styles
export const HeartIcon = createStyledIconComponent(FiIcons.FiHeart, `
  color: #D0D0D0;
  cursor: pointer;
  font-size: 24px;
  transition: color 0.2s ease;

  &:hover {
    color: #D73232;
  }

  &.active {
    color: #D73232;
  }
`);

export const ChevronRightIcon = createStyledIconComponent(FiIcons.FiChevronRight, `
  color: #D0D0D0;
  font-size: 16px;
  margin-left: 4px;
`); 