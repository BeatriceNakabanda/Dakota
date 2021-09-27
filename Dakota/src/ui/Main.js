import { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Toolbar, AppBar, Drawer, Typography, CssBaseline, Link, IconButton,
   Grid, Paper} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@material-ui/styles';
import profile_pic from '../img/baby.jpg';
import useFetch from './useFetch';
import { DataGrid } from '@material-ui/data-grid';
import SideDrawer from './Drawer';
import { faSearch, faBell,  } from '@fortawesome/free-solid-svg-icons';
import {Menu} from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 250;
const Main = (props) => {
    const { window } = props;
    const { data: products, isLoading, error} = useFetch('/products');
    const [ mobileOpen, setMobileOpen ] = useState(false);
    
    const columns = [
      {field: 'name', headerName:'NAME', width: 150},
      {field: 'code', headerName:'CODE', width: 150},
      {field: 'type', headerName:'TYPE', width: 150},
      {field: 'date', headerName:'DATE', width: 150},
      {field: 'price', headerName:'PRICE', width: 150},
      {field: 'status', headerName:'STATUS', width: 150},
      {field: 'code', headerName:'CODE', width: 150},
      {field: 'views', headerName:'DATE', width: 150},
    ];

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const useStyles = makeStyles({
      root: {
        flexGrow: 1,
        width: "100%",
        height: "100vh",
        display: "flex",
        position: "relative",
        backgroundColor: "#E4F4F4"
      },
     
    });

    const Item = styled(Paper)(({ theme }) => ({
      // ...theme.typography.body2,
      // padding: theme.spacing(2),
      // textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    // const rows = [
    //   {
    //     name: products.name,
    //     code: products.code, 
    //     type: products.type, 
    //     date: products.date, 
    //     stock: products.stock, 
    //     price: products.price, 
    //     status: products.status, 
    //     views: products.views,
    //     id: products.id,
    //   }
    // ];
    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles(props);
    return (
      // <div className={classes.root}>
        <Box sx={{
          flexGrow: 1,
          backgroundColor: '#E4F4F4'
          }}>
          <CssBaseline />
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2}>
              <Item>
                {/* <Box
                  component="nav"
                  sx={{  flexShrink: { sm: 0 } }}
                  aria-label="mailbox folders"> */}
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
                      '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
                  >
                    <SideDrawer /> 
                  </Drawer>
                    <Drawer
                      variant="permanent"
                      sx={{
                      display: { xs: 'none', sm: 'block' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
                    open>
                      <SideDrawer />
                    </Drawer>
                  {/* </Box> */}
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>
                <AppBar
                  position="fixed"
                  color="transparent"
                  sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                      ml: { sm: `${drawerWidth}px` },
                  }}>
                  <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                      {/* <div> */}
                        <h3><b>Product</b></h3>
                      {/* </div>
                      <div> */}
                          <Link className="link" to="/"><FontAwesomeIcon icon={faSearch} /></Link>
                          <Link className="link" to="/"><FontAwesomeIcon icon={faBell} /></Link>
                          <img src={profile_pic} alt="logo" width="40dp" height="40dp" />
                          <p><b>Beatrice Nakabanda</b></p>
                      {/* </div> */}
                    </Typography>
                  </Toolbar>
                  </AppBar>
                  { products && <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                    <Toolbar />
                        <DataGrid  
                          style={{ height: 400, width: '100%' }}
                          rows={products}
                          columns={columns}
                          pageSize={5}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                          />
                    </Box>   
                  } 
              </Item>
            </Grid>
          </Grid>
        </Box> 
      // </div> 
    )
}

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default Main;