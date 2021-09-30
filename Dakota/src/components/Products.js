import { Box, Paper} from "@material-ui/core";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import useFetch from "../ui/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSortAmountDown, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import theme from "../theme/theme";
import product_pic from "../img/furniture.jpg";

const useStyles = makeStyles({
  root: {
    '& .MuiDataGrid-columnHeaderWrapper': {
      backgroundColor: '#F4F8F9',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontStyle: "bold",
      color:" #000",
      fontFamily: "sans-serif"
    }
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
  productImage: {
    borderRadius: "5px"
  }
 
});

const Products = () => {
  const classes = useStyles();
  const { data: products, isLoading, error } = useFetch("/products");

  function getFullStatus(params){
    return `
    ${params.getValue(params.id, 'status') || ''}  ${
      params.getValue(params.id, 'views') || ''
    }`;
  }

  
  const columns = [
    { 
      field: "image", 
      headerName: "IMAGE",
      width: 120, 
      renderCell: () => (
        <img className={classes.productImage} src={product_pic} alt="" width="50dp" height="50dp" />
      )
  },

  { field: "name", headerName: "PRODUCT TYPE", width: 200},
    { field: "code", headerName: "CODE",  width: 118},
    { field: "type", headerName: "TYPE", width: 120},
    { field: "date", headerName: "DATE", width: 108},
    { field: "stock", headerName: "STOCK", width: 120 },
    { field: "price", headerName: "PRICE", width: 114 },
    // { field: "status", headerName: "STATUS", width: 130 },
    // { field: "views", headerName: "VIEWS", width: 130 },
    { 
      field: "viewsStatus", 
      headerName: "STATUS", 
      width: 180,
      valueGetter: getFullStatus, sortComparator: (v1, v2) =>
      v1.toString().localeCompare(v2.toString()),
      renderCell: (params) => (

        <>
        <p>{params.getValue(params.id, 'status'  || '')}</p> {params.getValue(params.id, 'views'  || '')}
        </>
      )
    }
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
