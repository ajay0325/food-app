import React,{useState} from 'react';
import './fooditem.css'
// import image from '../assets/1.jpg'
import image from '../zomato-image/banner.png';

function FoodItems(props){

    const item = useState(props.item);
    const price = useState(props.price);
    const offer = useState(props.offer);
    const restaurant = useState(props.restaurant);

    return(
        
        <div className='foodItem'>
            <div className='img'>
                <img src={image}></img>
            </div>
            <h2>{item}</h2>
            <p>{"Rs."}{price}</p>
            <span>{offer}{"%Offer"}</span>
            <h5>{restaurant}</h5>
        </div>
    )
}

export default FoodItems;