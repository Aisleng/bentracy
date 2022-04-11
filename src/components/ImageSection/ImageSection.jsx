import React from 'react';
import PropTypes from 'prop-types';
import { ImageSectionContainer } from './ImageSection.styles';

const ImageSection = ({ backgroundImage }) => {
  return (
    <ImageSectionContainer backgroundImage={backgroundImage?.src} />
  );
};

ImageSection.propTypes = {
  backgroundImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export default ImageSection;
