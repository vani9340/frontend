import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
       <>
     <img src={require("./Logos/icon@2x.png")} alt="brand-img" className='target_icon'></img>
     <span className='instaclone'>Instaclone<Link to={"/post"}>
    <img src={require("./Logos/camera.png")} alt="camera_img" className='camera_icon'></img>
    </Link></span>
     <div className='line'></div>
 </>
  )
}

export default Navbar