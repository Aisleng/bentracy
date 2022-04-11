import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { FooterContainer, LogoContainer, ContactContainer, ContactBox, CopyrightContainer } from './Footer.styles';

const Footer = ({ logo }) => {

  return (
    <FooterContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <ContactContainer>
        <ContactBox href="tel:859.429.2226">
          <LocalPhoneIcon color="primary" />
          859.429.2226
        </ContactBox>
        <ContactBox href="mailto: ben@bentracy.com">
          <EmailIcon color="primary" />
          ben@bentracy.com
        </ContactBox>
      </ContactContainer>
      <CopyrightContainer>
        &copy; {new Date().getFullYear()} Ben Tracy
      </CopyrightContainer>
    </FooterContainer>
  );
};

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Footer;
