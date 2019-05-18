import React, { Component } from 'react';
import Product_Data from '../Product_Data/products';
import { Redirect } from 'react-router-dom';

class ProductShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_list: Product_Data,
            product_data: {}
        }
    }

    componentWillMount() {
        if (this.state.product_list && this.props.location.state) {
            let product_details = this.state.product_list.find((value) => {
                return value.product_id === this.props.location.state.id
            })
            this.setState({ product_data: product_details })
        }else{
            console.log("Product is not selected");
            return <Redirect to='/' />
        }
    }

    render() {
        console.log(this.state.product_data);
        return (
            <div className="product_design">
                <div className="product_detail">
                     <h3 className="product-detail"> Product Details </h3>
                     <div className="pro-img">
                        <h5>product img</h5>
                     </div>
                     {
                         this.props.location.state != null ?
                         <div className="pro-info">
                         <h2>{this.state.product_data.name}</h2>
                         <h3>Price: {this.state.product_data.price}</h3>
                         <p>{this.state.product_data.description}</p>
                         <h5>Qty: {this.state.product_data.in_stock} Hurry Up!!!</h5>
 
                     <div className="btn">
                         <button type="button" className="btn btn-primary">Buy Now</button>
                      </div>
                      </div>:<div style={{color:"red"}}>
                          <h1>No Product is selected</h1>
                      </div>
                     }
                   
                </div>
                   
            </div>
        )
    }
}


export default ProductShow;