import { Box, Button } from '@mui/material';
import styled from '@mui/styled-engine';

const HeroContainer = styled(Box)(({ theme, backgroundImage }) => ({
  position: 'relative',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(1, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  color: theme.palette.common.white,
  backgroundImage: `url(${backgroundImage})`,
  paddingTop: theme.spacing(10),
  height: '90vh',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: 10,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(2,0,36,0.7861519607843137) 0%, rgba(2,95,186,0) 100%)',
    zIndex: 0,
  },
}));

const HeroContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '600px',
  padding: theme.spacing(2, 3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'left',
  justifyContent: 'flex-start',
  '& > *': {
    textAlign: 'left',
    width: '100%',
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(5),
  padding: theme.spacing(2, 5),
  fontSize: theme.typography.h6.fontSize,
}));

const FabBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(-3),
  left: '50%',
  marginLeft: theme.spacing(-3.5),
  zIndex: theme.zIndex.fab,
}));

export { HeroContainer, HeroContentBox, HeroButton, FabBox };
