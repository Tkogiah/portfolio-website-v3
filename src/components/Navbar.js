import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { MAIN_COLOR, RowBox } from './styledComponents';
import { Link } from 'react-router-dom';



const drawerWidth = 240;
const navItems = ['Home', 'Projects', 'About', 'Contact'];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
    onClick={handleDrawerToggle} 
    sx={{ textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NAVIGATION
      </Typography>
      <Divider  sx={{background: MAIN_COLOR, mx: 5}}/>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link to={`/${item === 'Home' ? '': item}`}>
                <ListItemButton sx={{ textAlign: 'center', color: 'white' }}>
                    <ListItemText primary={item} />
                </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider  sx={{background: MAIN_COLOR, mx: 5}}/>
      <img alt='icon' src='MarcusIcon.png' style={{height: '45px', width: '45px', paddingTop: 25}} />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{backgroundColor: 'black', py: 2}}>
        <Toolbar sx={{backgroundColor: 'black'}}>
          <RowBox sx={{
            width: '55%',
            justifyContent: 'space-between'
          }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <img alt='icon' src='MarcusIcon.png' style={{height: '45px', width: '45px'}} />
          </RowBox>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link to={`/${item === 'Home' ? '': item}`}>
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}
