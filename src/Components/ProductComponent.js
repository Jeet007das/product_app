import React, { Component } from 'react';
import Product_Data from '../Product_Data/products';
import '../Stylesheet/style.css';
import { Link } from 'react-router-dom';


class ProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_list: Product_Data
        }
    }

    productShow = (products) => {
        return products.map((product, key) => {
            return (
                <Link to={{ pathname: '/product', state: { id: product.product_id } }} className="productObj">

                    {/* <div className = "product-img">
                        <img className="image" src= {product.images[0]} alt={product.name}/>
                    </div> */}
                    <div className="product-detail">
                        <h3 id={key}>{product.name}</h3>
                        <h5>Price : {product.price}</h5>
                        <p>{product.description}</p>
                    </div>
                </Link>

            )

        })

    }

    render() {
        return (
            <div className="product">
                <h3 className="product-heading">Products List</h3>
                <div className="products">

                    {
                        this.state.product_list.length > 0 ? this.productShow(this.state.product_list) : null

                    }
                </div>
            </div>
        );
    }
}

export default ProductComponent;