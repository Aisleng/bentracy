import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import { Fab, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HeroContainer, HeroContentBox, HeroButton, FabBox } from './Hero.styles';

const Hero = ({ image, title, body, button }) => {
  const scrollToContent = () => {
    scroller.scrollTo('content', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <HeroContainer backgroundImage={image?.src}>
      <HeroContentBox>
        <Typography variant="h2" component="h1">{title}</Typography> 
        <Typography variant="body1" style={{ marginTop: 24 }}>{body}</Typography>
        {button && 
          <HeroButton variant="contained" color="secondary" href={button?.link}>
            {button?.text}
          </HeroButton>
        }
      </HeroContentBox>
      <FabBox>
        <Fab 
          aria-label="scroll"
          onClick={scrollToContent}
        >
          <KeyboardArrowDownIcon />
        </Fab>
      </FabBox>
    </HeroContainer>
  );
};

Hero.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default Hero;
