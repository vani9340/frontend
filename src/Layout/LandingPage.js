import React from 'react'
import {Link} from 'react-router-dom';
// import Post_view from './Post_view';
const LandingPage = () => {
  return (
    <div className='landpage-container'>
        <div className='wrap-container'>
        <div className='left-container'>
        <div className='land-image-container'>
            <img src={require("./Logos/10x_img.jpg")} alt="brand-img"></img>
        </div>
        </div>
        <div className='brand-name'>
            10x Team 04
            </div>
            <div className='child'>
            <Link to={"/view"}>
            <button className='btn-container'>Enter</button>
            </Link>
            </div>
        </div>
        </div>
  )
}

export default LandingPage