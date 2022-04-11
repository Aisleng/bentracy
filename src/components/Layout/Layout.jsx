import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Footer, Header, Theme } from '../';
import useScrollPosition from 'utils/useScrollPosition';
import logo from '../../images/logo.svg';

const Layout = ({ children }) => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Header 
          logo={logo} 
          scrolled={scrollPosition > 40}
        />
        {children}
        <Footer logo={logo} />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
