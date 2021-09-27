import { Toolbar, makeStyles, Drawer, List, ListItem,
     Divider, ListItemIcon, InboxIcon, ListItemText } from "@material-ui/core";
import company_pic from '../img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArchive, faExchangeAlt, faCommentDots, faFile, faCopy, faLayerGroup, faCog, faSignOutAlt, faLessThan, faGreaterThan,
    faSearch, faBell, faPlus, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({


});
const drawerWidth = "250px";
const SideBar = () => {
    const classes = useStyles();
    return ( 
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
        <ListItem>
        <img src={company_pic} alt="logo" className="logo" width="40dp" height="40dp" />
                <h3>Dakota</h3>
        </ListItem>
        </List>
        <List>
        <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faHome} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />     
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faArchive} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Product" />     
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faExchangeAlt} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Order" />     
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faCommentDots} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Chat" />     
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faFile} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Special Pages" />     
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faCopy} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Documentation" />     
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faLayerGroup} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Multilevel" />     
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faCog} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Settings" />     
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FontAwesomeIcon icon={faSignOutAlt} className="fas" />
                </ListItemIcon>
                <ListItemText primary="Logout" />     
            </ListItem>
        </List>
        </Drawer>
     );
}
 
export default SideBar;