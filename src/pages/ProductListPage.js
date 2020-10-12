import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/productListPage.css'

const products = ['car', 'bike', 'motocycle']

const ProductListPage = () => {

const list = products.map(e=>{
return(<li key = {e}><Link to = {`/product/${e}`} >{e}</Link></li>)
})

    return ( <div className = 'products'>
        <h2>lista</h2>
        <ul>{list}</ul>
        
        </div> );
}
 
export default ProductListPage;