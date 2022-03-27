import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './styles.css';

const MainTopbar = () => {
  return (
    <div className="topBar">
      <div className="profileBar">
        <Paper
          elevation={0}
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#FAFAFC' }}
        >
          <InputBase
            className="nav-search"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Ask us any question"
            inputProps={{ 'aria-label': 'Ask us any question' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <img src="images/search-icon.png" alt="search" />
          </IconButton>
        </Paper>
        <div className="profileNav">
          <Box
            className="profileBox"
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: 'background.paper',
              color: 'text.secondary',
              '& svg': {
                m: 1.5,
              },
              '& hr': {
                mx: 0.5,
              },
            }}
          >
            <div className="profile-icons"><img src="images/notification-icon.png" alt="icon"/></div><div className="profile-icons count">3</div>
            <Divider orientation="vertical" flexItem />
            <div className="profile-icons"><img src="images/image.png" alt="icon"/></div><div className="profile-icons"><img src="images/chevron.png" alt="icon"/></div>
          </Box>
        </div>
      </div>

      <Divider flexItem />

      <div className="mainNavigation">
        <Link className="nav-link" href="#" variant="body2" underline="none">Efficiency</Link>
        <Link className="nav-link" href="#" variant="body2" color="inherit" underline="none">
          Volume
        </Link>
        <Link className="nav-link" href="#" variant="body2" underline="none">
          Customer Satisfaction
        </Link>
        <Link className="nav-link" href="#" variant="body2" underline="none">
          Backlog
        </Link>
      </div>

      <Divider flexItem />

      <div className="analyticsBar">
        <Typography variant="h4">Efficiency Analytics</Typography>

        <div className="analyticsBar__controls">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={''}
              startAdornment={<InputAdornment position="end"><img src="images/search-icon.png" alt="search" /></InputAdornment>}
            />
          </FormControl>
          <Button className="select-button" variant="outlined" endIcon={<img src="images/chevron.png" alt="chevron" />} size="medium">
            Filter options
          </Button>
          <Button className="button" variant="contained" color="success" size="medium">
            Export
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MainTopbar;