import { Box } from '@mui/material';
import styled from '@mui/styled-engine';

const HeaderContainer = styled(Box)(({ theme, scrolled }) => ({
  position: 'fixed',
  top: 0,
  width: '100%',
  transition: 'all 0.3s ease-in-out',
  boxShadow: scrolled ? theme.shadows[3] : theme.shadows[0],
  backgroundColor: scrolled ? theme.palette.common.white : 'transparent',
  padding: theme.spacing(1, 2),
  zIndex: theme.zIndex.appBar,
}));

const LogoContainer = styled(Box)(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? theme.palette.secondary.main : 'transparent',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease-in-out',
  width: scrolled ? 50 : 200,
  height: scrolled ? 50 : 200,
  overflow: 'hidden',
  '& > img': {
    filter: 'invert(100%)',
    maxWidth: scrolled ? '130%' : '100%',
    maxHeight: scrolled ? '130%' : '100%',
  },
}));

export { HeaderContainer, LogoContainer };
