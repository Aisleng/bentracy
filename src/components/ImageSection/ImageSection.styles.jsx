import { Box } from '@mui/material';
import styled from '@mui/styled-engine';

const ImageSectionContainer = styled(Box)(({ theme, backgroundImage }) => ({
  position: 'relative',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.common.white,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transform: 'translateY(-300px)',
  marginBottom: -300,
}));

export { ImageSectionContainer };
