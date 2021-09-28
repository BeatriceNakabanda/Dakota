import {
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Drawer,
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
    fontSize: "18px",
    flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "250px",
          boxSizing: "border-box",
        },
  },
  container: {
    "$ .MuiListItemIcon-root": {
      paddingLeft: "20px",
      backgroundColor: "red",
    },
    "$ .MuiPaper-elevation0": {
        paddingBottom: "0px",
        marginBottom: "0px"
    }
  },
  links: {
    paddingTop: "30px",
  },
  link: {
    // padding: "17px",
    color: "#7d7e80",
    // display: "block",
  },
  logo: {
    paddingLeft: "0px",
    borderRadius: "50%",
  },
  title: {
    paddingLeft: "20px",
    color: "#3a5f79",
  },
  linksFooter: {
    paddingBottom: "25px",
  },
  label: {
    display: "flex",
    alignItems: "center"
  },

});

const drawerWidth = 250;

const SideMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
    <div className="MuiListItemIcon-root">
      <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
        <div>
        <div className={classes.label}>
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
          </div>
          <div className={classes.links}>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faHome} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faArchive} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faExchangeAlt} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Order" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCommentDots} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faFile} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Special Pages" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCopy} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Documentation" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faLayerGroup} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Multilevel" />
            </ListItem>
          </div>
          </div>
        </List>
        <div className={classes.linksFooter}>
          <List>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCog} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faSignOutAlt} className="fas" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
    </div>
  );
};

export default SideMenu;
