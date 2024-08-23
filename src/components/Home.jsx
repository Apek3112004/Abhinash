import React from 'react'
import { assets } from '../assets/assets';
import Title from './Title';
import { events } from '../assets/assets';


const Home = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={assets.img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={assets.img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={assets.img3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Title  text1={"Our"} text2={"events"}/>

    </div>
  )
}

export default Home
