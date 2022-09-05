import react, { useState } from 'react';
import './form.css'
// import OrderList from './orderList';
// import MyOrder from './myOrder'

function Form(props) {

    const [newOrder, setOrder] = useState({
        item: '',
        price: '',
        offer: '',
        restaurant: ''
    })

    const eventHandler1 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, item: event.target.value })

        })
        // console.log(event.target.value);
        // setOrder({...newOrder, item :event.target.value});
    }
    const eventHandler2 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, price: event.target.value })
        })
        // setOrder({...newOrder, price :event.target.value});
    }
    const eventHandler3 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, offer: event.target.value })
        })
        // setOrder({...newOrder, offer :event.target.value});
    }
    const eventHandler4 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, restaurant: event.target.value })
        })
        // setOrder({...newOrder, restaurant :event.target.value});
    }

    const submitting = (event) => {
        event.preventDefault();
        setOrder({
            item: '',
            price: '',
            offer: '',
            restaurant: ''
        })
        props.add(newOrder);
        // console.log(newOrder);
    }


    return (
            <form onSubmit={submitting}>
                <input type="text" placeholder='Enter item' value={newOrder.item} onChange={eventHandler1} required/>
                <input type="number" placeholder='Enter price' value={newOrder.price} onChange={eventHandler2} required/>
                <input type="number" placeholder='Enter offer' value={newOrder.offer} onChange={eventHandler3} required/>
                <input type="text" placeholder='Restaurant' value={newOrder.restaurant} onChange={eventHandler4} required/>
                <button type='submit' className='order' >Add Foods</button>
            </form>

    )
}

export default Form;