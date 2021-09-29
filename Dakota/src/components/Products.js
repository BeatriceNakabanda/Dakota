import { Box, Grid, Paper, Link } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { styled, makeStyles } from "@material-ui/styles";
import useFetch from "../ui/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import theme from "../theme/theme";

const useStyles = makeStyles({
  root: {
    '& .MuiDataGrid-columnHeaderWrapper': {
      backgroundColor: '#F4F8F9',
    },
    // '$ .MuiDataGrid-iconSeparator': {
    //   backgroundColor: '#F4F8F9',
    // },
  },
  mainSection: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: "8px",

  },
  contentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: "10px"
  },
  btnFilter: {
    height: "40px",
    padding: "7px 14px",
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: "#FFF",
    color: "#a3a7a7",
    border:"#a3a7a7 1px solid",
    marginRight: "10px",
    '&:hover': {
      color:" #3EBFBF",
      border: "#3EBFBF 1px solid"
    }
  },
  btn: {
    height: "40px",
    backgroundColor: "#3EBFBF",
    borderRadius: "10px",
    color: "white",
    padding: "7px 14px",
    cursor: "pointer",
    border: "#3EBFBF 1px solid",
    '&:hover': {
      backgroundColor: "#E4F4F4",
      color: "#3EBFBF"
    }
  },
  title: {
    fontSize: "15px",
    color: "#505253"
  },
 
});

const Products = () => {
  const classes = useStyles();
  const { data: products, isLoading, error } = useFetch("/products");
  const columns = [
    { field: "name", headerName: "PRODUCT TYPE", width: 180},
    { field: "code", headerName: "CODE",  width: 118},
    { field: "type", headerName: "TYPE", width: 108},
    { field: "date", headerName: "DATE", width: 108},
    { field: "stock", headerName: "STOCK", width: 120 },
    { field: "price", headerName: "PRICE", width: 114 },
    { field: "status", headerName: "STATUS", width: 130 },
    { field: "views", headerName: "VIEWS", width: 130 },
    // { 
    //   field: "other",
    //   headerName: "OTHER",  
    //   width: 130,
    //   renderCell: (params) => (
    //     <Link to="/">{params.value}</Link>
    //   ) 
    // },
  ];

  return (
      <Paper className={classes.mainSection} square>
        <Box className={classes.contentHeader} >
          <div className={classes.title}>
            <p>List Product</p>
          </div>
          <div className="buttons">
            <button className={classes.btnFilter}>
              <FontAwesomeIcon icon={faSortAmountDown} /> Filter
            </button>
            <button className={classes.btn}>
              <FontAwesomeIcon icon={faPlus} /> Add Product
            </button>
          </div>
        </Box>
        {products && (
          <DataGrid
            rowHeight={80}
              style={{ 
                fontSize: "12px", 
                height: 600, 
                width: "100%", 
                border: 0, 
                paddingTop: "30px",
                fontStyle: "bold",
                }}
              rows={products}
              columns={columns}
              pageSize={5}
              className={classes.root}
              rowsPerPageOptions={[5]}
              checkboxSelection
              elevation={0}
            />
        )}
      </Paper>
  );
};

export default Products;
