import { Box } from '@mui/material';
import styled from '@mui/styled-engine';

const ContentSectionContainer = styled(Box)(({ theme, overlayImage }) => ({
  position: 'relative',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.common.white,
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  height: '80vh',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  left: 0,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    backgroundColor: theme.palette.common.white,
    height: '99%',
    zIndex: 1,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${overlayImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
  },
  [theme.breakpoints.down('sm')]: {
    heigth: 'auto',
  },
}));

const ContentSectionContentBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'left',
  justifyContent: 'flex-start',
  padding: theme.spacing(2, 0, 2, 5),
  position: 'relative',
  zIndex: 2,
  '& > *': {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(2),
  },
}));

export { ContentSectionContainer, ContentSectionContentBox };
