import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome, <b>{user.name}</b>
            </Typography>
            <Button color="inherit" onClick={() => dispatch(logOut())}>
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
