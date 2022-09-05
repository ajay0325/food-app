import React, {Component} from 'react';

import FoodItems from '../fooditem/fooditem';

import './productlist.css'

// function OrderList(props) {

//     return (
//         <div>
//             {
//             props.orders.map((order) => {
//                 return <FoodItems key={Math.random()} location={order.location} hotel={order.hotel} food={order.food} qty={order.qty}></FoodItems>
//             })
//         }
//         </div>
//     )
// }

class ProductList extends Component{
    
    render(){
        return(
            <div className='productlist'>
            {
            
            this.props.foods.map((food) => {
                return <FoodItems key={Math.random()} item={food.item} price={food.price} offer={food.offer} restaurant={food.restaurant}></FoodItems>
            })
        }
        </div>
        )
    }
}


export default ProductList;