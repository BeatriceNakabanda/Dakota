import { Link } from 'react-router-dom';
import profile_pic from '../img/baby.jpg';
import useFetch from './useFetch';
import company_pic from '../img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArchive, faExchangeAlt, faCommentDots, faFile, faCopy, faLayerGroup, faCog, faSignOutAlt, faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faSearch, faBell, faPlus, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import ProductListItem from './ProductListItem';

const Home = () => {
    const { data: products, isLoading, error} = useFetch('/products');

    return ( 
        <div className="wrapper">
            <aside className="sideNavbar">
            <div>
            <div className="label">
                    <img src={company_pic} alt="logo" className="logo" width="40dp" height="40dp" />
                    <h3>Dakota</h3>
                </div>
                <div className="links">
                    <Link className="link" to="/"><FontAwesomeIcon icon={faHome} className="fas" />Dashboard</Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faArchive} className="fas" />Product</Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faExchangeAlt} className="fas" />Order</Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faCommentDots} className="fas" />Chat</Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faFile} className="fas" />Special Pages</Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faCopy} className="fas" />Documentation</Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faLayerGroup} className="fas" />Multilevel</Link>
                </div>
            </div>
                
                <div className="links_footer">
                    <Link className="link" to="/"><FontAwesomeIcon icon={faCog} className="fas" />Settings</Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faSignOutAlt} className="fas" />Logout</Link>
                </div>
            </aside>

        <div className="main_content">
            <header className="header">
                <h3><b>Product</b></h3>
                <div class="profile">
                    <Link className="link" to="/"><FontAwesomeIcon icon={faSearch} /></Link>
                    <Link className="link" to="/"><FontAwesomeIcon icon={faBell} /></Link>
                    <img src={profile_pic} alt="logo" width="40dp" height="40dp" />
                    <p><b>Beatrice Nakabanda</b></p>
                </div>
            </header>
            <div className="product_content">
                <nav className="content_header">
                <div className="title">
                    <p>List Product</p>
                </div>
                <div className="buttons">
                <button class="btn_filter"><FontAwesomeIcon icon={faSortAmountDown} /> Filter</button>
                    <button class="btn"><FontAwesomeIcon icon={faPlus} /> Add Product</button>
                </div> 
                </nav>
                <section className="content">
                    <div className="table">
                            { isLoading && <div>Loading....</div>}
                            { error && <div>{ error }</div> }
                            { products && <ProductListItem products={products} />}
                        
                    </div>
                    <div className="footer">
                      <div className="entries">
                          <p>Showing 1 to 5 of 25 entries</p>
                      </div>
                      <div className="pagination">
                        <Link className="pagination_link" to="#"><FontAwesomeIcon icon={faLessThan} /></Link>
                        <Link className="pagination_link" to="#">1</Link>
                        <Link className="pagination_link" to="#">2</Link>
                        <Link className="pagination_link" to="#">3</Link>
                        <Link className="pagination_link" to="#">4</Link>
                        <Link className="pagination_link" to="#">5</Link>
                        <Link className="pagination_link" to="#"><FontAwesomeIcon icon={faGreaterThan} /></Link>
                      </div>
                  </div>
                    
                </section>
            </div>
        </div>
        </div>
     );
}
 
export default Home;