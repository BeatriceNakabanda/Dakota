import {
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faExchangeAlt,
  faHome,
  faCommentDots,
  faFile,
  faSignOutAlt,
  faLayerGroup,
  faCopy,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import company_pic from "../img/logo.jpg";

// withStyles & makestyles convert css into jsx
const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "250px",
    height: "100%",
    backgroundColor: "#FFF",
  },
  container: {
    "$ .MuiListItemIcon-root": {
      paddingLeft: "20px",
      backgroundColor: "red",
    },
  },
  link: {
    padding: "17px",
    color: "#7d7e80",
    display: "block",
  },
  logo: {
    paddingLeft: "0px",
    borderRadius: "50%",
  },
  title: {
    paddingLeft: "20px",
  },
  linksFooter: {
    paddingBottom: "25px"
  }
});

const SideMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <Grid container>
      <div className="links">
      <List>
            <ListItem>
                <img src={company_pic} alt="logo" className={classes.logo} width="40dp" height="40dp" />
                <h3 className={classes.title}>Dakota</h3>
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
            </div>
            <div className="links_footer">
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
        {/* <List>
          <ListItem>
            <img
              src={company_pic}
              alt="logo"
              className={classes.logo}
              width="40dp"
              height="40dp"
            />
            <h3 className={classes.title}>Dakota</h3>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faHome} className="fas" />
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faArchive} className="fas" />
              Product
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faExchangeAlt} className="fas" />
              Order
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCommentDots} className="fas" />
              Chat
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faFile} className="fas" />
              Special Pages
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to="/">
              <FontAwesomeIcon icon={faCopy} className="fas" />
              Documentation
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faLayerGroup} className="fas" />
              Multilevel
            </Link>
          </ListItem>
        </List>
        <div className="links_footer">
        <List>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCog} className="fas" />
              Settings
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faSignOutAlt} className="fas" />
              Logout
            </Link>
          </ListItem>
        </List> 
        </div> */}
      </Grid>
    </div>
  );
};

export default SideMenu;
