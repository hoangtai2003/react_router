import { Component } from "react";
import {BrowserRouter as  NavLink,Route  } from "react-router-dom";
import Product from './Product';


class Products extends Component{

    render() {
        var  products = [
            {
                id: 1,
                slug: 'Hiện-1',
                name: 'Hoàng Đức Tài',
                price: 500
            },
            {
                id: 2,
                slug: 'Hiện-2',
                name: 'Hoàng Đức Tài',
                price: 500
            },
            {
                id: 3,
                slug: 'Hiện-3',
                name: 'Hoàng Đức Tài',
                price: 500
            },
        ];
        var {match} = this.props;
        var url = match.url;
        var result = products.map((product, index) => {
            return (
                <NavLink to ={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            );
        });
        return (
            <div className="container">
                <h1>Đây là sản phẩm</h1>
                
                <div className="row">
                    
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                
                <div className="row">
                    <Route path="/products/:slug" component={Product}/>
                </div>
                
            </div>
        );
    }
}


export default Products;
