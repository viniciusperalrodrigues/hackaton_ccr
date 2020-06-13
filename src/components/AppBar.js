import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

const TopBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        icon
        <Typography variant="h6" color="inherit" noWrap>
          qApp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;