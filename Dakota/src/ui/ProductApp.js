import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Products from "./Products";
import SideBar from "../components/SideBar";

const useStyles = makeStyles({
    appMain: {
        width: '100%',
        height: '100vh',
        paddingLeft: '250px',
        // backgroundColor: '#E4F4F4'
    }

})

const ProductApp = () => {
    const classes = useStyles();
    return ( 
        <>
            <SideMenu />
            {/* <SideBar /> */}
            <div className={classes.appMain}>
            <Header />
            <Products />
            </div>
            <CssBaseline />
        </>

     );
}
 
export default ProductApp;