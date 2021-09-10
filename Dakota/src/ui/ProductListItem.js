import product_pic from '../img/furniture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const ProductListItem = ({products}) => {

    return ( 
        <div className="item">
        <table  table table-striped table-class>
        <thead>
            <td class="thead" className="checkbox"><input type="checkbox" id="product" name="product type" value="productType" /></td>
            <td class="thead" colspan="2">PRODUCT TYPE</td>
            <td class="thead">CODE</td>
            <td class="thead">TYPE</td>
            <td class="thead">DATE</td>
            <td class="thead">STOCK</td>
            <td class="thead">PRICE</td>
            <td class="thead">STATUS</td>
        </thead>
        <tbody>
                { products.map(product => (
                    <tr class="row">
                        <td className="checkbox"><input type="checkbox" id="product1" name="product type" value="productType" /></td>
                        <td className="image"><img src={product_pic} alt="" width="50dp" height="50dp" /></td>
                        <td><label for="product1">{product.name}</label></td>
                        <td>{product.code}</td>
                        <td>{product.type}</td>
                        <td>{product.date}</td>
                        <td>{product.stock}</td>
                        <td><b>{product.price}</b></td>
                        { product.status === "Active" && 
                            <td>
                                <p id="active"><FontAwesomeIcon icon={faCheckCircle} /> {product.status}</p>{product.views}
                            </td>
                        }
                        { product.status === "Disable" && 
                            <td>
                                <p id="disable"><FontAwesomeIcon icon={faCheckCircle} /> {product.status}</p>{product.views}
                            </td>
                        }
                        
                    </tr>
                ))}
                    
            </tbody>
            </table>
        </div>
     );
}
 
export default ProductListItem;