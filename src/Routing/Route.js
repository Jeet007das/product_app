import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from '../Components/HeaderComponent';
import ProductShowComponent from '../Components/ProductShowComponent';
import ProductList from '../Components/ProductComponent';

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
                     </div>
                </Router>

            </div>
        )
    }
}

export default Routing;