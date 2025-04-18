import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Avatar } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static" color="primary" className="mb-6">
      <Toolbar className="flex justify-between">
        <div className="flex items-center gap-3">
          <Avatar src="/asset/user.png" alt="Logo" />
          <Typography variant="h6" component="div">
            
          </Typography>
        </div>
        <div className="flex items-center gap-3">
          {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          {/* <Typography variant="body2">{darkMode ? 'Dark' : 'Light'} Mode</Typography> */}
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;