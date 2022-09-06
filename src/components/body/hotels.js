// import './hotel.css'

// function Hotel(props){
    
//     return(
//         <div className="boxes">
//             <p>text</p>
//             <div className="box1"></div>
//             <p>{props.item}</p>
//             <p>{props.price}</p>
//             <p>{props.offer}</p>
//             <p>{props.rest}</p>
//             {console.log(props.item)}
//         </div>
//     )
// }

// export default Hotel;

import './hotel.css';

function Hotel(Props){
    return(
        <div className='container-name'>
            <div className='image'>
                <img src={Props.image}/>
            </div>
            <div className='box'>
                <h3>{Props.item}</h3>
                <p>{Props.price}</p>
                <p>{Props.offer}</p>
                <p>{Props.rest}</p>
            </div>
        </div>
    )
}

export default Hotel;