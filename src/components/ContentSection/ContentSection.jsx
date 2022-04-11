import React from 'react';
import PropTypes from 'prop-types';
import { ContentSectionContainer, ContentSectionContentBox } from './ContentSection.styles';

const ContentSection = ({ children, overlayImage }) => {
  
  return (
    <ContentSectionContainer overlayImage={overlayImage?.src}>
      <ContentSectionContentBox>
        {children}
      </ContentSectionContentBox>
    </ContentSectionContainer>
  );
};

ContentSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  overlayImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export default ContentSection;
