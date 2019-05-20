import React, { Component } from 'react';
import '../Stylesheet/style.css'; 
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
      return (
        <div className="header">
         <Link to="/" className="header-text">
                <h3 className="header-text">Bakery Food</h3>   
         </Link>
          
          <Link to="store_register" style={{ margin: "2px", borderRadius: "4px" }} className="regBtn btn btn-outline-success">
                             <b>Register store</b>
         </Link>
        </div>
      );
    }
  }
  
  export default HeaderComponent;
  