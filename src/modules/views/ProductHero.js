import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  './productHeroBackground.jpg';
  // './bg/gsm-bg3.jpg'; //*
  // './bg/gsm-bg4.webp'; //*
  // './bg/gsm-bg6.jpg'; //*
  // './bg/gsm-bg7.png'; //*
  // './bg/gsm-bg8.jpg'; //** dark
  // './bg/gsm-bg10.jpg'; //** dark
  // './bg/gsm-bg15.jpg'; //*
  // './bg/gsm-bg16.jpg'; //*
  // './bg/gsm-bg17.jpg'; //** light
  // './bg/gsm-bg24.jpg'; //**
  // './bg/gsm-bg25.jpg'; //*
  // './bg/gsm-bg29.jpg'; //*
  // './bg/gsm-bg30.jpg'; //** the one
  // './bg/gsm-bg28.jpg'; // Matrix
  // './bg/gsm-bg5.jpg'; // Skyscrapers
  // './bg/gsm-bg1.jpg';
  // './bg/gsm-bg2.jpg';
  // './bg/gsm-bg9.jpg';
  // './bg/gsm-bg11.jpg';
  // './bg/gsm-bg12.jpg';
  // './bg/gsm-bg13.webp';
  // './bg/gsm-bg14.jpg';
  // './bg/gsm-bg18.jpg';
  // './bg/gsm-bg19.png';
  // './bg/gsm-bg20.jpg';
  // './bg/gsm-bg21.jpg';
  // './bg/gsm-bg22.webp';
  // './bg/gsm-bg23.jpg';
  // './bg/gsm-bg26.jpg';
  // './bg/gsm-bg27.jpg';
  // './bg/gsm-bgX1.jpg';
  // './bg/gsm-bgX2.jpg';
  // './bg/gsm-bgX3.jpg';
  // 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

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
          src={'./gsm-logo.png'}
          height={80}
          style={{ position: "absolute", marginLeft: -105, marginTop: -10 }}
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
        Expand your experience
      </Typography>
    </ProductHeroLayout>
  );
}
