import { AppBar, Toolbar, Grid, Link, makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import profile_pic from "../img/baby.jpg";

const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: "#E4F4F4",
    color: "#3a5f79"
  },
  profile: {
    float: "right",
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    paddingLeft: "0px",
    borderRadius: "50%"
  },
  container: {
    // '$: hover': {
    //   backgroundColor: 'blue'
    // }
  },
  link: {
    paddingRight: "20px",
    color: "#3a5f79",
    fontSize: "larger"
  },
  name: {
    paddingLeft: "20px"
  },
  title: {
    paddingTop: "5px",
    fontWeight: "bold",
    fontSize: "x-large"
  }
  
}));
const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root} elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid item className={classes.title}>Product</Grid>
            <Grid item sm></Grid>
            <Grid item className={classes.profile}>
              <Link className={classes.link} to="/">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link className={classes.link} to="/">
                <FontAwesomeIcon icon={faBell} />
              </Link>
              <img src={profile_pic} alt="logo" width="40dp" height="40dp" className={classes.profileImage} />
              <p className={classes.name}>
                <b>Beatrice Nakabanda</b>
              </p>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
