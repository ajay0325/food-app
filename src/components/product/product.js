import React, { useState } from "react";

import Form from "../form/form";

import ProductList from "../productlist/productlist";

import './product.css'

function Products(props) {
    const [foods, setfoods] = useState([]);

    const addNewFoods = (food) => {
        setfoods((prevfoods) => { return [food, ...prevfoods] });
        // console.log(order);
    }

    const logout = () => {
        props.logout(false)
    }


    return (
        <div className="body">
            <button onClick={logout} className='logout'>Log out</button>
            <Form add={addNewFoods} />
            <div className="myorder">
                <div>
                    <h1>My Foods</h1>
                    <ProductList foods={foods}></ProductList>
                </div>
            </div>
        </div>
    )
}

export default Products;