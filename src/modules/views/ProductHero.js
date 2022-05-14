import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  './productHeroBackground.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        <img
          src={'./logo.png'}
          height={80}
          style={{ position: "absolute", marginLeft: -105, marginTop: -15 }}
        />
        DeFi on Steroids.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Create a fund or earn from others. Make your crypto work for you.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Request Invite
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Start your journey.
      </Typography>
    </ProductHeroLayout>
  );
}
