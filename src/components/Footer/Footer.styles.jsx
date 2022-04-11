import { Box } from '@mui/material';
import styled from '@mui/styled-engine';

const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(1, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  textAlign: 'center',
}));

const LogoContainer = styled(Box)(() => ({
  display: 'flex',
  height: 300,
  overflow: 'hidden',
  margin: '0 auto',
  marginBottom: -20,
  '& > img': {
    filter: 'invert(100%)',
    maxWidth: 'auto',
    maxHeight: '100%',
  },
}));

const ContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: theme.spacing(2),
}));

const ContactBox = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.light,
  },
  '& > svg': {
    marginRight: theme.spacing(1),
  },
}));


const CopyrightContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  fontSize: 12,
  color: theme.palette.common.white,
}));

export { FooterContainer, LogoContainer, ContactContainer, ContactBox, CopyrightContainer };
