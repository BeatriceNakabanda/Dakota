import {
  makeStyles,
  Grid,
  ListItem,
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
    height: "100vh",
    backgroundColor: "#FFF",
    fontSize: "18px",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: "250px",
        boxSizing: "border-box",
    },
  },
  links: {
    paddingTop: "0px",
  },
  link: {
    padding: "14px",
    color: "#7d7e80",
    fontSize: "13px",
    display: "block",
    marginTop: "5px",
    '&:hover': {
      textDecoration: "none",
      borderRight: "3px solid #82DCDD",
      color: "#82DCDD"
    }
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
    paddingBottom: "0px",
  },
  label: {
    paddingTop: "25px",
    display: "flex",
    alignItems: "center"
  },
  fas: {
    marginRight: "15px",
    fontSize: "18px"
  }

});


const SideMenu = () => {
  const classes = useStyles();
  return (
   
    <Grid className={classes.sideMenu} container direction="column">
      <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          "$ .MuiTypography-displayBlock": {
              fontSize: "12px",
              color: "red"
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid item >
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
          </Grid>
          <Grid item >
          <div className={classes.links}>
          <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faHome} className={classes.fas} />
          Dashboard
        </Link>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faArchive} className={classes.fas} />
           Product
        </Link>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faExchangeAlt} className={classes.fas} />
          Order
        </Link>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faCommentDots} className={classes.fas} />
          Chat
        </Link>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faFile} className={classes.fas} />
          Special Pages
        </Link>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faCopy} className={classes.fas} />
          Documentation
        </Link>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faLayerGroup} className={classes.fas} />
          Multilevel
        </Link>
          </div>
          </Grid>     
        <Grid item sm></Grid>
        <Grid item >
        <div className={classes.linksFooter}>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faCog} className={classes.fas} />
          Settings
        </Link>
        <Link className={classes.link} to="/">
          <FontAwesomeIcon icon={faSignOutAlt} className={classes.fas} />
          Logout
        </Link>
        </div>
        </Grid>   
      </Drawer>  
    </Grid>
  
  );
};

export default SideMenu;
