import React from 'react';
import * as FiIcons from 'react-icons/fi';

// Function to safely render icons using a proven approach
const createIconComponent = (IconComponent) => {
  return function IconWrapper(props) {
    return (
      <span className={props.className} style={{ display: 'inline-flex', alignItems: 'center' }}>
        {React.createElement(IconComponent)}
      </span>
    );
  };
};

// Create wrapper components for each icon we need
export const ChevronRightIcon = createIconComponent(FiIcons.FiChevronRight);
export const DownloadIcon = createIconComponent(FiIcons.FiDownload);
export const HeartIcon = createIconComponent(FiIcons.FiHeart);
export const ArrowLeftIcon = createIconComponent(FiIcons.FiArrowLeft);
export const ArrowRightIcon = createIconComponent(FiIcons.FiArrowRight);
export const ChevronDownIcon = createIconComponent(FiIcons.FiChevronDown);
export const BellIcon = createIconComponent(FiIcons.FiBell); 