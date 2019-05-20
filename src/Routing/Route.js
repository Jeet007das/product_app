import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from '../Components/HeaderComponent';
import ProductShowComponent from '../Components/ProductShowComponent';
import ProductList from '../Components/ProductComponent';
import RegisterStore from '../Components/RegisterStoreComponent';
import CustomerDetails from '../Components/CustomerDetailComponent';

import history from '../routingHistory';


class Routing extends Component {
    render() {
        return (
            <div>
                <Router history= {history } >
                    <div style={{height:"100vh", overflow:"visible"}}>
                        <Header />
                        <Route path="/" exact component={ProductList} />
                        <Route path="/product" exact component={ProductShowComponent}/>
                        <Route path="/store_register" exact component={RegisterStore}/>
                        <Route path="/customer" exact component={CustomerDetails}/>
                    </div>
                </Router>

            </div>
        )
    }
}

export default Routing;