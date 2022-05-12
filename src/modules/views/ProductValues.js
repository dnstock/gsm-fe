import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/productValues1.png"
                alt="suitcase"
                sx={{ height: 75 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Next Level Portfolio
              </Typography>
              <Typography variant="h5">
                Bring your asset management together with our powerful platform and tools.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/productValues2.png"
                alt="graph"
                sx={{ height: 75 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Coin Buckets
              </Typography>
              <Typography variant="h5">
                Create buckets to consolidate a diverse set of crypto assets and earning strategies.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/productValues3.webp"
                alt="clock"
                sx={{ height: 75 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Earn Together
              </Typography>
              <Typography variant="h5">
                Become a revenue stream for your friends and followers. Earn residual while you're at it.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
