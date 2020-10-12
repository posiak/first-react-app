import React from "react";
import {Link} from 'react-router-dom';
import Product from '../components/Product';
import '../styles/productPage.css'



const ProductPage = ({match}) => {
  return (
  <div  className = "product">
    <h3>Strona produktu</h3>
    <Product id = {match.params.id}/>
    <Link to ="/products">Powrot do listy produktow</Link>
  </div>
  )
};

export default ProductPage;
