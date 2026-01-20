import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {useNavigate} from 'react-router-dom';


export default function Sidebar() {
  
  const icons = [<HomeIcon/>, <ListAltIcon/>, <TrendingUpIcon/> ]
  const [state, setState] = React.useState({
    left: false,
  });

  const navigate = useNavigate();
  
  const handleNav = (index) => {
    switch (index.index) {
      case 0: 
        navigate("/home");
        break;
      case 1:
        navigate("/taskpage");
        break;
      case 2:
        navigate("/progresstracker");
        break;
      
    }
  }


  const handleSignOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Tasks', 'Progress Tracker'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>handleNav({index})}>
              <ListItemIcon>
                {icons[index]}
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Sign Out'].map((text) => (
          <ListItem key={text} disablePadding>
         
             
                <ListItemButton 
                    onClick={()=>handleSignOut()}
                  >
                  <ListItemIcon>
                    <LogoutIcon />
                
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              
           
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> Menu </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}