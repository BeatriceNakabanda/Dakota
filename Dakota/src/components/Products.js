import { Box, Grid, Paper } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { styled, makeStyles } from "@material-ui/styles";
import useFetch from "../ui/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import theme from "../theme/theme";

const useStyles = makeStyles({
  mainSection: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    '$ .MuiDataGrid-columnHeaderTitle': {
      backgroundColor: 'rgba(255, 7, 0, 0.55)',
    }
  },
  contentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  btnFilter: {
    height: "40px",
    padding: "7px 14px",
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: "#FFF",
    color: "#a3a7a7",
    border:"#a3a7a7 1px solid",
    marginRight: "10px"
  },
  btn: {
    height: "40px",
    backgroundColor: "#3EBFBF",
    borderRadius: "10px",
    color: "white",
    padding: "7px 14px",
    cursor: "pointer",
    border: "#3EBFBF 1px solid"
  },
  title: {
    fontSize: "15px",
    color: "#505253"
  },
  dataTable: {
    border: 0
  }
});

const Products = () => {
  const classes = useStyles();
  const { data: products, isLoading, error } = useFetch("/products");
  const columns = [
    { field: "name", headerName: "PRODUCT TYPE", width: 172},
    { field: "code", headerName: "CODE",  width: 90},
    { field: "type", headerName: "TYPE", width: 108},
    { field: "date", headerName: "DATE", width: 108},
    { field: "price", headerName: "PRICE", width: 114 },
    { field: "status", headerName: "STOCK", width: 120  },
    { field: "code", headerName: "CODE", width: 130 },
    { field: "views", headerName: "STATUS",  width: 130 },
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
              className={classes.dataTable}
              style={{ fontSize: "12px", height: 400, width: "100%", border: 0, fontStyle: "bold" }}
              rows={products}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              elevation={0}
            />
        )}
      </Paper>
  );
};

export default Products;
