// // import { useEffect } from "react";
// import Hotel from './hotels';
// import './body.css'
// import {useState} from 'react'
// function Body(props){
//     // useEffect(()=>{},[])

//     // const [x,setX] = useState([...props.input])
//     return(
//         <div className='container'>
//             <p>My order</p>
//             <div className='content1'>
//             {
//                 props.input.map((data)=>{
//                     <Hotel key={Math.random()} item={data.item} price={data.price} offer={data.offer} 
//                     rest={data.restaurant}></Hotel>
//                 })

                
//             }
//             {console.log(props.input)}
//             {/* <Hotel/>
//             <Hotel/>
//             <Hotel/>
//             <Hotel/>
//             <Hotel/>
//             <Hotel/>
//             <Hotel/> */}
            
            
//             </div>
//         </div>
            
        
//     )
// }

// export default Body;

import './body.css';
import Hotel from './hotels';

import Create from './hotels';

function Body(Props) {

    let list = Props.input;

    return (
        <div className='container'>
           
            <div className='wrapper'>
                {
                    list.map((details) => {
                        return (
                            <Hotel key={Math.random()} image={details.image} item={details.item} price={details.price} rest={details.restaurant} rating={details.rating}></Hotel>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Body;