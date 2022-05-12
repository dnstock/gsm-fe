import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: './productCategoryKeyExperience.jpg',
    title: 'Key Experience',
    width: '40%',
  },
  {
    url: './productCategoryAssignment.jpg',
    title: 'Assignment',
    width: '20%',
  },
  {
    url: './productCategoryOurSolution.jpg',
    title: 'Our Solution',
    width: '40%',
  },
  {
    url: './productCatetgoryAssetManager.jpg',
    title: 'The Asset Manager',
    width: '38%',
  },
  {
    url: './productCategoryRetailInvestor.jpg',
    title: 'The Retail Investor',
    width: '38%',
  },
  {
    url: './productCategoryOverallDemographic.png',
    title: 'Overall Demographic',
    width: '24%',
  },
  {
    url: './productCategoryApplicationVoice.jpg',
    title: 'Application Voice',
    width: '40%',
  },
  {
    url: './productCategoryScope.jpg',
    title: 'Scope',
    width: '20%',
  },
  {
    url: './productCategoryApplicationPersonality.webp',
    title: 'Application Personality',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Expand Your Experience
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', marginBottom: 10 }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
      <img
        src={'./quotation-symbol.png'}
        height={50}
        style={{ position: 'absolute', opacity: .7 }}
      />
      <Typography variant="h4" marked="left" align="left" component="h2"
        style={{
          fontSize: 26,
          fontStyle: "italic",
          marginLeft: 85,
          marginTop: 10,
          paddingBottom: 30
      }}>
        &quot;Todays crypto-native portfolio management offerings feel like blockchain proof-of-concepts with user experience layers bolted on after the fact.&quot;
      </Typography>
    </Container>
  );
}
