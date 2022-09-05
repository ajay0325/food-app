import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import {useState,useEffect} from 'react';
import Products from './components/product/product';
import Login from './components/login/login';
import Footer from './components/footer/footer';
import img1 from '../src/zomato-image/banner.png';
import img2 from '../src/zomato-image/buffets.jpg';
import img3 from '../src/zomato-image/cafes.jpg';
import img4 from '../src/zomato-image/images.jpg';
import img5 from '../src/zomato-image/sweet tooth.jpg';
import img6 from '../src/zomato-image/veggie.jpeg';

function App() {
  const images = [img1,img2,img3,img4,img5,img6]

  // const order = [
  //   {
  //     img:img,
  //     item: "Noodles",
  //     offer: 20,
  //     restaurant: "Taj Hotel",
  //     price: 210
  //   },
  //   {
  //     item: "Cold Coffee",
  //     offer: 10,
  //     restaurant: "Cafe Bar",
  //     price: 110
  //   },
  //   {
  //     item: "Ice-Cream",
  //     offer: 10,
  //     restaurant: "Arun Ice-Creams",
  //     price: 150
  //   },
  //   {
  //     item: "Biriyani",
  //     offer: 25,
  //     restaurant: "Hotel Azad",
  //     price: 250
  //   }
  // ]

  const [isLoggedin, setLoggedIn] = useState(false);
  const loginHandler = (islogin) => {
    setLoggedIn(islogin);
  }
  const [items, setItems] = useState([]);

  useEffect(()=>{
    setLoggedIn(localStorage.getItem('login'))
    fetch('https://6314c7e8fa82b738f74e0f19.mockapi.io/login').then((response)=>{
      return response.json()
      
    }).then((data)=>{
      data.forEach((dat,i)=>{
        dat.image = images[i%images.length]
      })
      setItems(data)
    })
  },[]);
  return (
    <div className="App">
     <Header></Header>
     <div className='container'>
     {isLoggedin ? <Products logout={loginHandler}/> : <Login isLoggedin={loginHandler}/>}
    </div>
    <Footer></Footer>
    </div>
    
  );
}

export default App;
