import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, LogoContainer } from './Header.styles';

const Header = ({ logo, scrolled }) => {

  return (
    <HeaderContainer scrolled={scrolled}>
      <LogoContainer scrolled={scrolled}>
        <img src={logo} alt="logo" />
      </LogoContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  scrolled: PropTypes.bool.isRequired,
};

export default Header;
