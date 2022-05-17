import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            <img
                src='/logo-bw.png'
                alt='logo'
                height={50}
                style={{ position: "absolute", marginLeft: -60, marginTop: -8 }}
            />
            {'Vast'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginTop: 1 }}>
            <Link
              color="inherit"
              variant="h6"
              title="Home"
              underline="none"
              href="/"
              sx={rightLink}
            >
              <img
                  src='/iconHome.png'
                  alt='Home'
                  height={25}
              />
            </Link>
            <Link
              color="inherit"
              variant="h6"
              title="Sign In"
              underline="none"
              href="/sign-in/"
              sx={rightLink}
            >
              <img
                  src='/iconLogin.png'
                  alt='Home'
                  height={25}
              />
            </Link>
            <Link
              variant="h6"
              title="Request Invite"
              underline="none"
              href="/#request-invite"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              <img
                  src='/iconInvite.png'
                  alt='Request Invite'
                  height={35}
                  style={{ marginTop: -6, marginLeft: 10 }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
