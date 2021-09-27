import { Toolbar, List, ListItem, ListItemIcon, Paper, ListItemText } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled, makeStyles } from '@material-ui/styles';
import { faHome, faArchive, faExchangeAlt, faCommentDots, faFile, faCopy, faLayerGroup, faCog, faSignOutAlt, faLessThan, faGreaterThan,
    faSearch, faBell, faPlus, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import company_pic from '../img/logo.jpg'

import DrawerListItem from './DrawerListItem';

const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    // padding: theme.spacing(2),
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Drawer = () => {
    
  return ( 
        <div>
            <Toolbar />
            <List>
            <ListItem>
                <img src={company_pic} alt="logo" className="logo" width="40dp" height="40dp" />
                <h3>Dakota</h3>
            </ListItem>
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
            {/* Footer */}
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
        </div>
     );
}
 
export default Drawer;