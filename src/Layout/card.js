import React, { useState } from 'react'

const Card = ({postdetails:{username,address,likes,filename,description,date}}) => {
    console.log("date",date)
    const[serverlike,setServerlike]=useState(0)
    function increaseLike(){
        setServerlike((pre)=>pre+1)
    }
  return(
    <div className='Card-container'>
            <h4 className='username'>{username.slice(0,1).toUpperCase()+username.slice(1)}</h4>
            <p className='blur-text'>{address}</p>
        
            <div className='series-dot-button-container'>
                <div className='series-btn-child'></div>
                <div className='series-btn-child'></div>
                <div className='series-btn-child'></div>
            </div>
        
       <img alt="images" src={`https://instacloneapp-r3v4.onrender.com/uploads/${filename}`} className="photo"/>
                <div>
                <img className='heart-image' alt="heart" src={require("../Layout/Logos/heart.png")} onClick={()=>increaseLike()}/>
                <span><img className='heart-image' alt="logo" src={require("../Layout/Logos/share.png")}/></span>
                <span className='date'>26-02-2023</span>
                </div>
                <div className='likes'>{likes===0?((serverlike===0)?"Tap to like":serverlike):`${serverlike}  Likes`}</div>
               
                
               {/* <div>
             
               <span className='likes' >
               
               </span>
               </div>
               </div> */}
               
               <div className='likes_description'>
               <p className='text para helvetica-font'>{description}</p>
               </div>
    </div>
  ) 
}

export default Card