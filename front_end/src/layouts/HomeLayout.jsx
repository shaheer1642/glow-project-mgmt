import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, BorderAll } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'FAQS', 'Login'];

function HomeLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GLOW Consultants
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container minHeight={'100vh'}>
      <Grid container item xs={12} marginBottom={'auto'}>
        <AppBar component="nav" sx={{ bgcolor: 'primary.900' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src='/images/logo_dark.png'
              height={50}
              width={100}
              component="div"
            />
            <Box marginLeft={"auto"} sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
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
        </nav>
      </Grid>
      <Grid container item xs={12} justifyContent={'center'} display='flex' >
        <Toolbar />
        <Outlet  />
      </Grid>
      <Grid container item xs={12} sx={{ bgcolor: 'primary.900', boxShadow: 30 }} marginTop={'auto'}  gap={1}>
        <Grid item xs={12} display='flex' justifyContent={'center'} padding={1} >
          <img src='/images/logo_dark.png' width={80}  />
        </Grid>
        <Grid container item xs={12} display={'flex'} justifyContent={'center'} gap={5}>
          <Grid item xs={'auto'}>
            <Typography varaint='body1' color={'primary.contrastText'}>Home</Typography>
          </Grid>
          <Grid item xs={'auto'}>
            <Typography varaint='body1' color={'primary.contrastText'}>About</Typography>
          </Grid>
          <Grid item xs={'auto'}>
            <Typography varaint='body1' color={'primary.contrastText'}>Contact</Typography>
          </Grid>
          <Grid item xs={'auto'}>
            <Typography varaint='body1' color={'primary.contrastText'}>Login</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} display={'flex'} justifyContent={'center'} gap={5}>
          <Grid item xs={'auto'}>
            <Facebook sx={{ color: 'primary.contrastText' }} />
          </Grid>
          <Grid item xs={'auto'}>
            <Twitter sx={{ color: 'primary.contrastText' }} />
          </Grid>
          <Grid item xs={'auto'}>
            <LinkedIn sx={{ color: 'primary.contrastText' }} />
          </Grid>
          <Grid item xs={'auto'}>
            <Instagram sx={{ color: 'primary.contrastText' }} />
          </Grid>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Typography color={'primary.contrastText'} fontSize={12}>
            © GLOW 2023-24, All Rights Reserved. Developed by Adila & Shaheer
          </Typography>
        </Grid>
      </Grid>

    </Grid >
  );

}

HomeLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomeLayout;